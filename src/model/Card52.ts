export class Card52 {
    suit: string;
    rank: string;

    constructor(suit: string, rank: string) {
        this.suit = suit;
        this.rank = rank;
    }

    getCardImage(): string {
        return "/cards/" + this.rank + this.suit + ".svg";
    }
}