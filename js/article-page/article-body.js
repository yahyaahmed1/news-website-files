const articleBody = `
<article class="article-part1">

</article>

<section class="suggested-stories">
  <h2 class="section-title">القصص المقترحة</h2>
  <div class="stories" id="stories">  </div>
</section>

<article class="article-part2">

</article>

<section class="keywords-section">
  <h2 class="section-title">الكلمات المفتاحية</h2>
  <div class="keywords" id="keywords">

  </div>
</section>
`
class ArticleBodyComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = articleBody
    this.querySelector(".article-part1").innerHTML = this.getAttribute("article-part1")
    this.querySelector(".article-part2").innerHTML = this.getAttribute("article-part2")
  }
}
window.customElements.define("article-body", ArticleBodyComponent)