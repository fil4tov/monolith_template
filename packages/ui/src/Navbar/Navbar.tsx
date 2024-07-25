import { Link, LinkProps as TLinkProps } from 'react-router-dom';

export type LinkProps = {
  text: string;
} & Omit<TLinkProps, 'children'>;

export function Navbar({ links }: { links: LinkProps[] }) {
  return (
    <nav style={{ display: 'flex', gap: '12px' }}>
      {links.map(({ text, ...rest }, i) => (
        <Link key={i} {...rest}>
          {text}
        </Link>
      ))}
    </nav>
  );
}
