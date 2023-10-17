import { API_URL } from "../urls.js";

async function SearchReslutFunc() {
  let res = await fetch(API_URL + "search-article")
  let data = await res.json()

  data.map(res => {
    const resultCard = document.createElement("res-search-card")
    resultCard.classList.add("result-card")
    resultCard.setAttribute("href", res.link)
    resultCard.setAttribute("src", res.img_uri)
    resultCard.setAttribute("title", res.title)
    resultCard.setAttribute("para", res.paragraph)
    resultCard.setAttribute("time", res.date)
    document.getElementById("result").appendChild(resultCard)
  })
}

SearchReslutFunc();