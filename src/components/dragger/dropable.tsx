import { useDroppable } from "@dnd-kit/core"
import { ReactNode } from "react";

export default function Dropper({ cars }: { cars: string[] }) {

  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable'
  });

  const style = {
    color: isOver ? 'green' : undefined,
  }

  return (
    <div ref={setNodeRef} style={style} className="border-2 w-2/4 h-2/4 p-10 border-black m-10">
      {cars.map((ele, index) => {
        return <p key={index}>{ele}</p>
      })}
    </div>
  )
}