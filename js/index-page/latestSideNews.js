const latestSideNews = `
  <a href="" class="article-link">
    <div class="row">
      <div class="col-sm-5">
        <img src="" alt="picture-12" style="height: 100%;">
      </div>
      <div class="col-sm-7">
        <div class="card-text">
          <span class="article-category"></span>
          <h5 class="article-title"></h5>
          <p></p>
        </div>
      </div>
    </div>
  </a>
`

class LatestSideComponents extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    this.innerHTML = latestSideNews;
    this.querySelector("a").setAttribute("href", this.getAttribute("href"));
    this.querySelector("img").setAttribute("src", this.getAttribute("src"));
    this.querySelector("span").innerText = this.getAttribute("category");
    this.querySelector("h5").innerText = this.getAttribute("title");
    if (this.hasAttribute("para")) {
      this.querySelector("p").innerText = this.getAttribute("para")
    } else {
      this.querySelector("p").style.display = "none"
    };
  };
};

window.customElements.define("latest-side-component", LatestSideComponents);