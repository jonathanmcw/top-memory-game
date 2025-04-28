import { useEffect, useState } from 'react'
import Card from './Card'

/* How it works:
A list of card opened by default, showing content
[user] click on any card
[system] picks the card to the back, shuffle the cards, and then show the cards again
[user] select another card
[system] if any of the card selected is already selected, declare user has lost
[system] user wins if all cards are picked correctly without second mistake
*/ 

function GameBoard() {
    const [shuffledCards, setShuffledCards] = useState(cards);
    const [isEnding, setEnding] = useState("");
    // Player is Done
    // Player wins

    function handlePick(idx) {
        let ar = shuffledCards.map((card, i) => {
            if (card.id === idx) {
                if (card.previouslyPicked) {
                    setEnding("Player is Done");
                    return card; // No changes needed as the game ends
                }
                return {...card, isPicked: !card.isPicked, previouslyPicked: true};
            }
            return card;
        });

        setShuffledCards(ar);
        
        setTimeout(() => {
            let arr = ar.map((card) => {
                return card.id === idx ? { ...card, isPicked: false } : card;
            });

            for ( let i = ar.length - 1; i >= 0 ; i-- ) {
            let j = Math.floor(Math.random() * ( i + 1));
            [ arr[i], arr[j] ] = [ arr[j] , arr[i] ]
            }

            setShuffledCards(arr);
        }, 1000);
    }

    useEffect(() => {
        if (isEnding) {
            console.log(isEnding);
        } else if (shuffledCards.every(card => card.previouslyPicked) && !isEnding) {
            console.log("player win!");
        }
    }, [handlePick]);

    return (
        <section className="memory-grid">
        {
            shuffledCards.map((card) => (
                <Card 
                    key={card.id} 
                    id={card.id} 
                    content={card.content}
                    isPicked={card.isPicked}
                    onPick={() => handlePick(card.id)}
                />        
            ))
        }
        </section>
    )
}

const cards = [
    { id: 1, content: "A", isPicked:false, previouslyPicked: false },
    { id: 2, content: "B", isPicked:false, previouslyPicked: false },
    { id: 3, content: "C", isPicked:false, previouslyPicked: false },
    { id: 4, content: "D", isPicked:false, previouslyPicked: false },
    { id: 5, content: "E", isPicked:false, previouslyPicked: false },
    { id: 6, content: "F", isPicked:false, previouslyPicked: false },
];

export default GameBoard;