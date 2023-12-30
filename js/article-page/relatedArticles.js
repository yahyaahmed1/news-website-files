const relatedArticle = `
<a href="" class="article-link">
  <img src="" alt="img">
  <div class="article-text mt-3">
    <span class="article-category"></span>
    <h5 class="article-title"></h5>
  </div>
</a>
`
class RelatedArticleComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = relatedArticle
    this.querySelector("a").setAttribute("href", this.getAttribute("href"))
    this.querySelector("img").setAttribute("src", this.getAttribute("src"))
    this.querySelector("span").innerText = this.getAttribute("category")
    this.querySelector("h5").innerText = this.getAttribute("title")
  }
}
window.customElements.define("related-article", RelatedArticleComponent)