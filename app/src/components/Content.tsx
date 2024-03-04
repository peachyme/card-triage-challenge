import Column from "./Column";
import { Card } from "../types";
import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
// import useCardsContext from "../hooks/useCardsContext";
interface Props {
  cards: Card[];
}
function Content(props: Props) {
  const { cards } = props;
  // const { editCard } = useCardsContext();

  // states for different types of cards (cards' status)
  const [pendingRejectedCards, setPendingRejectedCards] = useState<Card[]>([]);
  const [doneCards, setDoneCards] = useState<Card[]>([]);

  // filter the cards into 2 arrays : pending+rejected & done
  useEffect(() => {
    // Filter cards only when the cards prop changes
    setPendingRejectedCards(cards.filter((card) => card.status === "PENDING" || card.status === "REJECTED"));
    setDoneCards(cards.filter((card) => card.status === "DONE"));
  }, [cards]);

  // function to execute when we drag and drop a card
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // if the source column is the same as the destination column
    if (!destination || source.droppableId === destination.droppableId) return;

    // if not : remove the card from the source column
    removeCard(source.droppableId, parseInt(draggableId));

    // add the card tp the destination column
    const card: any = findCardById(parseInt(draggableId), [
      ...pendingRejectedCards,
      ...doneCards,
    ]);

    addCard(destination.droppableId, card);
  };

  // remove the card from the source column
  function removeCard(sourceColumnId: string, cardId: number) {
    switch (sourceColumnId) {
      case "1":
        setPendingRejectedCards(pendingRejectedCards.filter((card: Card) => card.id != cardId));
        break;
      case "2":
        setDoneCards(doneCards.filter((card: Card) => card.id != cardId));
        break;
    }
  }

  // find card by id
  function findCardById(id: number, cards: Card[]) {
    return cards.find((card: Card) => card.id == id);
  }

  // add the card to the destination column
  function addCard(destinationColumnId: string, card: Card | any) {
    let updatedCard;
    switch (destinationColumnId) {
      case "1":
        updatedCard = { ...card, status: "REJECTED" };
        setPendingRejectedCards([updatedCard, ...pendingRejectedCards]);
        // editCard(card, "REJECTED");
        break;
      case "2":
        updatedCard = { ...card, status: "DONE" };
        setDoneCards([updatedCard, ...doneCards]);
        // editCard(card, "DONE");
        break;
    }
  }

  return (
    <div
      className="m-auto
        flex
        w-full
        items-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]"
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="m-auto flex gap-8">
          <Column id={"1"} title={"Pending + Rejected"} cards={pendingRejectedCards} />
          <Column id={"2"} title={"Done"} cards={doneCards} />
        </div>
      </DragDropContext>
    </div>
  );
}

export default Content;
