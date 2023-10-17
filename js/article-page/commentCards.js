const CommentCards = `
<div class="comment-card">
  <div class="row">
    <div class="col-lg-2 col-3">
      <div class="user-photo">
        <img src="" alt="comment-img">
      </div>
    </div>
    <div class="col-lg-10 col-9">
      <div class="comment-text">
        <span class="username"></span>
        <p></p>
      </div>
    </div>
  </div>
</div>
`
class CommentCardsComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = CommentCards
    this.querySelector("img").setAttribute("src", this.getAttribute("src"))
    this.querySelector("span").innerText = this.getAttribute("username")
    this.querySelector("p").innerText = this.getAttribute("para")
  }
}
window.customElements.define("comment-card", CommentCardsComponent)