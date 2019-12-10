class Deck {

    private val deck: MutableList<Card> by lazy { initializeCards() }

    private fun initializeCards(): MutableList<Card> {
        return Suit.values()
            .fold(mutableListOf<Card>(), { acc, suit -> acc.apply { addCardsOf(suit) } })
            .apply { shuffle() }
    }

    private fun MutableList<Card>.addCardsOf(suit: Suit) =
        Number.values().forEach { number -> add(Card(suit, number)) }

    fun draw(): Card =
        if (deck.isEmpty()) {
            throw IllegalStateException("カードがありません。")
        } else {
            deck.removeAt(0)
        }
}

class Card(private val suit: Suit, val number: Number){
    val src = "img/${suit.suitName}/${number.num}.png"
    override fun toString() = "${suit.suitName}の${number.num}"
}

enum class Suit(val suitName: String) {
    SPADE("spade"),
    CLUB("club"),
    DIAMOND("diamond"),
    HEART("heart");
}

enum class Number(val num: Int) {
    ONE(1),
    TWO(2),
    THREE(3),
    FOUR(4),
    FIVE(5),
    SIX(6),
    SEVEN(7),
    EIGHT(8),
    NINE(9),
    TEN(10),
    ELEVEN(11),
    TWELVE(12),
    THIRTEEN(13);
}