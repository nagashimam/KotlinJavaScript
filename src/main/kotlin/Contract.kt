interface Contract {
    interface View {
        fun printMessage(msg: String)
        fun promptInput()
    }

    interface Presenter {
        fun processHumanChoice(choice: String)
        fun start()
    }

    interface Interactor {
        fun showCurrentScoreOfHuman()
        fun showCurrentHandsOfHuman()
        fun drawCardForHuman()
        fun drawCardsForComputer()
        fun initialSetting()
    }

    interface InteractorOutput {
        fun printMessage(msg :String)
        fun promptInput()
    }
}