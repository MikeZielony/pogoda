const temps = [];
const points = [-1,-0];
let weather = {
    apiKey: "72e500c3b17f279ba771d0537dcce959",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        document.querySelector(".city").innerText = "Weather in " + name + " " + country;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        temps[0] = temp;
        compare();
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

// weather.fetchWeather("Krakow");


let weather1 = {
    apiKey: "72e500c3b17f279ba771d0537dcce959",
    fetchWeather1: function (city1) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city1 +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather1(data));
    },
    displayWeather1: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        document.querySelector(".city1").innerText = "Weather in " + name + " " + country;
        document.querySelector(".icon1").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description1").innerText = description;
        document.querySelector(".temp1").innerText = temp + "°C";
        temps[1] = temp;

        console.log(temps[1]);
        console.log(temps);
        document.querySelector(".humidity1").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind1").innerText =
            "Wind speed: " + speed+ " km/h";
        compare();
        document.querySelector(".weather1").classList.remove("loading");

    },
    search1: function () {
        this.fetchWeather1(document.querySelector(".search-bar1").value);
    },
};

document.querySelector(".search1 button").addEventListener("click", function () {
    weather1.search1();
});

document
    .querySelector(".search-bar1")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather1.search1();
        }
    });
// weather1.fetchWeather1("Krakow");

 function compare() {
   // console.log(weather1.fetchWeather1(city))
     if (temps[0]  < temps[1])
            {
                document.querySelector(".card1").style.background = "red" , document.querySelector(".card").style.background = "blue";
                points[1] = points[1] +1;
            }
     else if (temps[0]  == temps[1]) {
         document.querySelector(".card").style.background = "red" , document.querySelector(".card1").style.background = "red";
         points[0] = points[0] +1;
         points[1] = points[1] +1;
     }
      else  {      document.querySelector(".card").style.background = "red", document.querySelector(".card1").style.background = "blue";
         points[0] = points[0] +1;
      };
console.log(temps[0], temps[1]);
     document.getElementById("points").innerHTML = points[0] + " : " + points[1];
     console.log("punkty lewy : " + points[0] + "    " + " punkty prawy : " + points[1]);
 };


