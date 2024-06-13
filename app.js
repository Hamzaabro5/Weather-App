const form = document.querySelector(`form`)
const input = document.querySelector(`input`)



form.addEventListener(`submit` , (event) => {
    event.preventDefault()

    axios(
        `http://api.weatherapi.com/v1/current.json?key=982f5c58a9e742e68e5103048241306&q=${input.value}&aqi=no`
    )
    .then((res) =>{
        console.log(res.data);
    })
    .catch((error)=>{
        console.log(error);
    })
})