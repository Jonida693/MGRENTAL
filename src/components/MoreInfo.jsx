import React from 'react'
import more from "../assets/more.jpg"; // <-- import image

export default function MoreInfo() {
  return (
<div 
  className='container !flex !flex-col !justify-end border-radius20' 
  style={{
    backgroundImage: `url(${more})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '400px',
    transition: 'background-position 0.5s ease'
  }}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.backgroundPosition = `${x}% ${y}%`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundPosition = 'center';
  }}
>
    <div className='moreInfo-text'>
        <h3>Discover Albania with Your Freedom</h3>
        <p>From the Ionian coast to the northern mountains - with MG Rental, every road becomes an adventure. Start your journey today with prices that make you smile!</p>
    </div>
</div>
  )
}
