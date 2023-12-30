const mostReadEven = `
  <div class="card-news">
    <a href="">
      <div class="row">
        <div class="col-md-5">
          <img src="" alt="img">
        </div>
        <div class="col-md-7">
          <div class="card-text">
            <h4></h4>
            <p></p>
            <time datatime=""></time>
          </div>
        </div>
      </div>
    </a>
  </div>
`
class MostReadEvenComponent extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    this.innerHTML = mostReadEven;
    this.querySelector("a").setAttribute("href", this.getAttribute("href"));
    this.querySelector("img").setAttribute("src", this.getAttribute("src"));
    this.querySelector("h4").innerText = this.getAttribute("title");
    this.querySelector("time").innerText = this.getAttribute("time");
    this.querySelector("p").innerText = this.getAttribute("para");
    this.querySelector("time").setAttribute("datetime", this.getAttribute("time"));
  };
};

window.customElements.define("most-read-card-even", MostReadEvenComponent);