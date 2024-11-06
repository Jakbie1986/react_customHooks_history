import { useState } from "react";
import useStateWithHistory from "../hooks/useStateWithHistory"

const Hook = () => {
    const {history, currentState, returnToHistory, setNewCurrentState} = useStateWithHistory('Dodaj element do historii. Kliknięcie elementu z listy przywraa stan do tego elementu');
    const [inputValue, setInputValue] = useState('');

    const handleClik = () => {
        setNewCurrentState(inputValue);
        setInputValue('');
    }
  
    return (
        <div>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
            <button onClick={handleClik}>Zapisz</button>
            <h3>{currentState}</h3>
            <ul>
                {history.map((el, index) => <li key={index} onClick={()=>returnToHistory(index)}>{el}</li>)}
            </ul>
        </div>
    )
}

export default Hook;