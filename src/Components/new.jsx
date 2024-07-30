import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewU = () => {
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
   

    <div className='dg'
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} >
  
    <button  className="db" >
     <Link className='link' to ='https://www.nike.com/in/kids'>New</Link> 
    </button>


    {isDropdownOpen && (
      <div  className='sp' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <table>
       
        <tr>
            <th>Featured</th>
            <th>Clothing</th>
            <th>Shoes</th>
        </tr>
        <tr>
            <td>New Releases</td>
            <td>All Clothing</td>
            <td>All Shoes</td>
        </tr>
        <tr>
            <td>BestSellers</td>
            <td>Tops</td>
            <td>Newest Sneakers</td>
        </tr>
        <tr>
            <td>Member Exclusive</td>
            <td>Shorts</td>
            <td>Jordan</td>
        </tr>
        <tr>
            <td>Jordan</td>
            <td>Pants</td>
            <td>Lifestyle</td>
        </tr><tr>
            <td>Retro Running</td>
            <td>Hoodies</td>
            <td>Running</td>
        </tr><tr>
            <td>Customize with Nike By You</td>
            <td>Jackets</td>
            <td>Gym and Training</td>
        </tr>
        <tr>
            <td>Sale</td>
            <td>Jerseys</td>
            <td>BasketBall</td>
        </tr>
        <tr>
            <td>Running Shoe Finder</td>
            <td>Jordan</td>
            <td>Football</td>
        </tr>
        <tr>
            <td>Sustainable Materials</td>
            <td></td>
            <td>Sandals</td>
        </tr>
      </table>

     
      </div>
    )}
  </div>
  );
};

export default NewU;