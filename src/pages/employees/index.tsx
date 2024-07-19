// import Link from "next/link"
import BasicUser from "@/components/basicUser"
import Discount from "@/components/discount"
import Shutter from "@/components/shutter"
import { formAttributes } from "@/types/types";
import { useForm } from "react-hook-form"

export default function About() {

  const { register, control, handleSubmit } = useForm<formAttributes>();

  const handleForm = (formData: formAttributes) => {
    console.log(formData);
  }

  return <>
    <p className="text-3xl text-center">Add Details</p>
    <form onSubmit={handleSubmit(handleForm)}>
      <BasicUser register={register} control={control} />
      <Shutter register={register} />
      <Discount register={register} />
      <input type="submit" value="Submit"></input>
      {/* <Link href='/'>Home</Link> */}
    </form>
  </>
}