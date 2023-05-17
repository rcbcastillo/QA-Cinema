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
    const response = await axios.get("http://localhost:9090/users/readUsers")
    return response.data;
  } catch (err) {
    console.error(err)
  }
}