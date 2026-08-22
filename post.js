const postTitle = window.location.pathname.slice(6);
const articleElement = document.getElementById("post");

fetch(`/BlogPosts/${postTitle}.md`).then(response => {
    if (response.ok) {
        return response.text();
    } else {
        throw new Error("Requested post does not exist.");
    }
}).then(markdown => {
    const parser = new commonmark.Parser();
    const renderer = new commonmark.HtmlRenderer();
    const parsed = parser.parse(markdown);
    const html = renderer.render(parsed);
    articleElement.innerHTML = html;
}).catch(error => {
    articleElement.innerHTML = `
        <h1>The post that you have requested does not exist.</h1>
        <p>Please check the URL after "/post/" to see if you've spelt the post title incorrectly.</p>
    `;
});
