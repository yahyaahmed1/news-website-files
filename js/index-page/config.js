import { API_URL } from "../urls.js";

async function sliderFunc() {
  let res = await fetch(API_URL + "slider");
  let data = await res.json();

  data.map(slide => {
    const el = document.createElement("slider-component");
    el.setAttribute("src", slide.img_uri);
    el.setAttribute("href", slide.link);
    el.setAttribute("text", slide.title);
    document.getElementById("carousel-inner").appendChild(el);
  })
  let slides = document.getElementsByClassName("carousel-item");
  slides[0].classList.add("active");
};

async function headerArticlesFunc() {
  let res = await fetch(API_URL + "header-articles");
  let data = await res.json();

  data.map(SideArticle => {
    const el = document.createElement("header-article");
    el.setAttribute("src", SideArticle.img_uri);
    el.setAttribute("href", SideArticle.link);
    el.setAttribute("title", SideArticle.title);
    el.setAttribute("category", SideArticle.category);
    document.getElementById("header-articles").appendChild(el);
  });
};

async function newsFunc() {
  let res = await fetch(API_URL + "news");
  let data = await res.json();
  data.map(newsData => {
    const el = document.createElement("news-component");
    el.setAttribute("src", newsData.img_uri);
    el.setAttribute("href", newsData.link);
    el.setAttribute("title", newsData.title);
    el.setAttribute("category", newsData.category);
    el.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mt-4")
    document.getElementById("newsRow").appendChild(el);
  });
};

async function mostReadFunc() {
  let res = await fetch(API_URL + "most-read");
  let data = await res.json();

  for (let i = 0; i < data.length; i++) {
    if (i % 2 == 0) {
      const el = document.createElement("most-read-card-even");
      el.setAttribute("src", data[i].img_uri);
      el.setAttribute("href", data[i].link);
      el.setAttribute("title", data[i].title);
      el.setAttribute("para", data[i].paragraph);
      el.setAttribute("time",
        moment(parseInt(data[i].date)).format('dddd') + ", " + moment(parseInt(data[i].date)).format('LL'));
      document.getElementById("most-read").appendChild(el);
    } else {
      const el = document.createElement("most-read-card-odd");
      el.setAttribute("src", data[i].img_uri);
      el.setAttribute("href", data[i].link);
      el.setAttribute("title", data[i].title);
      el.setAttribute("time",
        moment(parseInt(data[i].date)).format('dddd') + ", " + moment(parseInt(data[i].date)).format('LL'));
      document.getElementById("most-read").appendChild(el);
    }
  }
};

async function opinionFunc() {
  let res = await fetch(API_URL + "opinion-articles");
  let data = await res.json();

  data.map(opinionAPI => {
    const el = document.createElement("opinion-articles");
    el.setAttribute("src", opinionAPI.user_uri);
    el.setAttribute("href", opinionAPI.link);
    el.setAttribute("title", opinionAPI.title);
    el.setAttribute("username", opinionAPI.user_name);
    el.classList.add("col-lg-3", "col-md-4", "col-sm-6")
    document.getElementById("opinionsRow").appendChild(el);
  })
}

async function videosFunc() {
  let res = await fetch(API_URL + "videos");
  let data = await res.json();
  data.map(videoAPI => {
    const el = document.createElement("videos-section");
    el.setAttribute("src", videoAPI.img_uri);
    el.setAttribute("href", videoAPI.link);
    el.setAttribute("title", videoAPI.title);
    el.classList.add("swiper-slide")
    document.getElementById("videos").appendChild(el);
  })
}

async function latestNewsFunc() {
  let res = await fetch(API_URL + "latest-news");
  let data = await res.json();
  data.map(article => {
    if (article.position === "right") {
      const el = document.createElement("latest-component");
      el.setAttribute("src", article.img_uri);
      el.setAttribute("href", article.link);
      el.setAttribute("title", article.title);
      el.setAttribute("category", article.category);
      el.setAttribute("para", article.paragraph);
      document.getElementById("right-article").appendChild(el)
    } else if (article.position === "side") {
      const el = document.createElement("latest-side-component");
      el.setAttribute("src", article.img_uri);
      el.setAttribute("href", article.link);
      el.setAttribute("title", article.title);
      el.setAttribute("category", article.category);
      el.setAttribute("para", article.paragraph);
      document.getElementById("side-article").appendChild(el)
    } else {
      const el = document.createElement("latest-component");
      el.setAttribute("src", article.img_uri);
      el.setAttribute("href", article.link);
      el.setAttribute("title", article.title);
      el.setAttribute("category", article.category);
      el.setAttribute("para", article.paragraph);
      el.classList.add("col-sm-6")
      document.getElementById("bottom-articles").appendChild(el)
    }
  })
}


sliderFunc();
headerArticlesFunc();
newsFunc();
mostReadFunc();
opinionFunc();
videosFunc();
latestNewsFunc();