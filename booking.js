const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const address = params.get("address");
const sport = params.get("sport");

document.getElementById("venueName").innerText = name;
document.getElementById("venueAddress").innerText = address;
document.getElementById("venueSport").innerText = sport;
