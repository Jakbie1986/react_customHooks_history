import {  useState } from 'react';

const useStateWithHistory = (data) => {
   
    const [history, setHistory] = useState([]);
    const [currentState, setCurrentState] = useState(data);

    const setNewCurrentState = (value) => {
        setHistory(prev => [currentState,...prev ]);
        setCurrentState(value);
    }

    const returnToHistory = (index) => {
        setHistory(prev => {
            setCurrentState(prev[index]);
            return prev.slice(index+1, prev.length);
        });
    }

    return {
        history,
        currentState,
        returnToHistory,
        setNewCurrentState
    }

}

export default useStateWithHistory;