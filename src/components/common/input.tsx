import { UseFormRegister } from "react-hook-form";
import { formAttributes, formProp } from "@/types/types";
import { ChangeEventHandler } from "react";

export default function Input({ register, name, placeholder, handleChange }: { register: UseFormRegister<formAttributes>, name: formProp, placeholder: string, handleChange?: ChangeEventHandler<HTMLInputElement> | undefined }) {
  return (
    <>
      <input type='text' {...register(name)} placeholder={placeholder} onChange={handleChange} className="my-3 opacity-80 border-2 border-black"></input>
    </>
  )
}