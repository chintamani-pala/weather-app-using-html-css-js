// let apiKey = "b190a0605344cc4f3af08d0dd473dd25"; //openwheather api key
// let api_url;
// let content_element=document.getElementsByClassName("content")[0];
// let get_location_btn= content_element.getElementsByTagName("button")[0];
// let infotxt = document.getElementsByClassName("info-txt")[0];
// let inputField = content_element.getElementsByTagName("input")[0]
// let wrapper = document.querySelector(".wrapper");
// let weatherPart = wrapper.querySelector(".weather-part");
// let weatherIcon = weatherPart.querySelector("img");
// let backArraow= document.getElementsByTagName("header")[0].querySelector("i");
//
//
//
// const darkModeBtn = document.querySelector(".dark-mode-btn");
// function changeTheme(color) {
//     document.documentElement.style.setProperty("--primary-color", color);
//     localStorage.setItem("theme", color);
// }
// //change theme to dark
// function getTheme() {
//     const theme = localStorage.getItem("theme");
//     if (theme) {
//         changeTheme(theme);
//     }
// }
// getTheme()
// let isDark = false;
// darkModeBtn.addEventListener("click", () => {
//     if(!isDark) {
//         changeTheme("#000");
//         isDark = true;
//     }else{
//         changeTheme("hsl(227.8, 40.3%, 26.3%)");
//         isDark = false;
//
//     }
// });
// backArraow.addEventListener("click",()=>{
//     wrapper.classList.remove("active");
// })
//
// //main control starts here
//
// //get cityname and process
// inputField.addEventListener("keyup", (e)=>{
//     if(e.key === "Enter"){
//         let cityname=inputField.value;
//         api_url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&&units=metric&appid=${apiKey}`;
//         callApi()
//     }
// })
//
// get_location_btn.addEventListener("click",()=>{
//     if (navigator.geolocation) {
//         // if browser support geolocation api
//         navigator.geolocation.getCurrentPosition(onSuccessLocationApi,onErrorLocationApi);
//     } else {
//         alert("Your browser not support geolocation api");
//     }
// })
// //set api result on the web
// let wheatherSet = (result) =>{
//     if(result.cod == 404){
//         infotxt.innerText = "City not found";
//         infotxt.classList.replace("pending", "error");
//     }
//     else {
//         //getting required properties value from the whole weather information
//         const city = result.name;
//         const country = result.sys.country;
//         const { description, id } = result.weather[0];
//         let { temp, feels_like, humidity } = result.main;
//         // using custom weather icon according to the id which api gives to us
//         if (id == 800) {
//             weatherIcon.src = "assets/icons/clear.svg";
//         } else if (id >= 200 && id <= 232) {
//             weatherIcon.src = "assets/icons/storm.svg";
//         } else if (id >= 600 && id <= 622) {
//             weatherIcon.src = "assets/icons/snow.svg";
//         } else if (id >= 701 && id <= 781) {
//             weatherIcon.src = "assets/icons/haze.svg";
//         } else if (id >= 801 && id <= 804) {
//             weatherIcon.src = "assets/icons/cloud.svg";
//         } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
//             weatherIcon.src = "assets/icons/rain.svg";
//         }
//         //setting all values to a particular element
//         //the temp is contain kelvin need to conert into celcious
//         // temp=300-temp;
//         weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
//         weatherPart.querySelector(".weather").innerText = description;
//         weatherPart.querySelector(
//             ".location span"
//         ).innerText = `${city}, ${country}`;
//         weatherPart.querySelector(".temp .numb-2").innerText =
//             Math.floor(feels_like);
//         weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
//         infotxt.classList.remove("pending", "error");
//         infotxt.innerText = "";
//         inputField.value = "";
//         wrapper.classList.add("active");
//     }
// }
// let callApi = async() =>{
//     infotxt.innerText = "Getting Details...";
//     infotxt.classList.add("pending");
//     fetch(api_url).then((res) => res.json()).then((result)=>{
//         wheatherSet(result)
//     }).catch((res,err)=>{
//         console.log(res)
//         console.log(err)
//         infotxt.innerText = "Something went wrong";
//         infotxt.classList.replace("pending", "error");
//     })
//
//
// }
// //prepare the api after getting the location
// let onSuccessLocationApi = (position) => {
//     let lat = position.coords.latitude;
//     let lon = position.coords.longitude;
//     api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//     callApi();
// }
//
// let onErrorLocationApi =(error)=>{
//     infotxt.innerText = error.message;
//     infotxt.classList.add("error");
// }
//



