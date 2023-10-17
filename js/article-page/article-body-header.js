const articleBodyHeaderComponent = `
<div class="article-img">
  <img src="" alt="...">
</div>
<div class="article-subtitle">
  <span></span>
</div>
<div class="article-datetime">
  <time datetime=""></time>
</div>
`
class articleBodyHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = articleBodyHeaderComponent
    this.querySelector("img").setAttribute("src", this.getAttribute("src"))
    this.querySelector("span").innerText = this.getAttribute("subtitle")
    this.querySelector("time").innerText = this.getAttribute("time")
    this.querySelector("time").setAttribute("datetime", this.getAttribute("time"))
  }
}
window.customElements.define("article-body-header", articleBodyHeader)