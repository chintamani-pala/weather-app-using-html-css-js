let apiKey = "b190a0605344cc4f3af08d0dd473dd25"; //openwheather api key
let api_url;
let content_element=document.getElementsByClassName("content")[0];
let get_location_btn= content_element.getElementsByTagName("button")[0];
let infotxt = document.getElementsByClassName("info-txt")[0];
let inputField = content_element.getElementsByTagName("input")[0]
let wrapper = document.querySelector(".wrapper");
let weatherPart = wrapper.querySelector(".weather-part");
let weatherIcon = weatherPart.querySelector("img");
let backArraow= document.getElementsByTagName("header")[0].querySelector("i");



const darkModeBtn = document.querySelector(".dark-mode-btn");
function changeTheme(color) {
    document.documentElement.style.setProperty("--primary-color", color);
    localStorage.setItem("theme", color);
}
//change theme to dark
function getTheme() {
    const theme = localStorage.getItem("theme");
    if (theme) {
        changeTheme(theme);
    }
}
getTheme()
let isDark = false;
darkModeBtn.addEventListener("click", () => {
    if(!isDark) {
        changeTheme("#000");
        isDark = true;
    }else{
        changeTheme("hsl(227.8, 40.3%, 26.3%)");
        isDark = false;

    }
});
backArraow.addEventListener("click",()=>{
    wrapper.classList.remove("active");
})

//main control starts here

//get cityname and process
inputField.addEventListener("keyup", (e)=>{
    if(e.key === "Enter"){
        let cityname=inputField.value;
        api_url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&&units=metric&appid=${apiKey}`;
        callApi()
    }
})

get_location_btn.addEventListener("click",()=>{
    if (navigator.geolocation) {
        // if browser support geolocation api
        navigator.geolocation.getCurrentPosition(onSuccessLocationApi,onErrorLocationApi);
    } else {
        alert("Your browser not support geolocation api");
    }
})
//set api result on the web
let wheatherSet = (result) =>{
    if(result.cod == 404){
        infotxt.innerText = "City not found";
        infotxt.classList.replace("pending", "error");
    }
    else {
        //getting required properties value from the whole weather information
        const city = result.name;
        const country = result.sys.country;
        const { description, id } = result.weather[0];
        let { temp, feels_like, humidity } = result.main;
        // using custom weather icon according to the id which api gives to us
        if (id == 800) {
            weatherIcon.src = "assets/icons/clear.svg";
        } else if (id >= 200 && id <= 232) {
            weatherIcon.src = "assets/icons/storm.svg";
        } else if (id >= 600 && id <= 622) {
            weatherIcon.src = "assets/icons/snow.svg";
        } else if (id >= 701 && id <= 781) {
            weatherIcon.src = "assets/icons/haze.svg";
        } else if (id >= 801 && id <= 804) {
            weatherIcon.src = "assets/icons/cloud.svg";
        } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
            weatherIcon.src = "assets/icons/rain.svg";
        }
        //setting all values to a particular element
        //the temp is contain kelvin need to conert into celcious
        // temp=300-temp;
        weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(
            ".location span"
        ).innerText = `${city}, ${country}`;
        weatherPart.querySelector(".temp .numb-2").innerText =
            Math.floor(feels_like);
        weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
        infotxt.classList.remove("pending", "error");
        infotxt.innerText = "";
        inputField.value = "";
        wrapper.classList.add("active");
    }
}
let callApi = async() =>{
    infotxt.innerText = "Getting Details...";
    infotxt.classList.add("pending");
    fetch(api_url).then((res) => res.json()).then((result)=>{
        wheatherSet(result)
    }).catch((res,err)=>{
        console.log(res)
        console.log(err)
        infotxt.innerText = "Something went wrong";
        infotxt.classList.replace("pending", "error");
    })


}
//prepare the api after getting the location
let onSuccessLocationApi = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    callApi();
}

let onErrorLocationApi =(error)=>{
    infotxt.innerText = error.message;
    infotxt.classList.add("error");
}



