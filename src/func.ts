import { Color, Mark } from "./enum"
import {  Deck, Jocker, NormalCard, } from "./types"


/**
 *
 *
 * @export
 * @return {*}  {Deck}
 */
export function createMark(): Deck {
    let desk: Deck = []
    for (let i of Object.values(Mark)) {
        for (let j of Object.values(Color)) {
            const card: NormalCard = {
                color: j,
                mark: i,
                getString() {
                    return this.color + this.mark
                }
            }
            desk.push(card)
        }
    }
    let jocker: Jocker = {
        type: 'small',
        getString() {
            return '小王'
        }
    }
    desk.push(jocker)

    jocker = {
        type: 'big',
        getString() {
            return '大王'
        }
    }
    desk.push(jocker)
    return desk
}

export function printMark(desk: Deck) {
    desk.forEach(i => i.getString())
    return desk
}

