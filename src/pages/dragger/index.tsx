import Draggable from '@/components/dragger/dragable';
import Dropper from '@/components/dragger/dropable';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';

export default function Dragger() {

  const cars = ['BMW', 'Mercedes', 'Audi', 'Mini Cooper'];

  const [carItems, SetCarItems] = useState<string[]>(['Testing Cars']);

  const addCars = (e: DragEndEvent) => {
    const newCar: string = e.active.data.current?.title;

    let flag = 0;

    carItems.map((ele) => {
      if (ele === newCar) {
        flag = 1;
      }
    })

    if (flag === 0) {
      const temp = [...carItems];
      temp.push(newCar);
      SetCarItems(temp);
    }
  }

  return (
    <DndContext onDragEnd={addCars}>
      {cars.map((ele, index) => {
        return <Draggable key={index} cars={ele} />
      })}
      <Dropper cars={carItems} />
    </DndContext>
  )
}