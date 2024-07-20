import { formAttributes, formProp } from "@/types/types";
import { ChangeEventHandler } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export default function Radio({ register, value, handleChange, name, error }: { register: UseFormRegister<formAttributes>, handleChange?: ChangeEventHandler<HTMLInputElement> | undefined, name: formProp, value: string, error: FieldErrors<formAttributes> }) {
  return (
    <>
      <input type='radio' {...register(name, { onChange: handleChange })} value={value}></input >
      {(error[name as keyof object] as { type: string, message: string }) && <p> {(error[name as keyof object] as { type: string, message: string })?.message} </p>
      }
    </>
  )
}