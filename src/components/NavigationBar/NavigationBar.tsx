import React,{useState} from 'react';
import './NavigationBar.scss';
import { Navbar, Container } from 'react-bootstrap';
import {
  BrowserRouter,
  Link
} from "react-router-dom";
import { NavigationBarRoute } from '../RouteNavBar/NavigationBarRoute/RouteNavBar';
import { useDispatch } from 'react-redux';

export const NavigationBar = () => {
  const dispatch = useDispatch();
  const [currentUrl,setCurrentUrl] = useState('/');
  const [choosenLink,setChoosenLink] = useState("");
  return (
    <BrowserRouter>
      <Navbar
        className="NavigationBar" 
        bg="dark"
        variant="dark"
      >
        <Container className="NavigationBar__container">
          <Navbar.Brand>
            <Link
              className="NavigationBar__logo-filter_container"
              onClick={() => {
                setCurrentUrl("/");
                setChoosenLink("character");
              }} 
              to="/"
            >
              <div className="NavigationBar__logo"/>
            </Link>
          </Navbar.Brand>
            <nav className="NavigationBar__link-container">
              <Link
                onClick={()=> {
                  setChoosenLink("character");
                  setCurrentUrl("/");
                }}
                className={`NavigationBar__link 
                  ${choosenLink === "character" 
                    && "choosen_nav_link"
                  }`
                }
                to="/"
              >
                Characters
              </Link>
              <Link
               onClick={()=> {
                 setCurrentUrl("/Episodes");
                 setChoosenLink("episodes");
                }}
               className={`NavigationBar__link 
                 ${choosenLink === "episodes" 
                   && "choosen_nav_link"
                  }`
                }
                to="/Episodes"
              >
                Episodes
              </Link>
              <Link
                onClick={() => {
                  setCurrentUrl("/Locations");
                  setChoosenLink("locations");
                }}
                className={`NavigationBar__link 
                  ${choosenLink === "locations"
                    && "choosen_nav_link"
                  }`
                }
                to="/Locations"
              >
                Locations
              </Link>
              <Link
                onClick={() => {
                  setCurrentUrl("/My_watch_list");
                  setChoosenLink("My_watch_list");
                }}
                className={`NavigationBar__link 
                  ${choosenLink === "My_watch_list"
                  && "choosen_nav_link"
                  }`
                }
                to="/My_watch_list"
              >
                My watch list
              </Link>
              <div
                onClick={() => {
                  if (currentUrl === '/') {
                    dispatch({type:"CHARACTER/OPEN"});
                  }
                  if (currentUrl === "/Episodes") {
                    dispatch({type:"EPISODE/OPEN"});
                  }
                  if(currentUrl === "/Locations") {
                    dispatch({type:"LOCATION/OPEN"});
                  }
                  if(currentUrl === "/My_watch_list") {
                    dispatch({type:"MYWATCHLIST/OPEN"});
                  }
                }}
                className="NavigationBar__icon-filter"
              />
            </nav>
        </Container>
      </Navbar>
      <NavigationBarRoute/>
    </BrowserRouter>
  )
};
