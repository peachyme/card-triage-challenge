
import Home from './pages/Home';
import CardsProvider from './context/CardContext';

function App() {

  return (
    <CardsProvider>
      <Home />
    </CardsProvider> 
  )
}

export default App
