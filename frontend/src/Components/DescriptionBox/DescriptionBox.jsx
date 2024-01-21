import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is a digital platform that enables businesses and consumers to conduct commercial transactions over the internet. It serves as an online marketplace where products or services are displayed, and users can browse, select, and purchase items through electronic means. E-commerce websites facilitate the entire process of buying and selling, from product discovery to payment and order fulfillment, without the need for physical interaction.</p>
        <p>
          Key features of an e-commerce website include product listings with detailed information, shopping cart functionality for users to add items, a secure checkout process for payment, and order confirmation and tracking mechanisms. These websites often incorporate user accounts, allowing customers to manage their profiles, track orders, and store preferences for a personalized experience.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
