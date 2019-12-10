class View : Contract.View {

    private val presenter: Contract.Presenter = Presenter(this)

    init {
        presenter.start()
    }

    override fun printMessage(msg: String) = println(msg)

    override fun promptInput() {
//        println(PROMPT_INPUT)
//        readLine()
//            ?.let { presenter.processHumanChoice(it) }
//            ?: let {
//                println(COULD_NOT_READ)
//                promptInput()
//            }
    }
}