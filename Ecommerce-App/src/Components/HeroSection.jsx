import React from 'react'

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className='hero-detail'>
                <div className="hero-img">
                    <span className='hero-title'>
                        <span className='hero-head'>
                          <h1>Clothes are The Spirit Of Fashion</h1>
                            <p>Buying and Selling of Goods or Service using the Internet</p>
                        </span>
                        <div className='hero-button'>
                           <span className='button'>
                            <a className='shop' href="">Start Shopping</a>
                            <a href=""><img src="src/assets/right-arrow.png" height="20px" /></a>
                           </span>
                        </div>
                    </span>
                </div>
                <img className='hero-img1' src="src/assets/fun-3d-cartoon-casual-character-removebg-preview.png"/>
            </div>
        </div>
    )
}

export default HeroSection
