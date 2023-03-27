const article = Array.from(document.querySelectorAll("article"));

for (let i in article) {

  article[i].classList.add("article-fadein");

}