import http from "../http";

class BookmarkDataService {
  getAllReadLater() {
    return http.get("/read_later");
  }
  add(id_user,id_berita) {
    return http.post('http://localhost:8000/api/read_later', id_user,id_berita);
  }

  delete(id_berita) {
    return http.delete(`/read_later/${id_berita}`);
  }

  getuserbookmark(id_user) {
    return http.get(`/read_later/my_bookmark/${id_user}`);
  }
}

export default new BookmarkDataService();