import { useEffect, useState } from "react";
import useCardsContext from "../hooks/useCardsContext";
import Content from "../components/Content";
import Header from "../components/Header";
import { Card } from "../types";

function Home() {
  const [arrhythmias, setArrhythmias] = useState<string[]>([]);
  const [patientName, setPatientName] = useState<string>("");
  const [selectedArrhythmia, setSelectedArrhythmia] = useState<string>("");
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);

  const { fetchCards, cards } = useCardsContext();

  // fetch the patients' cards from the API
  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  
  // filter the cards on the search attributes states change
  useEffect(() => {
    let filtered = cards;

    // filter by patient name
    if (patientName) {
      filtered = filtered.filter((card: Card) =>
        card.patient_name.toLowerCase().includes(patientName.toLowerCase())
      );
    }

    // filter by arrythmia
    if (selectedArrhythmia) {
      filtered = filtered.filter((card: Card) =>
        card.arrhythmias.includes(selectedArrhythmia)
        
      );
    }
    setFilteredCards(filtered);
  }, [patientName, selectedArrhythmia, cards]); //use effect hook params to re-execute the filter when the search attributes change, or the cards

  // extract the arrythmias array from the cards -> turn it into a set to remove repititions
  useEffect(() => {
    // Update arrhythmias whenever cards data changes
    const allArrhythmias = cards.flatMap(card => card.arrhythmias);
    const uniqueArrhythmias = Array.from(new Set(allArrhythmias));
    setArrhythmias(uniqueArrhythmias);
  }, [cards]); // re-extract the array whenever the cards change


  return (
    <>
      <Header arrhythmias={arrhythmias} patientName={patientName} setPatientName={setPatientName} selectedArrhythmia={selectedArrhythmia} setSelectedArrhythmia={setSelectedArrhythmia} />
      <Content cards={filteredCards} />
    </>
    
  );
}

export default Home;
