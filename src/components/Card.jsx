export default function Card() {

    function flipCard(e) {
        const card = e.currentTarget;
        console.log(`Card is flipped ${card}`)
        // const cardId = card.getAttribute('id');
        // console.log(cardId);
    
        // event.target
    }

    return(
        // ??? key ??? ///
        <div className="memory-card" onClick={flipCard}> 
            <div className="card-inner">
                <div className="card-front">
                    XXXXXX
                </div>
                <div className="card-back">
                    
                </div>
            </div>
        </div>
    )
}