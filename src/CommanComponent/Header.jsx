import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,

} from 'mdb-react-ui-kit';
import { NavLink,useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {

  const [showBasic, setShowBasic] = useState(false);
  // const [Cookies,setCookies] = useCookies()
  const [Cookies, setCookie, removeCookie] = useCookies([]);
  const navigate = useNavigate()


  const MenuItem = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    // "/login": "Login/Register"
  }

  const Dropdown = [
    {
      "/ui-ux": "UI-UX"
    },
    {
      "/web-development": "Web-Development"
    },
    {
      "/frontend-development": "FrontEnd-Development",
    },
    {
      "/backend-development": "BackEnd-Development",
    },
  ]

//   const Logout = () => {
//     console.log("remove cookies")
//     Object.keys(Cookies).forEach(cookieName => {
//         removeCookie(cookieName);
//     });
//     navigate("/login")
// }
  const Menudata = Object.entries(MenuItem).map(([key, value], i) => {
    console.log(key, value);
    return (<MDBNavbarItem key={i}>
      <NavLink tag='a' className='nav-link' to={key}>{value}</NavLink>
    </MDBNavbarItem>)
  })

  const Dropdowndata = Dropdown.map((item, i) => {
    return (<MDBDropdownItem key={i}>
      <NavLink className="nav-link" aria-current="page" to={`Courses${Object.keys(item)}`}>{Object.values(item)}</NavLink>
    </MDBDropdownItem>)
  })


  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              {Menudata}
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Courses
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>

                    {Dropdowndata}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
    {/* {JSON.stringify(Cookies)} */}
            {Cookies.role ?
              <MDBBtn color='danger' className='d-flex align-items-center' ><i className="fa-solid fa-right-from-bracket"></i> Logout</MDBBtn> :
              <MDBBtn color='success'><NavLink className='nav-link text-white d-flex align-items-center p-0' to="/login">Login <i className="fa-solid fa-right-to-bracket"></i></NavLink> </MDBBtn>
            }

          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header
