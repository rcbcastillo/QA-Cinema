import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  FilmIcon,
  ArrowUpCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
 
const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
  japaneseIndigo: "bg-japanese-indigo text-japanese-indigo-500"
};
 
const navListMenuItems = [
  {
    color: "blue",
    icon: FilmIcon,
    title: "Now Showing",
    description: "See what the cinema is currently showing.",
  },
  {
    color: "orange",
    icon: ArrowUpCircleIcon,
    title: "Upcoming releases",
    description: "Find and book upcoming movies",
  }
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="/films" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="japaneseIndigo"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Films
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-white">
      <NavListMenu />
      <Typography
        as="a"
        href="/location"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white">

          Location
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/films"
        variant="small"
        
        className="font-normal"
      >
        <ListItem className="bg-pearl-aqua flex items-center gap-2 py-2 pr-4 text-white">
          
          Book
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/discussion-board"
        variant="small"
        
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white">
          
          Forums
        </ListItem>
      </Typography>
      
    </List>
  );
}
 
const NavbarComponent = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  const navigate = useNavigate();
  const userSignUpRedirect = () => {
    navigate("/signup")
  }
  const userSignInRedirect = () => {
    navigate("/signin")
  }
  const userRedirect = (id) => {
    if (id === 1) {
      navigate("/signin")
    }
    if (id === 2) {
      navigate("/signup")
    }
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <Navbar className="bg-pearl-aqua mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-white"
        >
          QA Cinema
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="japaneseIndigo"
          className="bg-japanese-indigo lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="bg-japanese-indigo h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="bg-japanese-indigo h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden text-white">
          <Button onClick={() => userRedirect(1)} className="text-white" variant="outlined" size="sm" color="blue-gray" fullWidth>
            Sign In
          </Button>
          <Button onClick={() => userRedirect(2)} variant="gradient" size="sm" fullWidth>
            Sign Up
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent;