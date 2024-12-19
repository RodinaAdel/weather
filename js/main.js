 var country =[]
 var searchInput = document.getElementById("search");
 var weatherResult =[]
 var myWeatherIcon =[]
 var weather=[]
 var i=[]
 var myWeather = new XMLHttpRequest()
 myWeather.open("GET","http:api.weatherapi.com/v1/forecast.json?key=2834c495b51844c19d5205929241312&q=07112&days=3")
 myWeather.send()
 myWeather.addEventListener("load", function(){
     console.log(JSON.parse(myWeather.response));
   var result =  JSON.parse(myWeather.response)
   weatherResult = result.forecast.forecastday
        display(weatherResult)
    
 })
  function display(weatherResult){
      var carton =``
     
  for(var i=0 ; i < weatherResult.length ;i++){
  carton += `

         <div class="col-sm-12 col-lg-4  text-center rounded-3 mb-2" id="cover">

              <div class="card-body mt-lg-5 p-lg-3">
              
              <img class="text-warning mb-sm-4 fs-3 fw-bold" src="${weatherResult[i].day.condition.icon}">
              
                <p class="text-center text-white mb-sm-4 fs-1 fw-bold ">${weatherResult[i].day.maxtemp_c}</p>
                <p class="text-center text-light mb-sm-4 fs-5 fw-medium">${weatherResult[i].day.mintemp_c}</p>
                <h3 class="text-center text-info mb-sm-4 fs-6 fw-light">${weatherResult[i].day.condition.text}</h3>
              </div>

            </div> ` 
 }
 
  document.querySelector("#rowData").innerHTML = carton
  }
 ;
  var now = new Date ();
 
  console.log(now.toLocaleDateString
   ('en-US',{
 day:"2-digit",
 month:"long",
 weekday:"long"
 }));
 
 var dayDate = (now.toLocaleDateString
   ('en-US',{
 day:"2-digit",
 month:"long",
 weekday:"long"
 }))

  
  // function displayDate(dayDate){
  //   var carton =``
  //   for (var i=0 ;i<dayDate ;i++){
  //       carton += `
  //       <div class="card-header3 mt-3">

  //       <div class="day text-white d-inline-block fw-light fs-6 ms-auto me-5">${day}</div>
  //     <div class="date text-white d-inline-block fw-light fs-6 me-auto ms-5">${weekday}</div>            
  //   </div>
  //       `
      
  //   }
  //   document.querySelectorAll("#date").innerHTML=carton
  // }

// General search Api *****

// async function searchCountryApi() {
//     var res = await fetch (`https://api.weatherapi.com/v1/search.json?key=2834c495b51844c19d5205929241312&q=lond`)
//     var resApi = await res.json()
//     console.log(resApi);
//     var country = resApi
    
//     searchCountry()
// }
//  searchCountryApi()

// General search *****

// function searchCountry(){

//   var term =searchInput.value

//  var carton =``


//  for(var i=0 ; i<term ; i++){

//   if (term.includes (term) ){
//     carton += `
//     `  
//      }
//  }
//  document.querySelector("#rowData").innerHTML = carton

 


    

//     var carton =``

//  for (var i = 0; i < country.length ; i++) {

//    if(country.includes(term)){
// carton += ``    

// }      
//  } 
