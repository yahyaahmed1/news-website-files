const mostReadOdd = `
<div class="card-news">
  <a href="">
    <div class="card-img">
      <img src="" alt="img">
    </div>
    <div class="card-text">
      <h4></h4>
      <time datatime=""></time>
    </div>
  </a>
</div>
`

class MostReadOddComponent extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    this.innerHTML = mostReadOdd;
    this.querySelector("a").setAttribute("href", this.getAttribute("href"));
    this.querySelector("img").setAttribute("src", this.getAttribute("src"));
    this.querySelector("h4").innerText = this.getAttribute("title");
    this.querySelector("time").innerText = this.getAttribute("time");
    this.querySelector("time").setAttribute("datetime", this.getAttribute("time"));
  };
};

window.customElements.define("most-read-card-odd", MostReadOddComponent);