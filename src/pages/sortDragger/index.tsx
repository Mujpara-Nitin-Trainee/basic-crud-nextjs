import SortableItems from '@/components/dragger/sortableItems';
import { closestCenter, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';

export default function SortDragger() {

  const [items, SetItems] = useState([1, 2, 3]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    console.log(active, over);

    SetItems((items) => {
      const oldIndex = items.indexOf(Number(active.id));
      const newIndex = items.indexOf(Number(over?.id));

      return arrayMove(items, oldIndex, newIndex);
    })

  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((ele, index) => <SortableItems key={index} data={ele} />)}
      </SortableContext>
    </DndContext>
  )
}