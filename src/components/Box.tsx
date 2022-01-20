import { FC } from "react";

const Box: FC<{ title: string; subtitle?: string }> = ({
  children,
  title,
  subtitle,
}) => (
  <div className="prose dark:prose-invert p-4 shadow-xl flex flex-col dark:bg-neutral-900 rounded-2xl">
    <h2 className="mb-1">{title}</h2>
    {subtitle && <h3 className="text-sm">{subtitle}</h3>}
    {children}
  </div>
);

export default Box;
