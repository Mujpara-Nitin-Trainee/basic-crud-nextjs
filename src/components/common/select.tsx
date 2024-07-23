import { formAttributes, formProp } from "@/types/types"
import { FieldErrors, UseFormRegister } from "react-hook-form"

export default function Select({ name, options, register, error }: { name: formProp, options: { value: string }[], register: UseFormRegister<formAttributes>, error: FieldErrors<formAttributes> }) {
  return (
    <>
      <select {...register(name)} className="border-2 border-black w-[55%]">
        {options.map((ele, index) => {
          return <option key={index} value={ele.value}>{ele.value}</option>
        })}
      </select >
      {(error[name as keyof object] as { type: string, message: string }) && <p> {(error[name as keyof object] as { type: string, message: string })?.message} </p>
      }
    </>
  )
}