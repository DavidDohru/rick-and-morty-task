import React,{useState} from 'react';
import './NavigationBar.scss';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { NavigationBarRoute } from '../RouteNavBar/NavigationBarRoute/RouteNavBar';
import { useDispatch } from 'react-redux';

if (JSON.parse(localStorage.getItem('link')!) === undefined) {
  localStorage.setItem('link',JSON.stringify("/"));
}
if (JSON.parse(localStorage.getItem('choosen')!) === undefined) {
  localStorage.setItem('choosen',JSON.stringify("/"));
}
export const NavigationBar = () => {
  const dispatch = useDispatch();
  const [currentUrl,setCurrentUrl] = useState(JSON.parse(localStorage.getItem('link')!)||"/");
  const [choosenLink,setChoosenLink] = useState(JSON.parse(localStorage.getItem('choosen')!)||"/");
  return (
    <>
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
                localStorage.setItem('link',JSON.stringify("/"));
                localStorage.setItem('choosen',JSON.stringify("character"));
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
                  localStorage.setItem('link',JSON.stringify("/"));
                  localStorage.setItem('choosen',JSON.stringify("character"));
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
                 localStorage.setItem('link',JSON.stringify("/Episodes"));
                 setChoosenLink("episodes");
                 localStorage.setItem('choosen',JSON.stringify("episodes"));
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
                  localStorage.setItem('link',JSON.stringify("/Locations"));
                  setChoosenLink("locations");
                  localStorage.setItem('choosen',JSON.stringify("locations"));
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
                  localStorage.setItem('link',JSON.stringify("/My_watch_list"));
                  setChoosenLink("My_watch_list");
                  localStorage.setItem('choosen',JSON.stringify("My_watch_list"));
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
    </>
  )
};
