
import { useState } from 'react';
import './App.css';

function App() {

  const [estado, setEstado] = useState("ENTRADA")
  const [palpite, setPalpite] = useState(150)
  const [numPalpite, setNumPalpite] = useState(1)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)

const iniciarJogo = () => {
  setEstado("RODANDO")
  setMin(0)
  setMax(300)
  setNumPalpite(0)
  setPalpite(150)
}
if (estado === "ENTRADA"){
  return <button onClick={iniciarJogo} >Começar a Jogar!</button>
}

const menor = () => {
  setNumPalpite(numPalpite+1)
  setMax(palpite)
  const proxPalpite = parseInt((palpite-min)/2) + min 
  setPalpite(proxPalpite)
}

const maior = () => {
  setNumPalpite(numPalpite+1)
  setMin(palpite)
  const proxPalpite =  parseInt((max-palpite)/2) + palpite
  setPalpite(proxPalpite)
}

const acertou = () => {
  setEstado("FIM")
}
if (estado === "FIM"){
  return <div>
    <p>Acertei com {numPalpite} palpites.</p>
    <button onClick={iniciarJogo}>Jogar de novo</button>
  </div>
}
  return (
    <div className="App">
      <p>O seu numero é {palpite}</p>
      <p>Min: {min} / Max: {max}</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

export default App;
