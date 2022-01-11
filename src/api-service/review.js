import axios from "axios";

//API url and headers

const api = axios.create({
  baseURL: "http://localhost:8000/api/reviews",
  headers: {
    "Content-Type": "application/json",
  },
});
// eslint-disable-next-line no-restricted-globals
if (location.hostname === "localhost") {
  api.baseURL = "https://review-app-api.herokuapp.com/api/reviews";
}

// class for handling review API requests
class reviewApiService {
  //get all reviews
  getAll(page = 0) {
    return api.get(`?page=${page}`);
  }
  //find reviews with filters with possible pagination
  find(query, by = "gameTitle", page = 0) {
    //Example: api/gameTitle=RuneScape
    //Example 2: api/_id=f8dsf9sdhf9s8dfh8sdf&page=1
    return api.get(`?${by}=${query}&page=${page}`);
  }
  create(review) {
    //create a new review with the given data
    return api.post("/", review);
  }
  update(review) {
    //update the review with the given data
    return api.put(`/${review._id}`, review);
  }
  delete(id) {
    //delete the review with the given id
    return api.delete(`/${id}`);
  }
}

export default new reviewApiService();
