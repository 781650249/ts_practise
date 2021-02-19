

type Deck = NormalCard[]

type Color = '♥️' | '♠️' | '♦️' | '♣️';

type NormalCard = {
    color: Color
    mark: number
}


function createDeck(): Deck {

    const desk: Deck = []
    for (let i = 1; i <= 13; i++) {
        desk.push({
            color: '♠️',
            mark: i
        })
        desk.push({
            color: '♣️',
            mark: i
        })
        desk.push({
            color: '♥️',
            mark: i
        })
        desk.push({
            color: '♦️',
            mark: i
        })
    }
    return desk
}



function printDeck(deck: Deck) {
    let row = '\n'
    deck.forEach(card => {
        let str = card.color
        if (card.mark === 11) {
            str += 'J'
        } else if (card.mark === 12) {
            str += 'Q'
        } else if (card.mark === 13) {
            str += 'K'
        } else {
            str += card.mark + row
        }

    })
    return deck
}

let card = createDeck()

console.log(printDeck(card))