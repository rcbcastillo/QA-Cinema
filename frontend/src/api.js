import axios from "axios";

export async function getBookings() {
  try {
    const response = await axios.get(
      "http://localhost:9090/bookings/readBookings"
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getMovies() {
  try {
    const response = await axios.get("http://localhost:9090/movies/readMovies");
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUsers() {
  try {
    const response = await axios.get("http://localhost:9090/users/readUsers");
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getComments() {
  try {
    const response = await axios.get(
      "http://localhost:9090/comments/readComments"
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function createBooking(newBooking) {
  try {
    const response = await axios.post(
      `http://localhost:9090/bookings/create`,
      newBooking
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function createUser(newUser) {
  try {
    const response = await axios.post(
      `http://localhost:9090/users/create`,
      newUser
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function createComment(newComment) {
  try {
    const response = await axios.post(
      `http://localhost:9090/comments/create`,
      newComment
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getCommentsByMovieId(movieId) {
  try {
    const response = await axios.get(
      `http://localhost:9090/comments/readCommentsByMovieId/${movieId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function postCommentByUserId(userId, newComment) {
  try {
    const response = await axios.post(
      `http://localhost:9090/comments/${userId}`,
      newComment
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
