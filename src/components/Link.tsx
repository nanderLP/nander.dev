import { LinkProps } from "next/link";
import Link from "next/link";
import { FC } from "react";

type Props = LinkProps;

const CustomLink: FC<Props> = ({ children, ...props }) => {
  return <Link {...props}></Link>;
};

export default CustomLink;
