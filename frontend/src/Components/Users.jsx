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


const Users = () => {
        return (
        
        <Card className="bg-japanese-indigo w-100">
            <List>
                <ListItem>
                    <ListItemPrefix>
                        <Avatar variant="circular" alt="candice" src={logo} />
                    </ListItemPrefix>
                    <div>
                        <Typography className="text-white" variant="h6" color="blue-gray">
                            Candice Wu
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
  );
}
export default Users