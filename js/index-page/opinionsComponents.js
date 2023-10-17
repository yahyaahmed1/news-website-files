const opinion = `
  <a href="">
    <div class="opinions-card">
      <h5></h5>
      <div class="opinions-profile">
        <img src="" alt="img">
        <span></span>
      </div>
    </div>
  </a>
`

class OpinionsComponent extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    this.innerHTML = opinion;
    this.querySelector("a").setAttribute("href", this.getAttribute("href"));
    this.querySelector("h5").innerText = this.getAttribute("title");
    this.querySelector("img").setAttribute("src", this.getAttribute("src"));
    this.querySelector("span").innerText = this.getAttribute("username")
  }
}

window.customElements.define("opinion-articles", OpinionsComponent);