"use strict";
function createDeck() {
    var desk = [];
    for (var i = 0; i <= 13; i++) {
        desk.push({
            color: '♠️',
            mark: i
        });
        desk.push({
            color: '♣️',
            mark: i
        });
        desk.push({
            color: '♥️',
            mark: i
        });
        desk.push({
            color: '♦️',
            mark: i
        });
    }
    return desk;
}
createDeck();
