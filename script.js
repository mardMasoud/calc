let $ = document;
let countreis = {
  iran: ["tehran", "mashhad", "sari", "esfahan"],
  usa: ["washington", "los angels", "San Francisco", "New York"],
  england: ["Oxford", "London", "Manchester", "Birmingham"],
  france: ["Paris", "Lyon", "Toulouse", "Bordeaux"],
};

let dataCountreis = $.querySelector("#countries");
let dataCiteis = $.querySelector("#citeis");

let country;
dataCountreis.addEventListener("change", function (e) {
  country = e.target.value;
  dataCiteis.value='esfahan'
});
