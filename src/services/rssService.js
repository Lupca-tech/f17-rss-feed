// rssService.js
const RSS = require("rss");

class RSSService {
  constructor(title, description, language, ttl, articles) {
    this.title = title;
    this.description = description;
    this.language = language;
    this.ttl = ttl;
    this.articles = articles;
  }

  // Hàm này tạo và trả về RSS feed dưới dạng XML
  generateRSSFeed() {
    const feed = new RSS({
      title: this.title,
      description: this.description,
      language: this.language,
      ttl: this.ttl
    });

    this.articles.forEach((article) => {
      feed.item({
        title: article.title,
        description: article.description,
        url: article.link,
        author: article.author,
        date: article.pubDate
      });
    });

    return feed.xml({ indent: true });
  }
}

module.exports = RSSService;
