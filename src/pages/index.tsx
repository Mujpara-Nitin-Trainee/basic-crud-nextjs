import Link from "next/link";
import { Inter } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  try {
    const response = await axios('https://jsonplaceholder.typicode.com/posts');

    const data = response.data;

    return { props: { data } }

  } catch (err) {
    console.log(err);
  }
}

export default function Home(props: { data: { userId: number, id: number, title: string, body: string }[] }) {
  console.log(props.data[0].userId);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2>Shutter Bill Listing</h2>
      <Link href='/shutterBills'>click Here to See listing</Link>
    </main>
  );
}
