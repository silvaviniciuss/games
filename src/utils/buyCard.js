export const buyCard = () => {
    
    const cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    const suit = ["♦️", "♥️", "♣️", "♠️"]
    
    const randonNumber = cardValue[Math.floor(Math.random() * 13)]
    const randonSuit = suit[Math.floor(Math.random() * 4)]

    let value

    if(randonNumber === "A") {
        value = 11
    } else if (randonNumber === "J" || randonNumber === "Q" || randonNumber === "K") {
        value = 10
    } else {
        value = Number(randonNumber)
    }

    const card = {
        card: randonNumber + randonSuit,
        value: value
    }

    return card
}