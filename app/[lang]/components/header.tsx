import Link from "next/link";

export default function Header({ dict }: { dict: any }) {
  return (
    <div>
      <div>{dict.title}</div>
      <div>
        <Link href="/en">
          <div>EN</div>
        </Link>
        <Link href="/nl">
          <div>NL</div>
        </Link>
      </div>
    </div>
  );
}
