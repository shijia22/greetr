(function(global, $){

  let Greetr = function(firstName, lastName, language) {

    return new Greetr.init(firstName, lastName, language)
  }

  let supportLangs = ['en', 'es']

  let greetings = {
    en: 'Hello',
    es: 'Hola'
  }

  let formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  }

  let logMessange = {
    en: 'Log in',
    es: '西班牙文 log'
  }

  // 放置任何 func 回來的物件
  Greetr.prototype = {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },

    validate: function () {
      if (supportLangs.indexOf(this.language === -1)) {
        throw 'Invaild Langs'
      }
    },

    greeting: function () {
      return greetings[this.language] + ',' + this.firstName + '!'
    },

    formalGreetings: function() {
      return formalGreetings[this.language] + ',' + this.fullName() + '!'
    },

    greet: function(formal) {
      let logMessange

      if (formal) {
        msg = this.formalGreetings()
      } else {
        msg = this.greeting()
      }
      if (console) {
        console.log(msg)
      }
      return this
    },

    log: function() {
      if(console) {
        console.log(logMessange[this.language] + ': ' + this.fullName())
      }
      return this
    },

    setLang: function(lang) {

      this.language = lang
      this.validate()
      return this
    },

    HTMLGreeting: function(selector, formal) {
      if(!$) {
        throw 'jQuery not load'
      }

      if(!selector) {
        throw 'Missing jQuery selector'
      }

      let msg
      if(formal) {
        mag = this.formalGreetings()
      } else {
        mag = this.greeting()
      }
      $(selector).html(msg)
      return this
    }
  }

  Greetr.init = function(firstName, lastName, language) {

    let self = this
    this.firstName = firstName || ''
    this.lastName = lastName || ''
    this.language = language || 'en'
  }
  // Greetr.init 是上面的 func 中的 prototype
  Greetr.init.prototype = Greetr.prototype
  global.Greetr = global.G$ = Greetr

})(window, jQuery)