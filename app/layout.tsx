// import "@/styles/dist.css";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import GlobalNav from "./GlobalNav";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
      <GlobalNav />
        {children}</body>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </html>
  );
}
