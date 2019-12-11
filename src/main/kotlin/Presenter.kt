class Presenter(private val view: Contract.View) : Contract.Presenter, Contract.InteractorOutput {
    private val interactor: Contract.Interactor = Interactor(this)

    override fun start() {
        view.showMessage("*****ブラックジャックを始めよう*****")
        interactor.initialSetting()
    }

    override fun showMessage(msg: String) = view.showMessage(msg)
    override fun placeCardFaceDown() = view.placeCardFaceDown()

    override fun refreshView(card: Card, player: Player) {
        if (player is Human){
            view.placeHumanCard(card)
            view.updateHumanScore(player.calculateCurrentScore())
        } else {
            view.placeCpuCard(card)
        }
    }

    override fun finish() = view.reload()

    override fun draw() = interactor.drawCardForHuman()
    override fun stopDrawing() = interactor.drawCardsForComputer()

}
