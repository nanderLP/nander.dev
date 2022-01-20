import { FC } from "react";

const Button: FC = ({ children, ...props }) => (
  <button className={`bg-neutral-800 py-2 px-4 rounded-2xl`} {...props}>
    {children}
  </button>
);

export default Button;
