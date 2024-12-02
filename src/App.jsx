//! Esercizio
/* Oggi proviamo a usare lo stato di React!

Dato un array di oggetti contenente i linguaggi del web e le loro descrizioni:

    Crea una lista di bottoni, uno per linguaggio.
    
    Inserisci sotto una card che mostri il titolo e la descrizione del primo linguaggio nell’array.
    
    Fare in modo che, cliccando uno dei bottoni, 
    la card in basso visualizzi il linguaggio corrispondente e la relativa descrizione

Bonus

    Scomporre i buttons in componenti a parte che mantengono tutte le funzionalità  

    Se nessun linguaggio è selezionato, la card del dettaglio mostra “nessun linguaggio selezionato”
    
    Dare un colore diverso al bottone per cui il linguaggio è attualmente selezionato.
    
    Scomporre la card dei dettagli in un componente a parte che mantenga le sue funzionalità */

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
