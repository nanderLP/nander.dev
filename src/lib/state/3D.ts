import { atom } from "jotai";

/**
 * States for the 3D environment
 */

/**
 * 3D environment fully loaded
 */
const readyAtom = atom(false);

/**
 * mouse detected
 * used for control selection and more
 */
const mouseAtom = atom<boolean | null>(null);

/**
 * touch device detected
 * used for control selection
 */
const touchAtom = atom<boolean | null>(null);

/**
 * gyroscope or any other motion sensor detected
 * used for controls and potential animations
 */
const motionAtom = atom<boolean | null>(null);

/**
 * any information shown here will be displayed in a div
 * used for mobile debugging
 */
const debugAtom = atom<{ [key: string]: any }>({});

export { readyAtom, mouseAtom, motionAtom, touchAtom, debugAtom };
