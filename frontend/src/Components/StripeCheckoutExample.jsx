import { useState, useEffect } from "react";
import axios from "axios";

const StripeCheckoutExample = () => {
  const [test, setTest] = useState("");

  useEffect(() => {
    const url = "http://localhost:9090/create-checkout-session";
    axios
      .post(url)
      .then((response) => {
        setTest(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <form action={test}>
        <p>hard coded tickets types/quantity:</p>
        <p>adult: 3, child: 2, concession: 1</p>
        <button
          onClick={() => test}
          color="success"
          type="submit"
          style={{ width: "100%" }}
        >
          CHECKOUT
        </button>
      </form>
    </>
  );
};

export default StripeCheckoutExample;
