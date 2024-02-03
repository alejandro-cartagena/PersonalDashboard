fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature").then(e=>e.json()).then(e=>{document.body.style.backgroundImage=`url(${e.urls.regular})`,document.getElementById("author").textContent=`By: ${e.user.name}`}).catch(e=>{document.body.style.backgroundImage=`url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`,document.getElementById("author").textContent="By: Dodi Achmad"});fetch("https://api.coingecko.com/api/v3/coins/bitcoin").then(e=>{if(!e.ok)throw Error("Something went wrong");return e.json()}).then(e=>{document.getElementById("crypto-top").innerHTML=`
            <img src=${e.image.small} />
            <span>${e.name}</span>
        `,document.getElementById("crypto").innerHTML+=`
            <p>Price 🎯: $${e.market_data.current_price.usd}</p>
            <p>High&nbsp &nbsp👆: $${e.market_data.high_24h.usd}</p>
            <p>Low&nbsp &nbsp&nbsp👇: $${e.market_data.low_24h.usd}</p>
        `}).catch(e=>console.error(e));function o(){const e=new Date;document.getElementById("time").textContent=e.toLocaleTimeString("en-us",{timeStyle:"medium"})}setInterval(o,1e3);navigator.geolocation.getCurrentPosition(e=>{fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${e.coords.latitude}&lon=${e.coords.longitude}&units=imperial`).then(t=>{if(!t.ok)throw Error("Weather data not available");return t.json()}).then(t=>{const n=`https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`;document.getElementById("weather").innerHTML=`
                <img src=${n} />
                <p class="weather-temp">${Math.round(t.main.temp)}º</p>
                <p class="weather-city">${t.name}</p>
            `}).catch(t=>console.error(t))});
