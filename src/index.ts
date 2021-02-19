



//  类型别名

// type Deck = NormalCard[]

// type Color = '♥️' | '♠️' | '♦️' | '♣️';

// type NormalCard = {
//     color: Color
//     mark: number
// }


// function createDeck(): Deck {

//     const desk: Deck = []
//     for (let i = 1; i <= 13; i++) {
//         desk.push({
//             color: '♠️',
//             mark: i
//         })
//         desk.push({
//             color: '♣️',
//             mark: i
//         })
//         desk.push({
//             color: '♥️',
//             mark: i
//         })
//         desk.push({
//             color: '♦️',
//             mark: i
//         })
//     }
//     return desk
// }



// function printDeck(deck: Deck) {
//     let row = '\n'
//     deck.forEach(card => {
//         let str = card.color
//         if (card.mark === 11) {
//             str += 'J'
//         } else if (card.mark === 12) {
//             str += 'Q'
//         } else if (card.mark === 13) {
//             str += 'K'
//         } else {
//             str += card.mark + row
//         }

//     })
//     return deck
// }

// let card = createDeck()

// console.log(printDeck(card))



// 枚举

type Deck = NormalCard[]

enum Color {
    heart = '♥️',
    spade = '♠️',
    club = '♣️',
    diamond = '♦️'
}
type NormalCard = {
    color: Color
    mark: Mark
}

enum Mark {
    A = 'A',
    two = '2',
    three = '3',
    four = '4',
    five = '5',
    six = '6',
    seven = '7',
    eight = '8',
    nine = '9',
    ten = '10',
    eleven = '11',
    twelve = '12'
}


function createMark(): Deck {
    let desk: Deck = []
    for (let i of Object.values(Mark)) {
        for (let j of Object.values(Color)) {
            desk.push({
                color: j,
                mark: i
            })
        }
    }
    return desk
}

function printMark(desk: Deck) {
    desk.forEach(i=>i.color+i.mark)
    return desk
}

let a =createMark()

console.log(printMark(a))