/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    const n = cards.length;
    const valueMap = {};
    let minSteps = Infinity;
    for (let i = 0; i < n; i++) {
        const card = cards[i];
        if (valueMap.hasOwnProperty(card)) {
            const lastIndex = valueMap[card];
            minSteps = Math.min(minSteps, i - lastIndex + 1);
        }
        valueMap[card] = i;
    }
    return (minSteps === Infinity) ? -1 : minSteps;
};