import Link from "next/link";

export default function NavbarItem(props) {
  const { route, children } = props;

  return (
    <div>
      <Link href={route}><a>{children}</a></Link>
    </div>
  );
}
