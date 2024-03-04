import TimeIcon from "../icons/TimeIcon";
import { Card } from "../types";
import Arrhythmia from "./Arrhythmia";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  card: Card;
  index: number;
}

function Cardc({ card, index }: Props) {
  return (
    <Draggable draggableId={`${card.id}`} key={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`bg-columnBgColorDark flex flex-col gap-4 overflow-x-auto p-3 h-[90px] min-h-[90px] rounded-md hover:ring-2 hover:ring-inset hover:ring-gray-500 cursor-grab relative ${
            snapshot.isDragging
              ? "bg-columnBgColorDrag/50 ring-2 ring-inset ring-gray-500"
              : ""
          }`}
        >
          <div className=" flex justify-between">
            <div className="flex gap-2">
              {card.patient_name}
              <div className={`relative grid rounded-full text-xs text-gray-800 px-2 py-1 ${card.status==="PENDING" ? "bg-blue-200" : card.status==="DONE" ? "bg-green-200" : "bg-rose-100"}`}>
                <span>{card.status}</span>
              </div>
            </div>
            <div className="flex gap-1 text-sm text-gray-800">
              {new Date(card.created_date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
              <TimeIcon />
            </div>
          </div>
          <div className="flex gap-2">
            {card.arrhythmias.map((arrhythmia) => (
              <Arrhythmia arrhythmia={arrhythmia} key={arrhythmia} />
            ))}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Cardc;
