if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinJavaScript'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinJavaScript'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'KotlinJavaScript'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'KotlinJavaScript'.");
}
var KotlinJavaScript = function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var shuffle = Kotlin.kotlin.collections.shuffle_vvxzk3$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var Pair = Kotlin.kotlin.Pair;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var L200 = Kotlin.Long.fromInt(200);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  Suit.prototype = Object.create(Enum.prototype);
  Suit.prototype.constructor = Suit;
  Number_0.prototype = Object.create(Enum.prototype);
  Number_0.prototype.constructor = Number_0;
  Human.prototype = Object.create(Player.prototype);
  Human.prototype.constructor = Human;
  Computer.prototype = Object.create(Player.prototype);
  Computer.prototype.constructor = Computer;
  var PROMPT_INPUT;
  var COULD_NOT_READ;
  var DO_NOT_KNOW;
  var CURRENT_SCORE;
  var CURRENT_CARDS;
  var YOU_WIN;
  var YOU_LOSE;
  function Contract() {
  }
  function Contract$View() {
  }
  Contract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function Contract$Presenter() {
  }
  Contract$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  function Contract$Interactor() {
  }
  Contract$Interactor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Interactor',
    interfaces: []
  };
  function Contract$InteractorOutput() {
  }
  Contract$InteractorOutput.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InteractorOutput',
    interfaces: []
  };
  Contract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Contract',
    interfaces: []
  };
  function Deck() {
    this.deck_9yx10$_0 = lazy(Deck$deck$lambda(this));
  }
  Object.defineProperty(Deck.prototype, 'deck_0', {
    get: function () {
      return this.deck_9yx10$_0.value;
    }
  });
  Deck.prototype.initializeCards_0 = function () {
    var tmp$ = Suit$values();
    var tmp$_0;
    var accumulator = ArrayList_init();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var element = tmp$[tmp$_0];
      var acc = accumulator;
      this.addCardsOf_0(acc, element);
      accumulator = acc;
    }
    var $receiver = accumulator;
    shuffle($receiver);
    return $receiver;
  };
  Deck.prototype.addCardsOf_0 = function ($receiver, suit) {
    var $receiver_0 = Number$values();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      $receiver.add_11rb$(new Card(suit, element));
    }
  };
  Deck.prototype.draw = function () {
    if (this.deck_0.isEmpty()) {
      throw IllegalStateException_init('\u30AB\u30FC\u30C9\u304C\u3042\u308A\u307E\u305B\u3093\u3002');
    }
     else {
      return this.deck_0.removeAt_za3lpa$(0);
    }
  };
  function Deck$deck$lambda(this$Deck) {
    return function () {
      return this$Deck.initializeCards_0();
    };
  }
  Deck.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Deck',
    interfaces: []
  };
  function Card(suit, number) {
    this.suit_0 = suit;
    this.number = number;
    this.src = 'src/main/resources/img/' + this.suit_0.suitName + '/' + this.number.num + '.png';
  }
  Card.prototype.toString = function () {
    return this.suit_0.suitName + '\u306E' + this.number.num;
  };
  Card.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Card',
    interfaces: []
  };
  function Suit(name, ordinal, suitName) {
    Enum.call(this);
    this.suitName = suitName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Suit_initFields() {
    Suit_initFields = function () {
    };
    Suit$SPADE_instance = new Suit('SPADE', 0, 'spade');
    Suit$CLUB_instance = new Suit('CLUB', 1, 'club');
    Suit$DIAMOND_instance = new Suit('DIAMOND', 2, 'diamond');
    Suit$HEART_instance = new Suit('HEART', 3, 'heart');
  }
  var Suit$SPADE_instance;
  function Suit$SPADE_getInstance() {
    Suit_initFields();
    return Suit$SPADE_instance;
  }
  var Suit$CLUB_instance;
  function Suit$CLUB_getInstance() {
    Suit_initFields();
    return Suit$CLUB_instance;
  }
  var Suit$DIAMOND_instance;
  function Suit$DIAMOND_getInstance() {
    Suit_initFields();
    return Suit$DIAMOND_instance;
  }
  var Suit$HEART_instance;
  function Suit$HEART_getInstance() {
    Suit_initFields();
    return Suit$HEART_instance;
  }
  Suit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Suit',
    interfaces: [Enum]
  };
  function Suit$values() {
    return [Suit$SPADE_getInstance(), Suit$CLUB_getInstance(), Suit$DIAMOND_getInstance(), Suit$HEART_getInstance()];
  }
  Suit.values = Suit$values;
  function Suit$valueOf(name) {
    switch (name) {
      case 'SPADE':
        return Suit$SPADE_getInstance();
      case 'CLUB':
        return Suit$CLUB_getInstance();
      case 'DIAMOND':
        return Suit$DIAMOND_getInstance();
      case 'HEART':
        return Suit$HEART_getInstance();
      default:throwISE('No enum constant Suit.' + name);
    }
  }
  Suit.valueOf_61zpoe$ = Suit$valueOf;
  function Number_0(name, ordinal, num) {
    Enum.call(this);
    this.num = num;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Number_initFields() {
    Number_initFields = function () {
    };
    Number$ONE_instance = new Number_0('ONE', 0, 1);
    Number$TWO_instance = new Number_0('TWO', 1, 2);
    Number$THREE_instance = new Number_0('THREE', 2, 3);
    Number$FOUR_instance = new Number_0('FOUR', 3, 4);
    Number$FIVE_instance = new Number_0('FIVE', 4, 5);
    Number$SIX_instance = new Number_0('SIX', 5, 6);
    Number$SEVEN_instance = new Number_0('SEVEN', 6, 7);
    Number$EIGHT_instance = new Number_0('EIGHT', 7, 8);
    Number$NINE_instance = new Number_0('NINE', 8, 9);
    Number$TEN_instance = new Number_0('TEN', 9, 10);
    Number$ELEVEN_instance = new Number_0('ELEVEN', 10, 11);
    Number$TWELVE_instance = new Number_0('TWELVE', 11, 12);
    Number$THIRTEEN_instance = new Number_0('THIRTEEN', 12, 13);
  }
  var Number$ONE_instance;
  function Number$ONE_getInstance() {
    Number_initFields();
    return Number$ONE_instance;
  }
  var Number$TWO_instance;
  function Number$TWO_getInstance() {
    Number_initFields();
    return Number$TWO_instance;
  }
  var Number$THREE_instance;
  function Number$THREE_getInstance() {
    Number_initFields();
    return Number$THREE_instance;
  }
  var Number$FOUR_instance;
  function Number$FOUR_getInstance() {
    Number_initFields();
    return Number$FOUR_instance;
  }
  var Number$FIVE_instance;
  function Number$FIVE_getInstance() {
    Number_initFields();
    return Number$FIVE_instance;
  }
  var Number$SIX_instance;
  function Number$SIX_getInstance() {
    Number_initFields();
    return Number$SIX_instance;
  }
  var Number$SEVEN_instance;
  function Number$SEVEN_getInstance() {
    Number_initFields();
    return Number$SEVEN_instance;
  }
  var Number$EIGHT_instance;
  function Number$EIGHT_getInstance() {
    Number_initFields();
    return Number$EIGHT_instance;
  }
  var Number$NINE_instance;
  function Number$NINE_getInstance() {
    Number_initFields();
    return Number$NINE_instance;
  }
  var Number$TEN_instance;
  function Number$TEN_getInstance() {
    Number_initFields();
    return Number$TEN_instance;
  }
  var Number$ELEVEN_instance;
  function Number$ELEVEN_getInstance() {
    Number_initFields();
    return Number$ELEVEN_instance;
  }
  var Number$TWELVE_instance;
  function Number$TWELVE_getInstance() {
    Number_initFields();
    return Number$TWELVE_instance;
  }
  var Number$THIRTEEN_instance;
  function Number$THIRTEEN_getInstance() {
    Number_initFields();
    return Number$THIRTEEN_instance;
  }
  Number_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Number',
    interfaces: [Enum]
  };
  function Number$values() {
    return [Number$ONE_getInstance(), Number$TWO_getInstance(), Number$THREE_getInstance(), Number$FOUR_getInstance(), Number$FIVE_getInstance(), Number$SIX_getInstance(), Number$SEVEN_getInstance(), Number$EIGHT_getInstance(), Number$NINE_getInstance(), Number$TEN_getInstance(), Number$ELEVEN_getInstance(), Number$TWELVE_getInstance(), Number$THIRTEEN_getInstance()];
  }
  Number_0.values = Number$values;
  function Number$valueOf(name) {
    switch (name) {
      case 'ONE':
        return Number$ONE_getInstance();
      case 'TWO':
        return Number$TWO_getInstance();
      case 'THREE':
        return Number$THREE_getInstance();
      case 'FOUR':
        return Number$FOUR_getInstance();
      case 'FIVE':
        return Number$FIVE_getInstance();
      case 'SIX':
        return Number$SIX_getInstance();
      case 'SEVEN':
        return Number$SEVEN_getInstance();
      case 'EIGHT':
        return Number$EIGHT_getInstance();
      case 'NINE':
        return Number$NINE_getInstance();
      case 'TEN':
        return Number$TEN_getInstance();
      case 'ELEVEN':
        return Number$ELEVEN_getInstance();
      case 'TWELVE':
        return Number$TWELVE_getInstance();
      case 'THIRTEEN':
        return Number$THIRTEEN_getInstance();
      default:throwISE('No enum constant Number.' + name);
    }
  }
  Number_0.valueOf_61zpoe$ = Number$valueOf;
  function Interactor(presenter) {
    this.presenter_0 = presenter;
    this.human_0 = new Human();
    this.computer_0 = new Computer();
    this.deck_0 = new Deck();
  }
  Interactor.prototype.initialSetting = function () {
    this.addAndShow_0(this.deck_0.draw(), this.human_0);
    this.addAndShow_0(this.deck_0.draw(), this.human_0);
    this.addAndShow_0(this.deck_0.draw(), this.computer_0);
    this.computer_0.addToHands_18uuo$(this.deck_0.draw());
    this.presenter_0.placeCardFaceDown();
  };
  Interactor.prototype.drawCardsForComputer = function () {
    this.presenter_0.flipCard_4un41x$(listOf([this.computer_0.hands.get_za3lpa$(0), this.computer_0.hands.get_za3lpa$(1)]));
    this.drawCardsForComputerRecursively_0(this.deck_0.draw());
  };
  Interactor.prototype.drawCardForHuman = function () {
    this.addAndShow_0(this.deck_0.draw(), this.human_0);
    if (this.human_0.isOver()) {
      this.showResult_0(CURRENT_SCORE + toString(this.human_0.calculateCurrentScore()) + '\n' + YOU_LOSE);
    }
  };
  Interactor.prototype.addAndShow_0 = function (card, player) {
    player.addToHands_18uuo$(card);
    this.presenter_0.refreshView_fg48ar$(card, player);
  };
  Interactor.prototype.drawCardsForComputerRecursively_0 = function (card) {
    if (this.computer_0.isOver()) {
      this.judge_0();
    }
     else {
      this.addAndShow_0(card, this.computer_0);
      this.drawCardsForComputerRecursively_0(this.deck_0.draw());
    }
  };
  function Interactor$judge$lambda(player) {
    var currentScore = player.calculateCurrentScore();
    return new Pair(player.whichPlayer() + '\u306E\u70B9\u6570:' + currentScore, currentScore);
  }
  Interactor.prototype.judge_0 = function () {
    var tmp$;
    var msgAndScore = Interactor$judge$lambda;
    var tmp$_0 = msgAndScore(this.human_0);
    var humScoreMsg = tmp$_0.component1()
    , humScore = tmp$_0.component2();
    var tmp$_1 = msgAndScore(this.computer_0);
    var comScoreMsg = tmp$_1.component1()
    , comScore = tmp$_1.component2();
    var isHumanWin = comScore > 21 || humScore > comScore;
    if (isHumanWin) {
      tmp$ = YOU_WIN;
    }
     else {
      tmp$ = YOU_LOSE;
    }
    var resultMsg = tmp$;
    this.showResult_0(humScoreMsg + '\n' + comScoreMsg + '\n' + resultMsg);
  };
  function Coroutine$Interactor$showResult$lambda(this$Interactor_0, closure$msg_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Interactor = this$Interactor_0;
    this.local$closure$msg = closure$msg_0;
  }
  Coroutine$Interactor$showResult$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Interactor$showResult$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Interactor$showResult$lambda.prototype.constructor = Coroutine$Interactor$showResult$lambda;
  Coroutine$Interactor$showResult$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(L200, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$Interactor.presenter_0.showMessage_61zpoe$(this.local$closure$msg);
            return this.local$this$Interactor.presenter_0.finish(), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Interactor$showResult$lambda(this$Interactor_0, closure$msg_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Interactor$showResult$lambda(this$Interactor_0, closure$msg_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Interactor.prototype.showResult_0 = function (msg) {
    launch(coroutines.GlobalScope, void 0, void 0, Interactor$showResult$lambda(this, msg));
  };
  Interactor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Interactor',
    interfaces: [Contract$Interactor]
  };
  function main() {
    new View();
  }
  function Player() {
    this.hands = ArrayList_init();
    this.isAce_p3plhu$_0 = Player$isAce$lambda;
    this.countAceAsOne_tumiv$_0 = Player$countAceAsOne$lambda(this);
    this.countAceAsEleven_m3bflm$_0 = Player$countAceAsEleven$lambda(this);
  }
  Player.prototype.aces_sg8lft$_0 = function ($receiver) {
    var predicate = this.isAce_p3plhu$_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (predicate(element))
        destination.add_11rb$(element);
    }
    return destination;
  };
  Player.prototype.nonAceCards_n9legq$_0 = function ($receiver) {
    var predicate = this.isAce_p3plhu$_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!predicate(element))
        destination.add_11rb$(element);
    }
    return destination;
  };
  Player.prototype.addToHands_18uuo$ = function (card) {
    return this.hands.add_11rb$(card);
  };
  Player.prototype.calculateCurrentScore = function () {
    var it = this.calculateMaxScore();
    var block$result;
    if (it > 21) {
      block$result = this.calculateMinScore();
    }
     else {
      block$result = it;
    }
    return block$result;
  };
  Player.prototype.calculateScoreOfNonAceCards_ucb0jn$_0 = function () {
    var tmp$;
    var accumulator = 0;
    tmp$ = this.nonAceCards_n9legq$_0(this.hands).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var acc = accumulator;
      var tmp$_0;
      switch (element.number.name) {
        case 'ELEVEN':
        case 'TWELVE':
        case 'THIRTEEN':
          tmp$_0 = 10;
          break;
        default:tmp$_0 = element.number.num;
          break;
      }
      accumulator = acc + tmp$_0 | 0;
    }
    return accumulator;
  };
  Player.prototype.calculateMinScore = function () {
    return this.calculateScoreOfNonAceCards_ucb0jn$_0() + this.countAceAsOne_tumiv$_0() | 0;
  };
  Player.prototype.calculateMaxScore = function () {
    return this.calculateScoreOfNonAceCards_ucb0jn$_0() + this.countAceAsEleven_m3bflm$_0() | 0;
  };
  function Player$isAce$lambda(card) {
    return card.number === Number$ONE_getInstance();
  }
  function Player$countAceAsOne$lambda(this$Player) {
    return function () {
      return this$Player.aces_sg8lft$_0(this$Player.hands).size;
    };
  }
  function Player$countAceAsEleven$lambda(this$Player) {
    return function () {
      if (this$Player.aces_sg8lft$_0(this$Player.hands).isEmpty()) {
        return 0;
      }
       else {
        return this$Player.aces_sg8lft$_0(this$Player.hands).size + 10 | 0;
      }
    };
  }
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: []
  };
  function Human() {
    Player.call(this);
  }
  Human.prototype.isOver = function () {
    return this.calculateMinScore() > 21;
  };
  Human.prototype.whichPlayer = function () {
    return '\u3042\u306A\u305F';
  };
  Human.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Human',
    interfaces: [Player]
  };
  function Computer() {
    Player.call(this);
  }
  function Computer$isOver$countAsOneIsBetter(this$Computer) {
    return function () {
      if (this$Computer.calculateMinScore() > 11)
        return true;
      return this$Computer.calculateExpectedValue_0(this$Computer.calculateMinScore()) > this$Computer.calculateExpectedValue_0(this$Computer.calculateMaxScore());
    };
  }
  Computer.prototype.isOver = function () {
    var tmp$;
    var countAsOneIsBetter = Computer$isOver$countAsOneIsBetter(this);
    if (this.calculateMinScore() >= 17)
      tmp$ = true;
    else if (countAsOneIsBetter())
      tmp$ = false;
    else
      tmp$ = this.calculateMaxScore() >= 17;
    return tmp$;
  };
  Computer.prototype.calculateExpectedValue_0 = function (temporaryValue) {
    return this.calculateExpectedValue_1(temporaryValue);
  };
  Computer.prototype.calculateExpectedValue_1 = function (temporaryValue) {
    var tmp$;
    if (temporaryValue > 17.0) {
      tmp$ = temporaryValue;
    }
     else {
      tmp$ = this.calculateExpectedValue_1(temporaryValue + 6.5);
    }
    return tmp$;
  };
  Computer.prototype.whichPlayer = function () {
    return '\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC';
  };
  Computer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Computer',
    interfaces: [Player]
  };
  function Presenter(view) {
    this.view_0 = view;
    this.interactor_0 = new Interactor(this);
  }
  Presenter.prototype.start = function () {
    this.view_0.showMessage_61zpoe$('*****\u30D6\u30E9\u30C3\u30AF\u30B8\u30E3\u30C3\u30AF\u3092\u59CB\u3081\u3088\u3046*****');
    this.interactor_0.initialSetting();
  };
  Presenter.prototype.showMessage_61zpoe$ = function (msg) {
    this.view_0.showMessage_61zpoe$(msg);
  };
  Presenter.prototype.placeCardFaceDown = function () {
    this.view_0.placeCardFaceDown();
  };
  Presenter.prototype.refreshView_fg48ar$ = function (card, player) {
    if (Kotlin.isType(player, Human)) {
      this.view_0.placeHumanCard_18uuo$(card);
      this.view_0.updateHumanScore_za3lpa$(player.calculateCurrentScore());
    }
     else {
      this.view_0.placeCpuCard_18uuo$(card);
    }
  };
  Presenter.prototype.flipCard_4un41x$ = function (cards) {
    this.view_0.flipCard_4un41x$(cards);
  };
  Presenter.prototype.finish = function () {
    this.view_0.reload();
  };
  Presenter.prototype.draw = function () {
    this.interactor_0.drawCardForHuman();
  };
  Presenter.prototype.stopDrawing = function () {
    this.interactor_0.drawCardsForComputer();
  };
  Presenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Presenter',
    interfaces: [Contract$InteractorOutput, Contract$Presenter]
  };
  var cpu_hand;
  var human_hand;
  var face_down;
  var draw;
  var stop;
  var score;
  function View() {
    this.presenter_0 = new Presenter(this);
    this.presenter_0.start();
    this.setOnClick_0(draw, View_init$lambda(this));
    this.setOnClick_0(stop, View_init$lambda_0(this));
  }
  View.prototype.setOnClick_0 = function (selector, function_0) {
    jQuery(selector).on('click', function_0);
  };
  View.prototype.showMessage_61zpoe$ = function (msg) {
    window.alert(msg);
  };
  View.prototype.flipCard_4un41x$ = function (cards) {
    jQuery(cpu_hand).html('<div><\/div>');
    var tmp$;
    tmp$ = cards.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.placeCard_0(cpu_hand, element);
    }
  };
  View.prototype.placeCpuCard_18uuo$ = function (card) {
    this.placeCard_0(cpu_hand, card);
  };
  View.prototype.placeCardFaceDown = function () {
    this.placeCard_0(cpu_hand, null, face_down);
  };
  View.prototype.placeHumanCard_18uuo$ = function (card) {
    this.placeCard_0(human_hand, card);
  };
  View.prototype.updateHumanScore_za3lpa$ = function (humanScore) {
    jQuery(score).html('<p>' + humanScore + '<\/p>');
  };
  View.prototype.reload = function () {
    window.location.reload();
  };
  View.prototype.placeCard_0 = function (selector, card, src) {
    if (card === void 0)
      card = null;
    if (src === void 0)
      src = null;
    var tmp$, tmp$_0;
    jQuery(selector).append('<img class=' + '"' + 'col-1 pl-1 pr-1' + '"' + ' src=' + '"' + ((tmp$_0 = (tmp$ = card != null ? card.src : null) != null ? tmp$ : src) != null ? tmp$_0 : '') + '"' + ' alt=' + '"' + '"' + '>');
  };
  function View_init$lambda(this$View) {
    return function (f, f_0) {
      this$View.presenter_0.draw();
      return Unit;
    };
  }
  function View_init$lambda_0(this$View) {
    return function (f, f_0) {
      this$View.presenter_0.stopDrawing();
      return Unit;
    };
  }
  View.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'View',
    interfaces: [Contract$View]
  };
  Object.defineProperty(_, 'PROMPT_INPUT', {
    get: function () {
      return PROMPT_INPUT;
    }
  });
  Object.defineProperty(_, 'COULD_NOT_READ', {
    get: function () {
      return COULD_NOT_READ;
    }
  });
  Object.defineProperty(_, 'DO_NOT_KNOW', {
    get: function () {
      return DO_NOT_KNOW;
    }
  });
  Object.defineProperty(_, 'CURRENT_SCORE', {
    get: function () {
      return CURRENT_SCORE;
    }
  });
  Object.defineProperty(_, 'CURRENT_CARDS', {
    get: function () {
      return CURRENT_CARDS;
    }
  });
  Object.defineProperty(_, 'YOU_WIN', {
    get: function () {
      return YOU_WIN;
    }
  });
  Object.defineProperty(_, 'YOU_LOSE', {
    get: function () {
      return YOU_LOSE;
    }
  });
  Contract.View = Contract$View;
  Contract.Presenter = Contract$Presenter;
  Contract.Interactor = Contract$Interactor;
  Contract.InteractorOutput = Contract$InteractorOutput;
  _.Contract = Contract;
  _.Deck = Deck;
  _.Card = Card;
  Object.defineProperty(Suit, 'SPADE', {
    get: Suit$SPADE_getInstance
  });
  Object.defineProperty(Suit, 'CLUB', {
    get: Suit$CLUB_getInstance
  });
  Object.defineProperty(Suit, 'DIAMOND', {
    get: Suit$DIAMOND_getInstance
  });
  Object.defineProperty(Suit, 'HEART', {
    get: Suit$HEART_getInstance
  });
  _.Suit = Suit;
  Object.defineProperty(Number_0, 'ONE', {
    get: Number$ONE_getInstance
  });
  Object.defineProperty(Number_0, 'TWO', {
    get: Number$TWO_getInstance
  });
  Object.defineProperty(Number_0, 'THREE', {
    get: Number$THREE_getInstance
  });
  Object.defineProperty(Number_0, 'FOUR', {
    get: Number$FOUR_getInstance
  });
  Object.defineProperty(Number_0, 'FIVE', {
    get: Number$FIVE_getInstance
  });
  Object.defineProperty(Number_0, 'SIX', {
    get: Number$SIX_getInstance
  });
  Object.defineProperty(Number_0, 'SEVEN', {
    get: Number$SEVEN_getInstance
  });
  Object.defineProperty(Number_0, 'EIGHT', {
    get: Number$EIGHT_getInstance
  });
  Object.defineProperty(Number_0, 'NINE', {
    get: Number$NINE_getInstance
  });
  Object.defineProperty(Number_0, 'TEN', {
    get: Number$TEN_getInstance
  });
  Object.defineProperty(Number_0, 'ELEVEN', {
    get: Number$ELEVEN_getInstance
  });
  Object.defineProperty(Number_0, 'TWELVE', {
    get: Number$TWELVE_getInstance
  });
  Object.defineProperty(Number_0, 'THIRTEEN', {
    get: Number$THIRTEEN_getInstance
  });
  _.Number = Number_0;
  _.Interactor = Interactor;
  _.main = main;
  _.Player = Player;
  _.Human = Human;
  _.Computer = Computer;
  _.Presenter = Presenter;
  _.View = View;
  PROMPT_INPUT = '\u30AB\u30FC\u30C9\u3092\u5F15\u304D\u307E\u3059\u304B?\n0:\u73FE\u5728\u306E\u70B9\u6570\u3092\u898B\u308B 1:\u73FE\u5728\u306E\u624B\u672D\u3092\u898B\u308B 2:\u5F15\u304F 3:\u3082\u3046\u5F15\u304B\u306A\u3044';
  COULD_NOT_READ = '\u3059\u307F\u307E\u305B\u3093\u3001\u5165\u529B\u304C\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F';
  DO_NOT_KNOW = '\u5206\u304B\u308A\u307E\u305B\u3093';
  CURRENT_SCORE = '\u73FE\u5728\u306E\u70B9\u6570:';
  CURRENT_CARDS = '\u73FE\u5728\u306E\u624B\u672D:';
  YOU_WIN = '\u3042\u306A\u305F\u306E\u52DD\u3061\u3067\u3059';
  YOU_LOSE = '\u3042\u306A\u305F\u306E\u8CA0\u3051\u3067\u3059';
  cpu_hand = '#cpu-hand';
  human_hand = '#human-hand';
  face_down = 'img/face_down.png';
  draw = '#more';
  stop = '#stop';
  score = '#score';
  main();
  Kotlin.defineModule('KotlinJavaScript', _);
  return _;
}(typeof KotlinJavaScript === 'undefined' ? {} : KotlinJavaScript, kotlin, this['kotlinx-coroutines-core']);
