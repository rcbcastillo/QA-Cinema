import { useState, useEffect } from "react";
import axios from "axios";

const Booking = () => {
  const [test, setTest] = useState("");

  useEffect(() => {
    const url = "http://localhost:9090/create-checkout-session";
    axios
      .post(url)
      .then((response) => {
        // console.log(response.data);
        setTest(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // TEST FUNCTION ONLY - to be replaced
  // const testStripe = (e) => {
  //   if (e) {
  //     e.preventDefault();
  //   }

  // const url = "http://localhost:9090/create-checkout-session";
  // axios
  //   .post(url)
  //   .then((response) => {
  //     // console.log(response.data);
  //     setTest(response.data);
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // };

  return (
    <>
      {/* <form onSubmit={testStripe}> */}
      <form action={test}>
        <input type="text" />
        <button
          onClick={() => test}
          color="success"
          type="submit"
          style={{ width: "100%" }}
        >
          GO
        </button>
      </form>

      {/* <p>{movies.map((movie) => movie.Title)}</p> */}
    </>
  );
};

export default Booking;
