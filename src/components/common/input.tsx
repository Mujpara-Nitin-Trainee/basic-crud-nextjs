import { UseFormRegister } from "react-hook-form";
import Label from "./label";
import { formAttributes, formProp } from "@/types/types";

export default function Input({ register, name, placeholder }: { register: UseFormRegister<formAttributes>, name: formProp, placeholder: string }) {
  return (
    <>
      <input type='text' {...register(name)} placeholder={placeholder} className="my-3 opacity-80 border-2 border-black"></input>
    </>
  )
}