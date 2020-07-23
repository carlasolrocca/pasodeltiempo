window.onload = function() {
  
  const http = new XMLHttpRequest()
  
  http.open('GET', 'http://api.weatherapi.com/v1/current.json?key=1eef31e191b64a2f96434256201907&q=Buenos Aires')
  http.send()
  
  http.onreadystatechange = function() {
    http.responseText
    
    if(http.responseText == ''){
      return
    }

    const weather = JSON.parse(http.responseText)

    const temperatura = weather.current.temp_c
    const hora = weather.location.localtime
    const lugar = weather.location.name

       

    /*=== query selector ===*/
    const container = document.querySelector('.containerPrincipal')
    const containerFlowers = document.querySelector('.containerFlowers')

    const temp = document.querySelector('.temp')
    const time = document.querySelector('.time')
    const place = document.querySelector('.place')

    const sun = document.querySelector('.sun')
    const moon = document.querySelector('.moon')
    const seagull = document.querySelector('seagull')


    const flower1 = document.querySelector('.flower1')
    const flower2 = document.querySelector('.flower2')
    const flower3 = document.querySelector('.flower3')
    const especial = document.querySelector('.especial-one')
    const flower5 = document.querySelector('.flower5')
    const flower6 = document.querySelector('.flower6')
    const flower7 = document.querySelector('.flower7')    

    const link1 = document.getElementById('link1')
    const link2 = document.getElementById('link2')
    const link3 = document.getElementById('link3')
    const link4 = document.getElementById('link4')
    const link5 = document.getElementById('link5')
    const link6 = document.getElementById('link6')
    const link7 = document.getElementById('link7')
    
    
    function first(){
      container.classList.add('first-sky')
      container.classList.remove('animacion-cielo')
      flower1.classList.add('elegidas')
      flower7.classList.add('elegidas')
      containerFlowers.classList.remove('animacion-flores')
      sun.classList.add('sun1')
      sun.classList.remove('animacion-sol')
      moon.classList.add('moon1')
      moon.classList.remove('animacion-luna')
      link1.href = 'https://open.spotify.com/track/5iUQMwxUPdJBFeGkePtM66?si=-OMUGrpXSPyYf_1YkuVxKg'
      link7.href = 'https://open.spotify.com/track/1AnkHPw9pdBXfYoTJqY3sn?si=-PfgZiu7SQyvlOoMRLZjnQ' 
      return
    }

    function second(){
      container.classList.add('second-sky')
      container.classList.remove('animacion-cielo')
      especial.classList.add('elegidas')
      containerFlowers.classList.remove('animacion-flores')
      sun.classList.add('sun2')
      sun.classList.remove('animacion-sol')
      moon.classList.add('moon2')
      moon.classList.remove('animacion-luna')
      link4.href = 'https://open.spotify.com/track/4NPh0SSazsrBtzMJ1ya2JZ?si=ZqVtrGEOSYy3bfmfFjlOdQ' 
      return
    }

    function third(){
      container.classList.add('third-sky')
      container.classList.remove('animacion-cielo')
      flower3.classList.add('elegidas')
      containerFlowers.classList.remove('animacion-flores')
      sun.classList.add('sun3')
      sun.classList.remove('animacion-sol')
      moon.classList.add('moon3')
      moon.classList.remove('animacion-luna')
      link3.href = 'https://open.spotify.com/track/25SJaCCPiosugnlY53VhRG?si=XWQ6bdLlTmSyGV1Q32dt1w' 
      return
    }

    function fourth(){
      container.classList.add('fourth-sky')
      container.classList.remove('animacion-cielo')
      flower5.classList.add('elegidas')
      containerFlowers.classList.remove('animacion-flores')
      sun.classList.add('sun4')
      sun.classList.remove('animacion-sol')
      moon.classList.add('moon4')
      moon.classList.remove('animacion-luna')
      link5.href = 'https://open.spotify.com/track/6wSySPqkbgLdpUzceYNfWe?si=KhNKBNTITwG8Wp4xpmajmA' 
      return
    }

    function fifth(){
      container.classList.add('fifth-sky')
      container.classList.remove('animacion-cielo')
      flower2.classList.add('elegidas')
      flower6.classList.add('elegidas')
      containerFlowers.classList.remove('animacion-flores')
      sun.classList.add('sun5')
      sun.classList.remove('animacion-sol')
      moon.classList.add('moon5')
      moon.classList.remove('animacion-luna')
      link2.href = 'https://open.spotify.com/track/52d8baQxvV3AkHcAyXCkkO?si=xIQY-cDuQWm1E0QpIe0rIQ'
      link6.href = 'https://open.spotify.com/track/3nJADGzFgFdzQ1iGRCB1de?si=yPacQHryQJe2lUfWKgw98g' 
      return
    }

    let horaAComparar = parseInt(hora.slice(11,13))


    /*===cambio de cielo + flores segun horario===*/    
    if(horaAComparar >= 20 || horaAComparar < 5){
      first()      
    } else if(horaAComparar > 7){
      second()      
    } else if(horaAComparar > 15) {
      third()      
    } else if(horaAComparar >= 5 && horaAComparar <= 7) {
      fourth()      
    } else if(horaAComparar > 12) {
      fifth()      
    }
    
    /*=== info del blackboard ===*/
    temp.innerHTML = temperatura + '°C'
    time.innerHTML = hora + 'hs.'
    place.innerHTML = lugar  
  }
}