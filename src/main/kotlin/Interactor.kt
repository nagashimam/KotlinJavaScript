class Interactor(private val presenter: Contract.InteractorOutput) : Contract.Interactor {
    private val human = Human()
    private val computer = Computer()
    private val deck = Deck()

    override fun initialSetting() {
        addAndShow(deck.draw(), human)
        addAndShow(deck.draw(), human)
        addAndShow(deck.draw(), computer)
        computer.addToHands(deck.draw())
        showDrawnCard(computer, DO_NOT_KNOW)
        presenter.promptInput()
    }

    override fun showCurrentScoreOfHuman() {
        presenter.printMessage(CURRENT_SCORE + human.calculateCurrentScore())
        presenter.promptInput()
    }

    override fun showCurrentHandsOfHuman() {
        presenter.printMessage(CURRENT_CARDS).let {
            human.hands.forEach { presenter.printMessage(it.toString()) }
        }
        presenter.promptInput()
    }

    override fun drawCardsForComputer() {
        computer.hands[1].let { secondCard ->
            showDrawnCard(computer, secondCard.toString())
            drawCardsForComputerRecursively(deck.draw())
        }
    }

    override fun drawCardForHuman() =
        deck.draw().let { card ->
            addAndShow(card, human)
            if (human.isOver()) {
                presenter.printMessage(CURRENT_SCORE + human.calculateCurrentScore())
                presenter.printMessage(YOU_LOSE)
            } else {
                presenter.promptInput()
            }
        }

    private fun showDrawnCard(player: Player, s: String) =
        presenter.printMessage("${player.whichPlayer()}が${player.hands.size}枚目に引いた手は$s")

    private fun addAndShow(card: Card, player: Player) {
        player.addToHands(card)
        showDrawnCard(player, card.toString())
    }

    private fun showFinalScore() {
        val msg: (Player) -> String = { player -> "${player.whichPlayer()}の点数:${player.calculateCurrentScore()}" }
        presenter.printMessage(msg(human))
        presenter.printMessage(msg(computer))
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
        showFinalScore()
        val (humScore, comScore) = human.calculateCurrentScore() to computer.calculateCurrentScore()
        val isHumanWin = comScore > 21 || humScore > comScore
        if (isHumanWin) {
            presenter.printMessage(YOU_WIN)
        } else {
            presenter.printMessage(YOU_LOSE)
        }
    }
}