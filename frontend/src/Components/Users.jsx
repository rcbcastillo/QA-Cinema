import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
  } from "@material-tailwind/react";
import logo from '/Users/Admin/QA-Cinema/frontend/src/logo.svg'
import SignUp from "./SignUp";
import { useState, useEffect } from "react";
import { UserContext } from "./LoginController";
import { useNavigate, useLocation } from "react-router-dom";

import * as api from "../api";

const Users = (props) => {

    //update sign up form to match the data from db
    //if data matches then display username or 

    const navigate = useNavigate();
    //get users from database
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
    api.getUsers().then((response) => {
      setUsers(response);
    });}, []);

    //compare input to the gotten
  
    //const { user, setUser } = useContext(UserContext)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    //const email = searchParams.get("email")
    const { open } = props; 

    const email = localStorage.getItem("email")
    const pass = localStorage.getItem("pass")

    function compare(array, variable, variable2){
        return array.find((item) => item.email === variable && item.password === pass) !== undefined;
    }
    const result = compare(users, email)

    if (result) {
        console.log("found")
    return (
        <>
        
    <Card className="bg-japanese-indigo w-100">
            <List>
                <ListItem>
                    <ListItemPrefix>
                        <Avatar variant="circular" alt="candice" src={logo} />
                    </ListItemPrefix>
                    <div>
                        <Typography className="text-white" variant="h6" color="blue-gray">
                            {email}
                        </Typography>
                        <Typography variant="small" color="gray" className="text-white font-normal">
                            Software Engineer @ Material Tailwind
                        </Typography>
                    </div>
                    <div>
                        <h4 className="text-white pb-2"><b>Movies watched</b></h4>

                    <div className="w-[32rem]">
                        <Timeline>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="text-white leading-none">
                                The Avengers
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography
                                variant="small"
                                color="gary"
                                className="font-normal text-white"
                                >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
                                molestiae unde, iste doloremque maxime. Eligendi libero animi
                                sapiente quaerat inventore provident error.
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="text-white leading-none">
                                Iron Man
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography
                                variant="small"
                                color="gary"
                                className="font-normal text-white"
                                >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
                                molestiae unde, iste doloremque maxime. Eligendi libero animi
                                sapiente quaerat inventore provident error.
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="text-white leading-none">
                                Ant-Man
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody>
                                <Typography
                                variant="small"
                                color="gary"
                                className="font-normal text-white"
                                >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis, quaerat sunt ipsam repellendus explicabo culpa eum odio
                                molestiae unde, iste doloremque maxime. Eligendi libero animi
                                sapiente quaerat inventore provident error.
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                        </div>
                    </div>
                </ListItem>
            </List>
    </Card>

    </>
  );
    } else if (result === false) {
        //show not found page
        //clear url
        alert("user not found")
        navigate("/signin")
        
        console.log("not found")
        console.log(result)
        console.log(users)
        console.log(email)
    }
  
}
export default Users