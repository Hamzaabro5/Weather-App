const form = document.querySelector(`form`)
const input = document.querySelector(`input`)
const div = document.querySelector(`div`)



form.addEventListener(`submit` , (event) => {
    event.preventDefault()

    axios(
        `http://api.weatherapi.com/v1/current.json?key=982f5c58a9e742e68e5103048241306&q=${input.value}&aqi=no`
    )
    .then((res) =>{
        console.log(res.data);
        div.innerHTML = ``
        div.innerHTML += `

            <div>
            <img src="${res.data.current.condition.icon}" width = "200px" class="mt-5" alt="weather.img">
            <h1>${res.data.current.temp_c}<sup>o</sup>C </h1>
            <h2 class="mt-3">${res.data.location.name} / ${res.data.location.country}</h2>
            </div>

            <div class="d-flex justify-content-center gap-4 mt-5">
            <i class="fa-solid fa-droplet fs-3 mt-2"></i><div>
            <div>${res.data.current.humidity}%</div>
            <div>Humidity</div>
            </div><i class="fa-solid fa-wind fs-3 mt-2"></i>
            <div>
            <div>${res.data.current.wind_kph} Km/h</div>
            <div>Wind Speed</div>
            </div>
        `
    })
    .catch((error)=>{
        console.log(error);
        alert(`Enter City Again!`)
    })
    input.value = ``
    
})

// axios(
//             `http://api.weatherapi.com/v1/current.json?key=982f5c58a9e742e68e5103048241306&q=karachi&aqi=no`
//         )
//         .then((res) =>{
//             console.log(res.data);
//             div.innerHTML += `
//             <img src="${res.data.current.condition.icon}" width = "200px" class="mt-5" alt="weather.img">
//             <h1>${res.data.current.temp_c}<sup>o</sup>C </h1>
//             <h2 class="mt-3">${res.data.location.name} / ${res.data.location.country}</h2>

//             <div class="d-flex justify-content-center gap-4 mt-5">
//             <i class="fa-solid fa-droplet fs-3 mt-2"></i><div>
//             <div>${res.data.current.humidity}%</div>
//             <div>Humidity</div>
//             </div><i class="fa-solid fa-wind fs-3 mt-2"></i>
//             <div>
//             <div>${res.data.current.wind_kph} Km/h</div>
//             <div>Wind Speed</div>
//             </div>
        
//             `
//         })
//         .catch((error)=>{
//             console.log(error);
//         })