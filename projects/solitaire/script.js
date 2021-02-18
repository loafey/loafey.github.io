let createDeck = () => {
    let values = ["ace", "king", "queen", "knight", "10", "9","8","7","6","5","4","3","2"];
    let suites = ["hearts", "spades", "diamonds", "clubs"];

    let deck = new Array();
    suites.forEach((suite) => {
        values.forEach((value) => {
            deck.push({Value: value, Suite: suite});
        });
    });
    return deck;
}