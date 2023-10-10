// filterService.js

class FilterService {
  constructor(articles) {
    this.articles = articles;
  }

  // Hàm này lọc và trả về các bài báo đã được chọn
  filterArticles() {
    // Thực hiện các logic lọc dữ liệu ở đây (nếu cần)
    // Ví dụ: lọc các bài viết theo điều kiện nào đó
    return this.articles.filter((article) => {
      // Điều kiện lọc ở đây (ví dụ: chỉ lọc các bài viết mới hơn 7 ngày)
      // return true nếu bài viết thỏa mãn điều kiện
      // return false nếu không thỏa mãn
      return true;
    });
  }
}

module.exports = FilterService;
