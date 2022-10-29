import styles from "./Tooltip.module.css";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { FC, ReactNode } from "react";

const Tooltip: FC<{ children: ReactNode; content: ReactNode }> = ({
  children,
  content,
}) => {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger className={styles.trigger}>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content side="bottom" className={styles.content}>
          <TooltipPrimitive.Arrow style={{ fill: "var(--outline)" }} />
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
