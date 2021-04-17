import Link from 'next/link';

export const Navigation = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};
