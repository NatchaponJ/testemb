// app.js

// Example news data (this will eventually come from your backend)
const newsData = [
    {
        id: 1,
        title: "Sales Overview",
        summary: "To test the embedded sales overview report with app",
        fullContent: `
            <iframe 
                id="powerbi-embed" 
                width="100%" 
                height="500px" 
                src="https://app.powerbi.com/reportEmbed?reportId=9ddf2745-cb33-409c-99e0-cab209daf028&autoAuth=true&ctid=9c21bf6f-39b9-4076-94e0-3f72bcf282a9" 
                frameborder="0" 
                allowFullScreen="true">
            </iframe>
        `
    }
];

// Function to display news articles on the page
function displayNews() {
    const newsList = document.getElementById('news-list');

    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        newsItem.innerHTML = `
            <h2>${news.title}</h2>
            <p>${news.summary}</p>
            <a href="#" class="read-more">Read more</a>
            <div class="full-content hidden">${news.fullContent}</div>
        `;

        newsItem.querySelector('.read-more').addEventListener('click', function(event) {
            event.preventDefault();
            const fullContent = newsItem.querySelector('.full-content');
            fullContent.classList.toggle('hidden');
            this.textContent = fullContent.classList.contains('hidden') ? 'Read more' : 'Read less';

            if (!fullContent.classList.contains('hidden')) {
                const iframe = fullContent.querySelector('iframe');
                iframe.height = window.innerWidth < 768 ? '300px' : '500px'; // Adjust iframe height based on screen size
            }
        });

        newsList.appendChild(newsItem);
    });
}

// Call the function to display news when the page loads
window.onload = displayNews;
