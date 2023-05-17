import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";

import { useState } from "react";
import { renderMatches, useNavigate } from "react-router-dom";
import { UserContext } from "./LoginController";

import Users from "./Users";

const SignUp = () => {

  const navigate = useNavigate()

  //const { user, setUser } = use(UserContext)
  //const [open, setOpen] = useState(false)
  const [inputs, setInputs] = useState({username: "", email:"", password:""});

  const handleSubmitButton = () => {
    //event.preventDefault()
    //setUser({...user, username: inputs.username, email: inputs.email, password:inputs.password})
    //setOpen(true)
    alert(JSON.stringify(inputs));
    //setUser({username: inputs.username, email: inputs.email, password: inputs.password})

    //open user but passing the props
    //do the same in sign in 
    navigate(`/user?username=${inputs.username}`);

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
      <form name="detailsForm" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-0">
          <div name="username" className="p-2"><Input id="1" required color="white" type="input" size="lg" label="Name" onChange={({target}) => setInputs(state => ({...state,username:target.value}))} value={inputs.username}/></div>
          <div name="email" className="p-2"><Input id="2" required color="white" type="email" size="lg" label="Email" onChange={({target}) => setInputs(state => ({...state,email:target.value}))} value={inputs.email}/></div>
          <div name="pass" className="p-2"><Input id="3" required color="white" type="password" size="lg" label="Password" onChange={({target}) => setInputs(state => ({...state,password:target.value}))} value={inputs.password} /></div>
        
          <Checkbox
          label={
            (
              <Typography
                variant="small"
                color="white"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="/t&c"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            )}
            containerProps={{ className: "-ml-2.5" }}
            />

          <Button className="mt-6" fullWidth onClick={() => handleSubmitButton()}>
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
}

export default SignUp