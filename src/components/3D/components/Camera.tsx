import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { FC, useEffect, useState } from "react";
import { Euler, Vector3 } from "three";
import { damp, degToRad } from "three/src/math/MathUtils";
import { debugAtom, motionAtom, touchAtom } from "../../../lib/state/3D";

const Camera: FC = () => {
  const { camera, mouse, viewport } = useThree();
  const [touch, setTouch] = useAtom(touchAtom);
  const [motion, setMotion] = useAtom(motionAtom);
  const [_, setDebug] = useAtom(debugAtom);

  const [deviceRotation, setDeviceRotation] = useState<Euler | null>(null);

  useEffect(() => {
    console.log(viewport);
  }, [viewport]);

  // for mouse
  useFrame(() => {
    // disable "mouse" if touch or motion input was detected
    // touch input destroys this effect, motion will conflict
    if (!touch && !motion) {
      camera.rotation.x = damp(camera.rotation.x, mouse.y * 0.1, 0.1, 0.1);
      camera.rotation.y = damp(camera.rotation.y, mouse.x * -0.1, 0.1, 0.1);
    } else if (motion && deviceRotation) {
      camera.rotation.x = camera.rotation.x + deviceRotation.x * 0.005;
      camera.rotation.y = camera.rotation.y + deviceRotation.z * 0.00005;
    }
  });

  useEffect(() => {
    // detect touch input
    window.addEventListener(
      "touchstart",
      () => {
        setTouch(true);
      },
      { once: true }
    );

    // detect motion
    if (window.DeviceMotionEvent) {
      window.addEventListener(
        "devicemotion",
        (e) => {
          // chrome desktop emits a devicemotion event on load, even if no motion was detected
          // i'll check if the x acceleration value exists to determine if motion is available
          if (e.rotationRate && e.rotationRate.alpha !== null) {
            setMotion(true);
          } else setMotion(false);
        },
        { once: true }
      );
    } else setMotion(false);
  }, []);

  useEffect(() => {
    if (!motion) return;
    // motion is available, track motion and adjust camera
    const adjustCamera = (e: DeviceMotionEvent) => {
      if (e.rotationRate) {
        setDebug((prev) => ({
          ...prev,
          motionRotation: { beta: e.rotationRate?.beta?.toFixed(4) },
        }));
        const euler = new Euler();
        const { alpha, beta, gamma } = e.rotationRate;
        if (alpha) {
          euler.x = degToRad(alpha);
        }
        if (beta) {
          euler.z = beta;
        }
        if (beta) {
          euler.y = beta;
        }
        setDeviceRotation(euler);
      } else setDeviceRotation(null);
    };
    window.addEventListener("devicemotion", adjustCamera);
    return () => window.removeEventListener("devicemotion", adjustCamera);
  }, [motion]);

  return null;
};

export default Camera;
