let q = G$('Amy', 'BBB')
q.greet()
q.greet().greet(true)

$('#login').click(function(){

  let loginGrtr = G$('John', 'Doe')

  $('#logingdiv').hide()

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log()
});