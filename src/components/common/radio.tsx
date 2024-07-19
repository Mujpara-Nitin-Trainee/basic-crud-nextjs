import { formAttributes, formProp } from "@/types/types";
import { UseFormRegister } from "react-hook-form";

export default function Radio({ register, value, name }: { register: UseFormRegister<formAttributes>, name: formProp, value: string }) {
  return (
    <input type='radio' {...register(name)} value={value}></input>
  )
}