import React from 'react';
import './GalleryItem.css';

function GalleryItem({ item }) {
  return (
    <div className="gallery-item">
      <img src={item.image} alt={item.title} />
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>{item.author}</p>
        <div className="item-stats">
          <span>🩶 {item.likes}</span>
          <span>👁️ {item.views}</span>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
