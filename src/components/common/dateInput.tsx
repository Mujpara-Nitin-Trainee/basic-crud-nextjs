import { formAttributes, formProp } from "@/types/types";
import DatePicker from "react-datepicker";
import { Control, Controller } from "react-hook-form";

export default function DateInput({ control, name }: { control: Control<formAttributes>, name: formProp }) {
  return (
    <>
      <Controller control={control} name={name}
        render={({ field }) => (
          <DatePicker className="border-2 border-black w-[99%] my-3" dateFormat="YYYY-MM-dd" onChange={(date) => field.onChange(date)}
            selected={new Date()} />
        )} />
    </>
  )
}