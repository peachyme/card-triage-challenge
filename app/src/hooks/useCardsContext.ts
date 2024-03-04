import { useContext } from 'react';
import { CardsContext } from '../context/CardContext';

function useCardsContext() {
    return useContext(CardsContext);
}

export default useCardsContext;