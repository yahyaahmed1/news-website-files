const suggestedStoryComponent = `
<a href="" class="article-link">
  <div class="story-card mt-5">
    <div class="row">
      <div class="col-sm-4">
        <img src="" alt="...">
      </div>
      <div class="col-sm-8">
        <p></p>
      </div>
    </div>
  </div>
</a>
`
class SuggestedStories extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = suggestedStoryComponent
    this.querySelector("a").setAttribute("href", this.getAttribute("href"))
    this.querySelector("img").setAttribute("src", this.getAttribute("src"))
    this.querySelector("p").innerText = this.getAttribute("title")
  }
}
window.customElements.define("suggested-stories", SuggestedStories)