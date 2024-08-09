// app.js

// Example news data (this will eventually come from your backend)
const newsData = [
    {
        id: 1,
        title: "Sales Overview",
        summary: "To test the embedded sales overview report with app",
        fullContent: `
            <iframe 
                width="100%" 
                height="500px" 
                src="https://app.powerbi.com/reportEmbed?reportId=9ddf2745-cb33-409c-99e0-cab209daf028&autoAuth=true&ctid=9c21bf6f-39b9-4076-94e0-3f72bcf282a9" 
                frameborder="0" 
                allowFullScreen="true"></iframe>
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
            <p class="full-content hidden">${news.fullContent}</p>
        `;

        // Add event listener to toggle the visibility of the full content
        newsItem.querySelector('.read-more').addEventListener('click', function(event) {
            event.preventDefault();
            const fullContent = newsItem.querySelector('.full-content');
            fullContent.classList.toggle('hidden');
            this.textContent = fullContent.classList.contains('hidden') ? 'Read more' : 'Read less';
        });

        newsList.appendChild(newsItem);
    });
}

// Call the function to display news when the page loads
window.onload = displayNews;
