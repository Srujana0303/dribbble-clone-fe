import React from 'react';
import styled from 'styled-components';
import "../components/MainPageComponent.css";
import GalleryItem from '../components/GalleryItem';
import image1 from '../components/images/image1.png';
import image2 from '../components/images/image2.jpg';
import image3 from '../components/images/image3.png';
import image4 from '../components/images/image4.jpg';
import image5 from '../components/images/image5.jpg';
import image6 from '../components/images/image6.png';
import image7 from '../components/images/image7.png';
import image8 from '../components/images/image8.jpg';
import Filter from "../components/images/filter.svg"


const Option = styled.div`
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
  font-weight: 600 ;
  padding: 0 16px;
`;

const MainPageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
   /* Adjust this to bring the options right below the navbar */
`;



const ImageItem = styled.div`
  width: 275px;
  height: 205px;
  border-radius: 10px;
`;

const MainPageComponent = () => {
  const items = [
    { id: 1, image: image1, title: 'Vineyard Swines', author: 'Beehaya', likes: 7, views: 480 },
    { id: 2, image: image2, title: 'Project 2', author: 'Serkan Hürşgenül', likes: 1, views: 93 },
    { id: 3, image: image3, title: 'Project 3', author: 'Serkan Hürşgenül', likes: 2, views: 74 },
    { id: 4, image: image4, title: 'Webflow', author: 'Webflow', likes: 0, views: 0 },
    { id: 5, image: image5, title: 'Project 5', author: 'MUTI', likes: 159, views: 18600 },
    { id: 6, image: image6, title: 'Project 6', author: 'Jessie Maisonneuve', likes: 20, views: 1400 },
    { id: 7, image: image7, title: 'Project 7', author: 'Mostafizur Rahman', likes: 36, views: 1100 },
    { id: 8, image: image8, title: 'Project 8', author: 'Scott Elser', likes: 2, views: 285 },
  ];

  return (
    <MainPageContainer>
      <div className='info-bar'>
        <button className='follow-btn'>Following</button>
        <Option>Discover</Option>
        <Option>Animation</Option>
        <Option>Branding</Option>
        <Option>Illustration</Option>
        <Option>Mobile</Option>
        <Option>Print</Option>
        <Option>Product Design</Option>
        <div class="filter-button">
          <img class="icon" src={Filter}></img>
          <span>Filters</span>
        </div>
      </div>
      <div className="gallery">
        {items.map(item => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </MainPageContainer>
  );
};

export default MainPageComponent;
