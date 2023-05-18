import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import { UserContext } from "./LoginController";
import { useNavigate } from "react-router-dom";
  
  const SignIn = () => {

    const navigate = useNavigate()
    //const { user } = useContext(UserContext)
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [inputs, setInputs] = useState({firstname: "", lastname: "", email: "", password:""});


    const handleSubmitButton = () => {
      //event.preventDefault()
      //setUser({...user, username: inputs.username, email: inputs.email, password:inputs.password})
      setFirstname(inputs.firstname)
      setLastname(inputs.lastname)
      setEmail(inputs.email)
      setPassword(inputs.password)
      //alert(JSON.stringify(inputs));
      //setUser({username: inputs.username, email: inputs.email, password: inputs.password})
      localStorage.setItem("email", inputs.email)
      localStorage.setItem("pass", inputs.password)
      navigate(`/user`);
      window.location.reload();
    }; 

    return (
    <div className="flex justify-center w-full h-full rounded-xl mx-auto shadow-md rounded">
      <Card className="flex" color="transparent" shadow={false}>
      <Typography className="p-2 text-center" variant="h4" color="white">
        Sign In
      </Typography>
      <Typography color="white" className="text-center mt-1 font-normal">
        Enter your details.
      </Typography>
      <form name="detailsForm" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-0">
        <div name="email" className="p-2"><Input id="1" required color="white" type="input" size="lg" label="Email" onChange={({target}) => setInputs(state => ({...state,email:target.value}))} value={inputs.email}/></div>
        <div name="pass" className="p-2"><Input id="3" required color="white" type="password" size="lg" label="Password" onChange={({target}) => setInputs(state => ({...state,password:target.value}))} value={inputs.password} /></div>
          <Typography color="white" className="mt-1 text-center font-normal">
            Forgot your{" "}
            <a
            href="/signin"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700">
            Password?
            </a>
            </Typography>
            
            <div className="flex justify-center">
            <Checkbox
            label={
                (
                <Typography
                    variant="small"
                    color="white"
                    className="flex items-center font-normal"
                >
                    Remember Me
                </Typography>
                )}
                containerProps={{ className: "-ml-2.5" }}
            />
            </div>

          <Button fullWidth onClick={() => handleSubmitButton()}>
          Login
          </Button>
        
        <Typography color="white" className="p-2 text-center font-normal">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign Up
          </a>
        </Typography>
        </div>

        </form>
        </Card>
        </div>
    );
}
export default SignIn