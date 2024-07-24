import Label from "../common/label";
import { Control, FieldArrayWithId, FieldErrors, set, useFieldArray, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { formAttributes } from "@/types/types";
import { useEffect, useState } from "react";
import { closestCenter, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import ShutterFields from "./shutterFields";

export default function Shutter({ register, control, watch, setValue, error }: { register: UseFormRegister<formAttributes>, control: Control<formAttributes>, watch: UseFormWatch<formAttributes>, setValue: UseFormSetValue<formAttributes>, error: FieldErrors<formAttributes> }) {

  const { fields, append, remove, move } = useFieldArray({ control, name: 'shutter' })

  const fieldValue = watch('shutter');

  const sensors = useSensors(
    useSensor(PointerSensor)
  );

  const handleArea = async (index: number) => {
    const width = fieldValue[index].width;
    const height = fieldValue[index].height;

    setValue(`shutter.${index}.area`, (width * height));
    calculateTotal()
  }

  const calculateTotal = () => {
    let total = 0;
    fieldValue.map((ele) => {
      total += Number(ele.area);
    })
    setValue(`total`, total);
  }

  const handleIncrement = () => {
    append({ shutterName: '', width: 0, height: 0, area: 0 });
  }

  const handleClone = async (index: number) => {
    append({ shutterName: fieldValue[index].shutterName, width: fieldValue[index].width, height: fieldValue[index].height, area: fieldValue[index].area });
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    let oldIndex = active.id;
    let newIndex = over?.id;

    fields.map((ele, index) => {
      if (ele.id === active.id) {
        oldIndex = index;
      } else if (ele.id === over?.id) {
        newIndex = index;
      }
    })

    move(Number(oldIndex), Number(newIndex));
  }

  useEffect(() => {
    calculateTotal()
  }, [fieldValue])

  return (
    <>
      <div className="flex justify-between items-center my-6 w-[78%]">
        <h3 className="text-2xl my-6 mx-10">Shutter Details</h3>
        <div>
          <button type="button" className="border-2 border-black px-2 mx-1 h-max" onClick={handleIncrement}>+</button>
        </div>
      </div>

      <div className="border-2 border-black p-10 h-3/4">
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
          <SortableContext items={fields} strategy={verticalListSortingStrategy}>
            {fields.map((ele, index) => <ShutterFields key={ele.id} index={index} data={ele} register={register} error={error}
              handleArea={handleArea} handleClone={handleClone} remove={remove} />)}

          </SortableContext>
        </DndContext>
      </div>

      <div className="flex justify-end w-[78%]">
        <div className="w-1/4 flex items-center justify-between">
          <Label name="Total"></Label>
          <input type="total" {...register('total')} readOnly className="my-3 opacity-80 border-2 border-black" />
        </div>
      </div>

    </>
  )
}