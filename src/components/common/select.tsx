import { formAttributes, formProp } from "@/types/types"
import { UseFormRegister } from "react-hook-form"

export default function Select({ name, options, register }: { name: formProp, options: { key: number, value: string }[], register: UseFormRegister<formAttributes> }) {
  return (
    <>
      <select {...register(name)} className="border-2 border-black w-[55%]">
        {options.map((ele, index) => {
          return <option key={index} value={ele.key}>{ele.value}</option>
        })}
      </select >
    </>
  )
}