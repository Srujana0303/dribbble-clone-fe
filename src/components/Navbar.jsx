import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import dribbbleLogo from '../components/images/dribbbleLogo.png';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;

  img {
    height: 40px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const NavLink = styled.div`
  position: relative;
  cursor: pointer;
  margin: 0 20px;
`;

const Dropdown = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchBarContainer = styled.div`
  position: relative;
  margin-left: auto;
`;

const SearchBar = styled.input`
  padding: 8px 40px 8px 20px;
  font-size: 13px;
  border: 4px solid #ddd;
  border-radius: 20px;
  width: 250px;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #888;
`;

const Navbar = () => {
  const [isFindDesignersOpen, setIsFindDesignersOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const handleFindDesignersHover = () => {
    setIsFindDesignersOpen(true);
  };

  const handleFindDesignersLeave = () => {
    setIsFindDesignersOpen(false);
  };

  const handleCoursesHover = () => {
    setIsCoursesOpen(true);
  };

  const handleCoursesLeave = () => {
    setIsCoursesOpen(false);
  };

  return (
    <div>
    <NavbarContainer>
      <Logo>
        <img src={dribbbleLogo} alt="Dribbble Logo" title="Dribbble: The Community for Graphic Design" />
      </Logo>
      <NavLinks>
        <NavLink
          onMouseEnter={handleFindDesignersHover}
          onMouseLeave={handleFindDesignersLeave}
        >
          Find Designers
          <Dropdown isOpen={isFindDesignersOpen}>
            <DropdownItem href="#">Designer Search</DropdownItem>
            <DropdownItem href="#">Post a Job</DropdownItem>
          </Dropdown>
        </NavLink>
        <NavLink>Inspiration</NavLink>
        <NavLink
          onMouseEnter={handleCoursesHover}
          onMouseLeave={handleCoursesLeave}
        >
          Courses
          <Dropdown isOpen={isCoursesOpen}>
            <DropdownItem href="#">UX Diploma</DropdownItem>
            <DropdownItem href="#">UI Certificate</DropdownItem>
            <DropdownItem href="#">Live Interactive Workshops</DropdownItem>
          </Dropdown>
        </NavLink>
        <NavLink>Jobs</NavLink>
        <NavLink>Go Pro</NavLink>
      </NavLinks>
      <SearchBarContainer>
        <SearchBar type="text" placeholder="Search..." />
        <SearchIcon icon={faSearch} />
      </SearchBarContainer>
    </NavbarContainer>
    <div className='prof'>
      <img src="../components/images/data.jpeg" alt="" />
    </div>
  </div>
  );
};

export default Navbar;