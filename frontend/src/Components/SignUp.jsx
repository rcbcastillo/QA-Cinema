import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import * as api from "../api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmitButton = () => {
    // Handle form submission
    //alert(JSON.stringify(inputs));

    api
      .createUser(inputs)
      .then((response) => {
        console.log(response);
        // Handle the response or perform any necessary actions
        navigate(`/signin`);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error if necessary
      });
  };

  const isFormValid = () => {
    // Check if all required inputs have a value
    return (
      inputs.firstname &&
      inputs.lastname &&
      inputs.email &&
      inputs.password &&
      inputs.email.includes("@")
    );
  };

  return (
    <div className="flex justify-center w-full h-full rounded-xl mx-auto shadow-md rounded">
      <Card className="flex" color="transparent" shadow={false}>
        <Typography variant="h4" color="white">
          Sign Up
        </Typography>
        <Typography color="white" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          name="detailsForm"
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-0">
            <div name="firstname" className="p-2">
              <Input
                id="1"
                required
                color="white"
                type="input"
                size="lg"
                label="First Name"
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, firstname: target.value }))
                }
                value={inputs.firstname}
              />
            </div>
            <div name="lastname" className="p-2">
              <Input
                id="4"
                required
                color="white"
                type="input"
                size="lg"
                label="Last Name"
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, lastname: target.value }))
                }
                value={inputs.lastname}
              />
            </div>

            <div name="email" className="p-2">
              <Input
                id="2"
                required
                color="white"
                type="email"
                size="lg"
                label="Email"
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, email: target.value }))
                }
                value={inputs.email}
              />
            </div>
            <div name="pass" className="p-2">
              <Input
                id="3"
                required
                color="white"
                type="password"
                size="lg"
                label="Password"
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, password: target.value }))
                }
                value={inputs.password}
              />
            </div>

            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="white"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="/t&c"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />

            <Button
              className="mt-6"
              fullWidth
              onClick={handleSubmitButton}
              disabled={!isFormValid()} // Disable button if the form is not valid
            >
              Register
            </Button>
          </div>

          <Typography color="white" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="/signin"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
