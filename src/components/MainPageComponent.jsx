import React from 'react';
import styled from 'styled-components';
import "../components/MainPageComponent.css";
import image1 from '../components/images/image1.png';
import image2 from '../components/images/image2.jpg';
import image3 from '../components/images/image3.png';
import image4 from '../components/images/image4.jpg';
import image5 from '../components/images/image5.jpg';
import image6 from '../components/images/image6.png';
import image7 from '../components/images/image7.png';
import image8 from '../components/images/image8.jpg';

const OptionsContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Option = styled.div`
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const MainPageContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 60px; /* Adjust this to bring the options right below the navbar */
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const ImageItem = styled.div`
  width: 100%;
  padding-top: 100%; /* This creates a square by setting height equal to width */
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const MainPageComponent = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    
  ];

  return (
    <MainPageContainer>
        <button className='follow-btm'>Following</button>
      <OptionsContainer>
        <Option>Discover</Option>
        <Option>Animation</Option>
        <Option>Branding</Option>
        <Option>Illustration</Option>
        <Option>Mobile</Option>
        <Option>Print</Option>
        <Option>Product Design</Option>
      </OptionsContainer>
      <ImagesContainer>
        {images.map((image, index) => (
          <ImageItem className="image" key={index} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </ImagesContainer>
    </MainPageContainer>
  );
};

export default MainPageComponent;
