const resCard = `
<a href="">
  <div class="row">
    <div class="col-md-4 align-self-center">
      <img src="" alt="picture-14">
    </div>
    <div class="col-md-8">
      <div class="card-text">
        <h4></h4>
        <p></p>
        <time datetime=""></time>
      </div>
    </div>
  </div>
</a>
`
class ResultCardComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = resCard
    this.querySelector("a").setAttribute("href", this.getAttribute("href"))
    this.querySelector("img").setAttribute("src", this.getAttribute("src"))
    this.querySelector("h4").innerText = this.getAttribute("title")
    this.querySelector("p").innerText = this.getAttribute("para")
    this.querySelector("time").setAttribute("datetime", moment(parseInt(this.getAttribute("time"))).format('dddd') +
      ", " + moment(parseInt(this.getAttribute("time"))).format('LL'))
    this.querySelector("time").innerText = moment(parseInt(this.getAttribute("time"))).format('dddd') + ", " +
      moment(parseInt(this.getAttribute("time"))).format('LL')
  }
}
window.customElements.define("res-search-card", ResultCardComponent)