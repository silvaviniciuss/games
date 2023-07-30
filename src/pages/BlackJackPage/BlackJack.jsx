import { useEffect, useState } from "react"
import { buyCard } from "../../utils/buyCard"

export const BlackJack = () => {
    
    const [userCards, setUserCards] = useState()

    useEffect(()=>{
        initialCards()
    },[])
    
    const initialCards = () => {
        let userCards = []
        userCards.push(buyCard())
        userCards.push(buyCard())
        setUserCards(userCards)
    }

    console.log(userCards)

    return (
        <>
        <h1>Black Jack Game</h1>
        {/* <p>{userCards}</p> */}
        </>
    )
}