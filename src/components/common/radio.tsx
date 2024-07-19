import { formAttributes, formProp } from "@/types/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export default function Radio({ register, value, name, error }: { register: UseFormRegister<formAttributes>, name: formProp, value: string, error: FieldErrors<formAttributes> }) {
  return (
    <>
      <input type='radio' {...register(name)} value={value}></input>
      {(error[name as keyof object] as { type: string, message: string }) && <p> {(error[name as keyof object] as { type: string, message: string })?.message} </p>}
    </>
  )
}