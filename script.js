const input = document.querySelector("input");
const button = document.querySelector("#btn");
const map_view = document.querySelector("#map");
const ip = document.querySelector("#ip");
const loca = document.querySelector("#location");
const timezone = document.querySelector("#timezone");
const isp = document.querySelector("#isp");
let api_key = "at_AC8MxoMq5oxe5zyDiKdLtW7prozub";
let api_url = "https://geo.ipify.org/api/v1?";

const getLocation = async () => {
  var url = api_url + "apiKey=" + api_key + "&ipAddress=" + input.value;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  ip.innerHTML = data.ip;
  loca.innerHTML = data.location.city + ", " + data.location.region;
  timezone.innerHTML = data.location.timezone;
  isp.innerHTML = data.isp;

  let map = L.map("map").setView(
    [Number(data.location.lat), Number(data.location.lng)],
    13
  );
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
  }).addTo(map);
};
// button.addEventListener("onclick", getLocation);
console.log("hello");
