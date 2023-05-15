import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  const SignUp = () => {
    return (
        <div className="flex justify-center w-full h-full rounded-xl mx-auto shadow-md rounded">
      <Card className="bg-japanese-indigo" shadow={false}>
        <Typography variant="h4" className="text-white">
          Sign Up
        </Typography>
        <Typography className="text-white mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6 p-2">
            <Input size="lg" label="User Name" />
            <div className="p-2"></div>
            <Input className="p-2" size="lg" label="Email" />
            <div className="p-2"></div>
            <Input type="password" size="lg" label="Password" />
          </div>
          <Checkbox
            label={
              (
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="https://termify.io/terms-and-conditions-generator?msclkid=365251464d921a9cabeb352473fe222e&utm_source=bing&utm_medium=cpc&utm_campaign=Termify&utm_term=terms%20and%20conditions%20template&utm_content=Terms%20%26%20Conditions"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="/user"
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