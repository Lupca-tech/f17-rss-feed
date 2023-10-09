const FilterService = require("../services/filterService");
const RSSService = require("../services/rssService");
const articles = [];

module.exports = (app) => {
  app.get("/home", (req, res) => {
    // Sử dụng FilterService để lọc dữ liệu
    const filterService = new FilterService(articles);
    const filteredArticles = filterService.filterArticles();

    // Sử dụng RSSService để tạo RSS feed từ dữ liệu đã lọc
    const rssService = new RSSService(
      "Tên trang web tin tức",
      "Đây là trang web tin tức",
      "vi",
      60,
      filteredArticles
    );

    const xml = rssService.generateRSSFeed();

    res.header("Content-Type", "application/xml");
    res.send(xml);
  });
};
