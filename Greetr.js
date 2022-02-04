(function(global, $){

  let Greetr = function(firstName, lastName, language) {

    return new Greetr.init(firstName, lastName, language)
  }
  // 放置任何 func 回來的物件
  Greetr.prototype = {}

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