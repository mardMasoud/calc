let $ = document;
let countreis = {
  iran: ["tehran", "mashhad", "sari", "esfahan"],
  usa: ["washington", "los angels", "San Francisco", "New York"],
  england: ["Oxford", "London", "Manchester", "Birmingham"],
  france: ["Paris", "Lyon", "Toulouse", "Bordeaux"],
};

let countreisSelectbox = $.querySelector("#countries");
let citiesSelectbox = $.querySelector("#citeis");

let country;
countreisSelectbox.addEventListener("change", function (e) {
  let options = "";
  country = e.target.value;
  citiesSelectbox.innerHTML = "";
  if(country==='please select'){
    options =  "<option " + "value=" + country + ">" + country + "</option>";
    citiesSelectbox.innerHTML = options
  }
  else
  countreis[country].forEach(function (cnt) {
    options = options + "<option " + "value=" + cnt + ">" + cnt + "</option>";
    citiesSelectbox.innerHTML = options;
  });
});
