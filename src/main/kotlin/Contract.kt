interface Contract {
    interface View {
        fun showMessage(msg: String)
        fun flipCard(cards: List<Card>)
        fun placeCpuCard(card: Card)
        fun placeCardFaceDown()
        fun placeHumanCard(card: Card)
        fun updateHumanScore(humanScore : Int)
        fun reload()
    }

    interface Presenter {
        fun draw()
        fun stopDrawing()
        fun start()
    }

    interface Interactor {
        fun drawCardForHuman()
        fun drawCardsForComputer()
        fun initialSetting()
    }

    interface InteractorOutput {
        fun showMessage(msg :String)
        fun placeCardFaceDown()
        fun refreshView(card: Card, player: Player)
        fun flipCard(cards: List<Card>)
        fun finish()
    }
}