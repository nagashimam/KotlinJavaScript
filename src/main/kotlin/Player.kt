abstract class Player {
    val hands = mutableListOf<Card>()
    private val isAce: (Card) -> Boolean = { card -> card.number == Number.ONE }

    private val countAceAsOne: () -> Int = { hands.aces().size }
    private val countAceAsEleven: () -> Int = { hands.aces().size + 10 }

    private fun List<Card>.aces() = filter(isAce)
    private fun List<Card>.nonAceCards() = filterNot(isAce)

    fun addToHands(card: Card) = hands.add(card)

    fun calculateCurrentScore() =
        calculateMaxScore().let {
            if (it > 21) {
                calculateMinScore()
            } else {
                it
            }
        }

    private fun calculateScoreOfNonAceCards() =
        hands.nonAceCards().fold(0, { acc, card ->
            acc + when (card.number) {
                Number.ELEVEN, Number.TWELVE, Number.THIRTEEN -> 10
                else -> card.number.num
            }
        })

    protected fun calculateMinScore() = calculateScoreOfNonAceCards() + countAceAsOne()
    protected fun calculateMaxScore() = calculateScoreOfNonAceCards() + countAceAsEleven()

    abstract fun isOver(): Boolean
    abstract fun whichPlayer(): String
}

class Human : Player() {
    override fun isOver(): Boolean = calculateMinScore() > 21
    override fun whichPlayer(): String = "あなた"
}

class Computer : Player() {

    override fun isOver(): Boolean {
        fun countAsOneIsBetter(): Boolean {
            if (calculateMinScore() > 11) return true
            return calculateExpectedValue(calculateMinScore()) > calculateExpectedValue(calculateMaxScore())
        }

        return when {
            calculateMinScore() >= 17 -> true
            countAsOneIsBetter() -> false
            else -> calculateMaxScore() >= 17
        }
    }

    private fun calculateExpectedValue(temporaryValue: Int): Double = calculateExpectedValue(temporaryValue.toDouble())

    private tailrec fun calculateExpectedValue(temporaryValue: Double): Double {
        return if (temporaryValue > 17.0) {
            temporaryValue
        } else {
            calculateExpectedValue(temporaryValue + 6.5)
        }
    }

    override fun whichPlayer(): String = "コンピューター"
}
