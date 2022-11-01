import styles from "../../components/2D/styles/Interface.module.css";

import { animate } from "motion";

/**
 * make classname a valid css selector
 */
const c = (className: string) => `.${className}`;

const introAnimation = () =>
  animate(
    c(styles.container),
    {
      //paddingTop: "10vh"
    },
    {
      duration: 1,
    }
  );

export { introAnimation };
