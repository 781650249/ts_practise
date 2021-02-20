import { Color, Mark } from "./enum";
import { Card, Jocker, NormalCard } from "./types";

interface PublishResult {
    player1: Deck,
    player2: Deck,
    player3: Deck,
    left: Deck,
}
class Deck {
    cards: Card[] = [];
    constructor(cards?: Card[]) {
        if (cards) {
            this.cards = cards
        } else {
            this.init()
        }
    }
    init() {
        for (let i of Object.values(Mark)) {
            for (let j of Object.values(Color)) {
                const card: NormalCard = {
                    color: j,
                    mark: i,
                    getString() {
                        return this.color + this.mark
                    }
                }
                this.cards.push(card)
            }
        }
        let jocker: Jocker = {
            type: 'small',
            getString() {
                return '小王'
            }
        }
        this.cards.push(jocker)

        jocker = {
            type: 'big',
            getString() {
                return '大王'
            }
        }
        this.cards.push(jocker)
    }
    print() {
        this.cards.forEach(i => i.getString())
        return this.cards
    }

    //洗牌
    exchange() {
        for (let i = 1; i < this.cards.length; i++) {
            const tempIndex = this.getRandom(0, this.cards.length)
            const temp = this.cards[i]
            this.cards[i] = this.cards[tempIndex]
            this.cards[tempIndex] = temp
        }
    }

    //交换
    getRandom(min: number, max: number) {
        let des = max - min
        return Math.floor(Math.random() * des + min)
    }

    // 发牌
    publish(): PublishResult {
        let player1: Deck, player2: Deck, player3: Deck, left: Deck
        player1 = this.takeCards(17)
        player2 = this.takeCards(17)
        player3 = this.takeCards(17)
        left = new Deck(this.cards)
        return {
            player1,
            player2,
            player3,
            left
        }
    }
    takeCards(n: number): Deck {
        const cards: Card[] = []
        for (let i = 1; i <= n ; i++) {
            cards.push(this.cards.shift() as Card)
        }
        console.log(cards.length)
        return new Deck(cards)
    }

}

let a = new Deck()
a.exchange()
let result = a.publish()
let p1 = result.player1.print()
console.log('player1', p1)
let p2 = result.player2.print()
console.log('player2', p2)
let p3 = result.player3.print()
console.log('player3', p3)
let p4 = result.left.print()
console.log('player4', p4)
