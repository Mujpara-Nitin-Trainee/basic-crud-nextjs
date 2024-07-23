import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2>Shutter Bill Listing</h2>
      <Link href='/shutterBills'>click Here to See listing</Link>
    </main>
  );
}
