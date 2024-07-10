import React, { useState } from "react"; // Importation de React et du hook useState
import "./App.css"; // Importation des styles CSS

function App() {
  // Déclaration du state 'counter' initialisé à 0
  //useState permet de déclarer l'état de counter et setCounter sert à le mettre à jour
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="App">
        {/* Conteneur principal de l'application */}
        <header className="App-header">
          {/* En-tête de l'application */}
          <h1>Compteur</h1> {/* Titre */}
          {/* Cet input n'accepte que les nombres et sa valeur est liée à l'état de counter */}
          <input
            id="counter"
            onChange={(e) => setCounter(Number(e.target.value))} // Gestionnaire d'événements convertit la valeur en nombre et met à jour le compteur.
            type="number" // Type de l'input pour accepter uniquement les nombres
            name="counter" // Nom de l'input
            value={counter} // Valeur actuelle de l'input, liée au state 'counter'
          />
        </header>
        <div className="App-button">
          <button id="buttonmore" className="button" onClick={() => setCounter(counter + 1)}>+</button>
          {/* Bouton pour incrémenter le compteur + */}
          <button id="buttonless" className="button" onClick={() => setCounter(counter - 1)}>-</button>
          {/* Bouton pour décrémenter le compteur - */}
        </div>
      </div>
    </>
  );
}

export default App; // Exportation du composant App pour pouvoir l'utiliser ailleurs
