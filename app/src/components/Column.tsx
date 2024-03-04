import { Card } from "../types";
import Cardc from "./Cardc";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  id: string;
  title: string;
  cards: Card[];
}


function Column({ id, title, cards }: Props) {
  return (
    <div
      className="
        w-[450px]
        h-[600px]
        max-h-[600px]
        rounded-md
        shadow-md
        mb-5
        shadow-gray-400
        bg-columnBgColorLight
        flex
        flex-col"
    >
      {/* Column title */}
      <div
        className="
            text-md
            h-[50px]
            rounded-md
            rounded-b-none
            p-3
            font-bold
            border-columnBgColorLight
            border-4"
      >
        {/* Display number of cards */}
        <div className="flex gap-2">
          <div
            className="
                flex
                justify-center
                items-center
                bg-columnBgColorDark
                px-2
                py-1
                text-sm
                rounded-full"
          >
            {cards.length}
          </div>
          {title}
        </div>
      </div>

      {/* Column content : Cards */}
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto ${
              snapshot.isDraggingOver ? "bg-columnBgColorDark/25 " : ""
            }`}>
            {cards.map((card,index) => (
              <Cardc key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {/* Column footer */}
      {/* <div>Footer</div> */}
    </div>
  );
}

export default Column;