const _0x27f38f=_0x288a;(function(_0x2cc2ac,_0x145c34){const _0x48255d=_0x288a,_0x151140=_0x2cc2ac();while(!![]){try{const _0x3c288a=-parseInt(_0x48255d(0x1dd))/0x1+parseInt(_0x48255d(0x1db))/0x2+-parseInt(_0x48255d(0x1df))/0x3+-parseInt(_0x48255d(0x1ce))/0x4+parseInt(_0x48255d(0x1f1))/0x5+-parseInt(_0x48255d(0x1e2))/0x6*(parseInt(_0x48255d(0x1bd))/0x7)+parseInt(_0x48255d(0x1d9))/0x8;if(_0x3c288a===_0x145c34)break;else _0x151140['push'](_0x151140['shift']());}catch(_0xcc8f17){_0x151140['push'](_0x151140['shift']());}}}(_0x5226,0x80275));function _0x288a(_0x29144e,_0x366803){const _0x5226f1=_0x5226();return _0x288a=function(_0x288a7b,_0x299368){_0x288a7b=_0x288a7b-0x1b7;let _0x28cfa7=_0x5226f1[_0x288a7b];return _0x28cfa7;},_0x288a(_0x29144e,_0x366803);}function _0x5226(){const _0x3f207e=['click','coords','965812MsNEYR','.weather-part','Enter','keyup','country','name','src','https://api.openweathermap.org/data/2.5/weather?lat=','addEventListener','documentElement','assets/icons/clear.svg','6644840NbFVaI','.dark-mode-btn','853216nGBOvR','longitude','703300JyhlgY','https://api.openweathermap.org/data/2.5/weather?q=','202479vtQovl','getCurrentPosition','classList','6oJzwZk','pending','style','value','setProperty','getElementsByTagName','innerText','&lon=','assets/icons/haze.svg','sys','floor','geolocation','&&units=metric&appid=','setItem','City\x20not\x20found','4909355XikqZF','.wrapper','weather','key','active','.temp\x20.numb','replace','getElementsByClassName','input','content','log','hsl(227.8,\x2040.3%,\x2026.3%)','remove','4913447GVpjZA','add','cod','button','Something\x20went\x20wrong','.temp\x20.numb-2','querySelector','theme','getItem','latitude','--primary-color','.location\x20span','.weather','error','assets/icons/cloud.svg'];_0x5226=function(){return _0x3f207e;};return _0x5226();}let apiKey='b190a0605344cc4f3af08d0dd473dd25',api_url,content_element=document[_0x27f38f(0x1b7)](_0x27f38f(0x1b9))[0x0],get_location_btn=content_element[_0x27f38f(0x1e7)](_0x27f38f(0x1c0))[0x0],infotxt=document[_0x27f38f(0x1b7)]('info-txt')[0x0],inputField=content_element['getElementsByTagName'](_0x27f38f(0x1b8))[0x0],wrapper=document[_0x27f38f(0x1c3)](_0x27f38f(0x1f2)),weatherPart=wrapper[_0x27f38f(0x1c3)](_0x27f38f(0x1cf)),weatherIcon=weatherPart[_0x27f38f(0x1c3)]('img'),backArraow=document[_0x27f38f(0x1e7)]('header')[0x0][_0x27f38f(0x1c3)]('i');const darkModeBtn=document[_0x27f38f(0x1c3)](_0x27f38f(0x1da));function changeTheme(_0x326d8d){const _0x2410aa=_0x27f38f;document[_0x2410aa(0x1d7)][_0x2410aa(0x1e4)][_0x2410aa(0x1e6)](_0x2410aa(0x1c7),_0x326d8d),localStorage[_0x2410aa(0x1ef)](_0x2410aa(0x1c4),_0x326d8d);}function getTheme(){const _0x36c5ec=_0x27f38f,_0xc59a8a=localStorage[_0x36c5ec(0x1c5)](_0x36c5ec(0x1c4));_0xc59a8a&&changeTheme(_0xc59a8a);}getTheme();let isDark=![];darkModeBtn[_0x27f38f(0x1d6)]('click',()=>{const _0x2f99ae=_0x27f38f;!isDark?(changeTheme('#000'),isDark=!![]):(changeTheme(_0x2f99ae(0x1bb)),isDark=![]);}),backArraow['addEventListener'](_0x27f38f(0x1cc),()=>{const _0x244d7b=_0x27f38f;wrapper['classList']['remove'](_0x244d7b(0x1f5));}),inputField[_0x27f38f(0x1d6)](_0x27f38f(0x1d1),_0x484997=>{const _0x523688=_0x27f38f;if(_0x484997[_0x523688(0x1f4)]===_0x523688(0x1d0)){let _0x51e646=inputField[_0x523688(0x1e5)];api_url=_0x523688(0x1de)+_0x51e646+_0x523688(0x1ee)+apiKey,callApi();}}),get_location_btn[_0x27f38f(0x1d6)](_0x27f38f(0x1cc),()=>{const _0xe2cf08=_0x27f38f;navigator['geolocation']?navigator[_0xe2cf08(0x1ed)][_0xe2cf08(0x1e0)](onSuccessLocationApi,onErrorLocationApi):alert('Your\x20browser\x20not\x20support\x20geolocation\x20api');});let wheatherSet=_0x5a6cab=>{const _0xf5fe02=_0x27f38f;if(_0x5a6cab[_0xf5fe02(0x1bf)]==0x194)infotxt[_0xf5fe02(0x1e8)]=_0xf5fe02(0x1f0),infotxt[_0xf5fe02(0x1e1)][_0xf5fe02(0x1f7)]('pending',_0xf5fe02(0x1ca));else{const _0x101334=_0x5a6cab[_0xf5fe02(0x1d3)],_0xfeec04=_0x5a6cab[_0xf5fe02(0x1eb)][_0xf5fe02(0x1d2)],{description:_0x2a5cf4,id:_0x546ab6}=_0x5a6cab[_0xf5fe02(0x1f3)][0x0];let {temp:_0xf54cee,feels_like:_0x135d40,humidity:_0x3143b6}=_0x5a6cab['main'];if(_0x546ab6==0x320)weatherIcon[_0xf5fe02(0x1d4)]=_0xf5fe02(0x1d8);else{if(_0x546ab6>=0xc8&&_0x546ab6<=0xe8)weatherIcon[_0xf5fe02(0x1d4)]='assets/icons/storm.svg';else{if(_0x546ab6>=0x258&&_0x546ab6<=0x26e)weatherIcon['src']='assets/icons/snow.svg';else{if(_0x546ab6>=0x2bd&&_0x546ab6<=0x30d)weatherIcon[_0xf5fe02(0x1d4)]=_0xf5fe02(0x1ea);else{if(_0x546ab6>=0x321&&_0x546ab6<=0x324)weatherIcon[_0xf5fe02(0x1d4)]=_0xf5fe02(0x1cb);else(_0x546ab6>=0x1f4&&_0x546ab6<=0x213||_0x546ab6>=0x12c&&_0x546ab6<=0x141)&&(weatherIcon[_0xf5fe02(0x1d4)]='assets/icons/rain.svg');}}}}weatherPart[_0xf5fe02(0x1c3)](_0xf5fe02(0x1f6))[_0xf5fe02(0x1e8)]=Math[_0xf5fe02(0x1ec)](_0xf54cee),weatherPart[_0xf5fe02(0x1c3)](_0xf5fe02(0x1c9))[_0xf5fe02(0x1e8)]=_0x2a5cf4,weatherPart[_0xf5fe02(0x1c3)](_0xf5fe02(0x1c8))[_0xf5fe02(0x1e8)]=_0x101334+',\x20'+_0xfeec04,weatherPart[_0xf5fe02(0x1c3)](_0xf5fe02(0x1c2))[_0xf5fe02(0x1e8)]=Math[_0xf5fe02(0x1ec)](_0x135d40),weatherPart['querySelector']('.humidity\x20span')[_0xf5fe02(0x1e8)]=_0x3143b6+'%',infotxt[_0xf5fe02(0x1e1)][_0xf5fe02(0x1bc)](_0xf5fe02(0x1e3),_0xf5fe02(0x1ca)),infotxt[_0xf5fe02(0x1e8)]='',inputField[_0xf5fe02(0x1e5)]='',wrapper['classList'][_0xf5fe02(0x1be)](_0xf5fe02(0x1f5));}},callApi=async()=>{const _0x33248b=_0x27f38f;infotxt[_0x33248b(0x1e8)]='Getting\x20Details...',infotxt[_0x33248b(0x1e1)][_0x33248b(0x1be)](_0x33248b(0x1e3)),fetch(api_url)['then'](_0x51fa78=>_0x51fa78['json']())['then'](_0x43a728=>{wheatherSet(_0x43a728);})['catch']((_0x32a5e6,_0x53627a)=>{const _0x5c1483=_0x33248b;console[_0x5c1483(0x1ba)](_0x32a5e6),console[_0x5c1483(0x1ba)](_0x53627a),infotxt[_0x5c1483(0x1e8)]=_0x5c1483(0x1c1),infotxt[_0x5c1483(0x1e1)]['replace'](_0x5c1483(0x1e3),'error');});},onSuccessLocationApi=_0x43b28c=>{const _0x5810c3=_0x27f38f;let _0x5c9982=_0x43b28c[_0x5810c3(0x1cd)][_0x5810c3(0x1c6)],_0x34d433=_0x43b28c[_0x5810c3(0x1cd)][_0x5810c3(0x1dc)];api_url=_0x5810c3(0x1d5)+_0x5c9982+_0x5810c3(0x1e9)+_0x34d433+'&units=metric&appid='+apiKey,callApi();},onErrorLocationApi=_0x4ef850=>{const _0x26fd75=_0x27f38f;infotxt[_0x26fd75(0x1e8)]=_0x4ef850['message'],infotxt[_0x26fd75(0x1e1)][_0x26fd75(0x1be)](_0x26fd75(0x1ca));};