import { useState } from 'react'

export default function Card({id, content, isPicked, onPick}) {
    // const [CardIsPicked, setCardIsPicked] = useState("")

    return(
        // ??? key ??? ///
        <div className="memory-card" id={id} onClick={onPick}> 
            <div className={`card-inner ${ (isPicked) ? "is-picked" : ""}`}>
                <div className="card-front">
                    {content}
                </div>
                <div className="card-back">
                    
                </div>
            </div>
        </div>
    )
}