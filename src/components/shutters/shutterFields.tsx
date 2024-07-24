import { formAttributes } from "@/types/types";
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { FieldArrayWithId, FieldErrors, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";
import Label from "../common/label";
import Input from "../common/input";
import Select from "../common/select";

const options = [
  {
    value: "Panel Shutter"
  },
  {
    value: "Board and batten shutters"
  }
]
export default function SortableItems({ data, index, register, error, handleArea, handleClone, remove }: { data: FieldArrayWithId<formAttributes, "shutter", "id">, index: number, register: UseFormRegister<formAttributes>, error: FieldErrors<formAttributes>, handleArea: (index: number) => Promise<void>, handleClone: (index: number) => Promise<void>, remove: UseFieldArrayRemove }) {

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: data.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div key={index} ref={setNodeRef} style={style} >
      <div>
        <div className="flex justify-center my-3 w-[95%]">
          <div className="flex items-center" {...attributes} {...listeners}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 9a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H9V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v6H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1h6v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1V9h1zm-3-4h2v2h-2V5zM5 5h2v2H5V5zm2 14H5v-2h2v2zm12 0h-2v-2h2v2zm-2-4h-1a1 1 0 0 0-1 1v1H9v-1a1 1 0 0 0-1-1H7V9h1a1 1 0 0 0 1-1V7h6v1a1 1 0 0 0 1 1h1v6z"></path></svg>
          </div>
          <div className="w-2/4 flex items-center justify-between mx-10 ">
            <Label name="Shutter Name"></Label>
            <div className="w-full">
              <Select name={`shutter.${index}.shutterName`} error={error} options={options} register={register} />
              {(error[`shutter` as keyof object] as { shutterName: { type: string, message: string } }) && <p className="text-red-300"> {(error[`shutter` as keyof object] as
                { shutterName?: { type: string, message: string }; }[])![index]?.shutterName?.message} </p>}
            </div>
          </div>
          <div className="w-2/4 flex items-center justify-between">
            <Label name="width"></Label>
            <div>
              <Input name={`shutter.${index}.width`} register={register} error={error} handleChange={() => handleArea(index)} placeholder="Enter your width" />
              {(error[`shutter` as keyof object] as { width: { type: string, message: string } }) && <p className="text-red-300"> {(error[`shutter` as keyof object] as
                { width?: { type: string, message: string }; }[])![index]?.width?.message} </p>}
            </div>
          </div>

          <div className="w-2/4 flex items-center justify-between mx-10">
            <Label name="height"></Label>
            <div>
              <Input name={`shutter.${index}.height`} register={register} error={error} handleChange={() => handleArea(index)} placeholder="Enter your height" />
              {(error[`shutter` as keyof object] as { height: { type: string, message: string } }) && <p className="text-red-300"> {(error[`shutter` as keyof object] as
                { height?: { type: string, message: string }; }[])![index]?.height?.message} </p>}
            </div>
          </div>
          <div className="w-2/4 flex items-center justify-between">
            <Label name="area"></Label>
            <input type="text" {...register(`shutter.${index}.area`)} readOnly className="my-3 opacity-80 border-2 border-black" />
          </div>
          <div className="w-2/4 flex items-center justify-between mx-10">
            <div className="w-[25%] flex justify-between">
              <button type="button" onClick={() => handleClone(index)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"></path><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path></svg></button>
              <button type="button" className="flex float-right" onClick={() => remove(index)}>
                <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}