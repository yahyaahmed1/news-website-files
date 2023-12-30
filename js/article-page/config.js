import { API_URL } from "../urls.js";

async function ArticleMainFetchFunc() {
  let res = await fetch(API_URL + "articles");
  let data = await res.json();

  // بيانات رأس الصفحة
  const articleHeader = document.createElement("article-header")
  articleHeader.setAttribute("category", data.category);
  articleHeader.setAttribute("subject", data.subject);
  articleHeader.setAttribute("title", data.title);
  document.getElementById("article-header").appendChild(articleHeader);

  // بيانات رأس المقالة
  const articleBodyHeader = document.createElement("article-body-header")
  articleBodyHeader.setAttribute("src", data.img_uri)
  articleBodyHeader.setAttribute("subtitle", data.subtitle)
  articleBodyHeader.setAttribute("time",
    moment(parseInt(data.datetime)).format('dddd') + ", " + moment(parseInt(data.datetime)).format('LL'))
  document.getElementById("article-body-header").appendChild(articleBodyHeader);

  // بيانات جسم المقالة
  const articleBody = document.createElement("article-body")
  articleBody.setAttribute("article-part1", data.article_part_1)
  articleBody.setAttribute("article-part2", data.article_part_2)
  document.getElementById("article-body").appendChild(articleBody);

  // الكلمات المفتاحية
  data.keywords.map(keyword => {
    const element = document.createElement('span')
    element.innerText = keyword
    element.classList.add('keyword', 'me-3')
    document.getElementById('keywords').appendChild(element)
  })

  // التعليقات
  data.comments.map(commentAPI => {
    const comment = document.createElement("comment-card")
    comment.setAttribute("src", commentAPI.user_img)
    comment.setAttribute("username", commentAPI.user_name)
    comment.setAttribute("para", commentAPI.text)
    document.getElementById("comment-cards").appendChild(comment)
  })

  // المقالات ذات الصلة
  data.related_articles.map(related => {
    const relatedArticle = document.createElement("related-article")
    relatedArticle.classList.add("col-sm-4")
    relatedArticle.setAttribute("href", related.link)
    relatedArticle.setAttribute("src", related.img_uri)
    relatedArticle.setAttribute("category", related.category)
    relatedArticle.setAttribute("title", related.title)
    document.getElementById("relatedArticles").appendChild(relatedArticle)
  })
}

async function SuggestedStoriesFunc() {
  let res = await fetch(API_URL + "suggested-articles")
  let data = await res.json()

  data.map(story => {
    const suggested = document.createElement("suggested-stories")
    suggested.setAttribute("src", story.img_uri)
    suggested.setAttribute("href", story.link)
    suggested.setAttribute("title", story.title)
    document.getElementById("stories").appendChild(suggested)
  })
}

ArticleMainFetchFunc();
SuggestedStoriesFunc();