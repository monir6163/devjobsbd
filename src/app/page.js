import Image from "next/image";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center text-blue-900 dark:text-gray-100">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p className="text-xl text-center">
        Get started by editing{" "}
        <code className="p-3 font-mono text-lg bg-gray-100 rounded-md dark:bg-gray-800">
          pages/index.js
        </code>
      </p>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={300}
        height={64}
        className="mt-12 dark:filter dark:invert"
      />
    </main>
  );
}
