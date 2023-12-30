const video = `
  <a href="" class="article-link">
    <div class="slide-img">
      <img src="" alt="img">
      <i class="fa-solid fa-play"></i>
    </div>
    <div class="slide-text">
      <h5 class="article-title"></h5>
    </div>
  </a>
`
class VideoComponents extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    this.innerHTML = video;
    this.querySelector("a").setAttribute("href", this.getAttribute("href"));
    this.querySelector("img").setAttribute("src", this.getAttribute("src"));
    this.querySelector("h5").innerText = this.getAttribute("title");
  };
};

window.customElements.define("videos-section", VideoComponents);