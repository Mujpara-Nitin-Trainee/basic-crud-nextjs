import { FieldErrors, UseFormRegister } from "react-hook-form";
import { formAttributes, formProp } from "@/types/types";
import { ChangeEventHandler } from "react";

export default function Input({ register, name, placeholder, handleChange, error }: { register: UseFormRegister<formAttributes>, name: formProp, placeholder: string, handleChange?: ChangeEventHandler<HTMLInputElement> | undefined, error: FieldErrors<formAttributes> }) {
  return (
    <>
      <input type='text' {...register(name, { onChange: handleChange })} placeholder={placeholder} className="my-3 opacity-80 border-2 border-black"></input>
      {(error[name as keyof object] as { type: string, message: string }) && <p> {(error[name as keyof object] as { type: string, message: string })?.message} </p>}
    </>
  )
}