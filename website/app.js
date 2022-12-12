/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}&units=imperial'
const apiKey = "08bec52fb8de334103e52606a050ab9b"

document.getElementById('generate').addEventListener('click', performAction);
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
function performAction(e){

    const zipcode =  document.getElementById('zip').value;
    if (zipcode.value) {
        alert('Please, enter a zip code');

    }
    const feelings =  document.getElementById('feelings').value;
    const getWeather = async (baseURL,zipcode,feelings, key)=>{
        let fetchURL = baseURL.replace("{zip code}",zipcode)
        fetchURL = fetchURL.replace("{API key}",apiKey)
        console.log(fetchURL)
        const res = await fetch(fetchURL)
        try {
      
          const data = await res.json();
          console.log(data.main.temp)

          return data;
        }  catch(error) {
          console.log("error", error);
         
        }
  }


  const updateUI = async()=>{
    const request = await fetch('/all')
    try{
      const allData = await request.json()
      console.log(allData);
      document.getElementById('date').innerHTML = "today is: " + allData.date;
      document.getElementById('temp').innerHTML = "the temperature will be: "+allData.temp +" fahrenheit";
      document.getElementById('content').innerHTML = "mood: "+ allData.feeling;

    }
    catch(error){
      console.log(error);
    }
  }





  
  const postData = async ( url ='' , data = {})=>{ // console.log(data)

    const response = await fetch(url, { 
    method: 'POST', // GET, POST, PUT, DELETE, etc.
    
    credentials: 'same-origin', // include, same-origin, omit
    
    headers: { 
         "Content-Type": "application/json",
    
    },
    body: JSON.stringify(data), // body data type must match "Cont
    });
     try {
    
    const newData = await response.json();
    
    console.log(newData);
     return newData;
    
    }
    catch(error) {
    
    console.log("error", error); // appropriately handle the error
    }
    }
    getWeather(baseURL,zipcode,feelings, apiKey)
    
    .then(function(data){
        console.log(data)
        postData("/addData",{"temp":data.main.temp,"feeling":feelings,"date":newDate});

        updateUI()
    })   ;
     

};





