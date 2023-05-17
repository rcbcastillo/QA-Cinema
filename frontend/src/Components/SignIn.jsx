import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

const SignIn = () => {
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
          <div name="username" className="p-2"><Input id="1" required color="white" type="input" size="lg" label="Name" /></div>
          <div name="pass" className="p-2"><Input id="3" required color="white" type="password" size="lg" label="Password"/></div>
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

          <Button fullWidth >
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