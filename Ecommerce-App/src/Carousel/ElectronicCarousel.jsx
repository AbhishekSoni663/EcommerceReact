import React from 'react'
import '../Elec.css'
const ElectronicCarousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="src/assets/blocks-01voTCIdeWw-unsplash.jpg" class="d-block" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>iPhone 9</h5>
            <p>An apple mobile which is nothing like apple</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/src/assets/dmitry-chernyshov-mP7aPSUm7aE-unsplash.jpg" class="d-block" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>MacBook Pro</h5>
            <p>MacBook Pro 2021 with mini-LED display may launch between September, November</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="src/assets/anh-nhat-5tYI4uvnoJk-unsplash.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>OPPOF19</h5>
            <p>OPPO F19 is officially announced on April 2021.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="src/assets/blocks-TkEPQPWr2sY-unsplash.jpg" class="d-block" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>HP Pavilion 15-DK1056WM</h5>
            <p>HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElectronicCarousel
