(function(){

    var displays = ["Marcas", "Apps", "Websites","Logos"]
    var point = 0

    var fnChange = function () {

      newText = displays[point]

      if (point == displays.length -1)
      point = 0
      else point += 1
      $("#changing").fadeOut(1500, function(){
       $("#changing").text(newText)
        $("#changing").fadeIn(1500, function() {
          fnChange()
        })
      })
      
        


    }
   fnChange() 


  $('#contact-form').validator().on('submit',(e) => {

    if (e.isDefaultPrevented()) {


    } else {
      e.preventDefault()
      $('#send-contact').attr('disabled','disabled')
      $("#send-contact").text("Enviando...")
      $.post('/contato',
        {
          'nome' : $('#nome').text(),
          'assunto' : $('#assunto').text(),
          'mensagem' : $('#mensagem').text()
        }).done((data) => {
         BootstrapDialog.alert('OK. Entraremos em contato em breve.')
            
          
          $("#send-contact").text("Obrigado!")
        }).fail((err) => {
          BootstrapDialog.alert("Erro ao enviar mensagem :(")
        })
    }
  })


}())
