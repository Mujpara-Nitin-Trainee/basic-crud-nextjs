import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

export default function Draggable({ cars }: { cars: string }) {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: cars,
    data: { title: cars }
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  // const style = transform ? {
  //   transform: `translate3d(${transform.x}px, ${transform.y}px,0)`,
  // } : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {cars}
    </div>
  )
}