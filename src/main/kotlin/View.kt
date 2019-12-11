import js.externals.jquery.JQueryEventObject
import js.externals.jquery.jQuery
import kotlin.browser.window

private const val cpu_hand = "#cpu-hand"
private const val human_hand = "#human-hand"
private const val face_down = "img/face_down.png"
private const val draw = "#more"
private const val stop = "#stop"
private const val score = "#score"

class View : Contract.View {

    private val presenter: Contract.Presenter = Presenter(this)

    init {
        presenter.start()
        setOnClick(draw) { _, _ -> presenter.draw() }
        setOnClick(stop) { _, _ -> presenter.stopDrawing() }
    }

    private fun setOnClick(selector: String, function: (JQueryEventObject, Any) -> Any) {
        jQuery(selector).on("click", function)
    }

    override fun showMessage(msg: String) = window.alert(msg)

    override fun flipCard(cards: List<Card>) {
        jQuery(cpu_hand).html("<div></div>")
        cards.forEach { card -> placeCard(cpu_hand, card) }
    }

    override fun placeCpuCard(card: Card) = placeCard(cpu_hand, card)
    override fun placeCardFaceDown() = placeCard(cpu_hand, null, face_down)

    override fun placeHumanCard(card: Card) = placeCard(human_hand, card)
    override fun updateHumanScore(humanScore: Int) {
        jQuery(score).html("<p>$humanScore</p>")
    }

    override fun reload() = window.location.reload()

    private fun placeCard(selector: String, card: Card? = null, src: String? = null) {
        jQuery(selector).append("<img class=\"col-1 pl-1 pr-1\" src=\"${card?.src ?: src ?: ""}\" alt=\"\">")
    }



}