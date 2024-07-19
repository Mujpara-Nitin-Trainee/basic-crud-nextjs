import Link from "next/link"
import BasicUser from "@/components/basicUser"

export default function About() {
  return <>
    <p className="text-3xl text-center text-lime-200">About</p>
    <BasicUser />
    <Link href='/'>Home</Link>
  </>
}