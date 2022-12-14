"use client";

// import clsx from 'clsx';
// import { useSelectedLayoutSegments } from 'next/navigation';
import Link from "next/link";

export default function GlobalNav() {
  //   const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div>
      <Link href="/"><u>Home</u></Link> {" "}
      <Link href="/layouts"><u>Layouts</u></Link> {" "}
      <Link href="/streaming"><u>Streaming</u></Link> {" "}
      <Link href="/context"><u>Context</u></Link> {" "}
      <Link href="/hooks"><u>Hooks</u></Link>
    </div>
  );
}
