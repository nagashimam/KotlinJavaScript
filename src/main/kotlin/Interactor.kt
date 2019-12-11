

class Interactor(private val presenter: Contract.InteractorOutput) : Contract.Interactor {
    private val human = Human()
    private val computer = Computer()
    private val deck = Deck()

    override fun initialSetting() {
        addAndShow(deck.draw(), human)
        addAndShow(deck.draw(), human)
        addAndShow(deck.draw(), computer)
        computer.addToHands(deck.draw())
        presenter.placeCardFaceDown()
    }

    override fun drawCardsForComputer() {
        computer.hands[1].let { secondCard ->
            presenter.refreshView(secondCard, computer)
            drawCardsForComputerRecursively(deck.draw())
        }
    }

    override fun drawCardForHuman() =
        deck.draw().let { card ->
            addAndShow(card, human)
            if (human.isOver()) {
                presenter.showMessage("${CURRENT_SCORE + human.calculateCurrentScore()}\n$YOU_LOSE")
            }
        }

    private fun addAndShow(card: Card, player: Player) {
        player.addToHands(card)
        presenter.refreshView(card, player)
    }

    private tailrec fun drawCardsForComputerRecursively(card: Card) {
        if (computer.isOver()) {
            judge()
        } else {
            addAndShow(card, computer)
            drawCardsForComputerRecursively(deck.draw())
        }
    }

    private fun judge() {
        val msgAndScore: (Player) -> Pair<String, Int> = { player ->
            val currentScore = player.calculateCurrentScore()
            Pair("${player.whichPlayer()}の点数:${currentScore}", currentScore)
        }

        val (humScoreMsg, humScore) = msgAndScore(human)
        val (comScoreMsg, comScore) = msgAndScore(computer)

        val isHumanWin = comScore > 21 || humScore > comScore
        val resultMsg = if (isHumanWin) {
            YOU_WIN
        } else {
            YOU_LOSE
        }

        presenter.showMessage("$humScoreMsg\n$comScoreMsg\n$resultMsg")
        presenter.finish()
    }
}