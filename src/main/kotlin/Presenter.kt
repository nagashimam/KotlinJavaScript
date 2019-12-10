class Presenter(private val view: Contract.View) : Contract.Presenter, Contract.InteractorOutput {
    private val interactor: Contract.Interactor = Interactor(this)

    override fun start() {
        view.printMessage("*****ブラックジャックを始めよう*****")
        interactor.initialSetting()
    }

    override fun printMessage(msg: String) = view.printMessage(msg)

    override fun promptInput() = view.promptInput()

    override fun processHumanChoice(choice: String) =
        with(interactor) {
            when (choice) {
                "0" -> showCurrentScoreOfHuman()
                "1" -> showCurrentHandsOfHuman()
                "2" -> drawCardForHuman()
                "3" -> drawCardsForComputer()
                else -> view.promptInput()
            }
        }

}
