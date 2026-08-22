fetch("posts.json").then(response => response.json()).then(postsJson => {
    for (let i = 0; i < postsJson.length; i++) {
        const post = postsJson[i];

        let anchor = document.createElement("a");
        anchor.setAttribute("href", post["url"]);
        anchor.setAttribute("style", "text-decoration: none; color: inherit;");
        anchor.innerHTML = `
            <div class="blog-container-box">
                <div class="title">
                    <p>${post["date"]} - ${post["title"]}</p>
                </div>
                <div class="subtitle">
                    <p>${post["description"]}</p>
                </div>
            </div>
        `;
        document.body.appendChild(anchor);
    }
});
