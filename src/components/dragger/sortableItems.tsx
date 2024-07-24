import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export default function SortableItems({ data }: { data: number }) {

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: data });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {data}
    </div>
  )
}