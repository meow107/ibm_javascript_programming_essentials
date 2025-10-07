var url = './health_article.json';

var xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.onload = function() {
    // ✅ Fixed: use the same variable name consistently
    var articlesData = xhr.response; // entire JSON response
    var articles = articlesData.articles; // array inside it

    // ✅ Fixed: correct variable name (was 'articleDiv', should be 'articlesDiv')
    var articlesDiv = document.getElementById('articles');

    // ✅ Check in case JSON is empty or missing
    if (!articles || !Array.isArray(articles)) {
        console.error('No articles found in JSON.');
        return;
    }

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // ✅ Append all to article container
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // ✅ Append article to main container
        articlesDiv.appendChild(articleDiv);
    });
};

// Always open before send
xhr.open('GET', url, true);
xhr.send();