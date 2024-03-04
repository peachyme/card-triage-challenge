import {
  createContext,
  useState,
  useCallback,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import axios from "axios";
import { Card } from "../types";

export interface CardsContextInterface {
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
  fetchCards: () => Promise<void>;
  editCard: (_card: Card, _status: string) => Promise<void>;
}

const defaultState = {
  cards: [],
  setCards: (_cards: Card[]) => [],
  fetchCards: async () => {},
  editCard: async (_card: Card, _status: string) => {},
} as CardsContextInterface;

export const CardsContext = createContext(defaultState);

interface CardsProviderProps {
  children: ReactNode;
}

export default function CardsProvider({ children }: CardsProviderProps) {
  const [cards, setCards] = useState<Card[]>([]);

  const fetchCards = useCallback(async () => {
    const response = await axios.get("http://localhost:3000/cards");

    setCards(response.data);
  }, []);

  const editCard = useCallback(async (cardToUpdate: Card, newStatus: string) => {
    const response = await axios.put(`http://localhost:3000/cards/${cardToUpdate.id}`, {
      ...cardToUpdate,
      status: newStatus,
    });

    const updatedCards = cards.map((card) => {
      if (card.id === cardToUpdate.id) {
        return { ...card, ...response.data };
      }
      return card;
    });
    setCards(updatedCards);
  }, []);

  const valueToShare: CardsContextInterface = {
    cards,
    setCards,
    fetchCards,
    editCard,
  };

  return (
    <CardsContext.Provider value={valueToShare}>
      {children}
    </CardsContext.Provider>
  );
}
