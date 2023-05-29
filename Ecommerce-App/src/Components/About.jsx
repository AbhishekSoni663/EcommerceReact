import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const About = () => {
    return (
        <div className='about-cont'>
            <Box className="about-box" sx={{ width: '100%', maxWidth: 500 }}>
                <Typography className='about-h1' variant="h2" gutterBottom>
                Vimeo Store

                </Typography>
                <Typography className='about-h2' variant="h5" gutterBottom>
                    Discover Your Perfect Style: Men & Women's Clothing, Exquisite Jewelry, Cutting-Edge Electronics
                </Typography>
                <Typography className='about-h3' variant="body1" gutterBottom>
                    Welcome to our online store! We are a leading e-commerce website that specializes in offering a wide range of products including men and women's clothing, jewelry, electronics, and more. Our mission is to provide our customers with the best online shopping experience, making it convenient and enjoyable to find and purchase the items they need.

                    Our team of dedicated professionals works tirelessly to curate a diverse and trendy collection of products to cater to the diverse tastes and preferences of our customers. We believe in offering high-quality products at competitive prices, ensuring that our customers get the best value for their money.

                    At our online store, you can explore a wide range of options, from the latest fashion trends in men and women's clothing, including stylish apparel, footwear, and accessories, to stunning jewelry pieces that add a touch of elegance to any outfit. We also offer a wide selection of electronics, including gadgets, appliances, and accessories, to enhance your lifestyle and meet your technological needs.

                    We strive to provide excellent customer service, and our team is always ready to assist you with any inquiries or concerns you may have. We value our customers and aim to build long-term relationships based on trust and satisfaction.

                    Thank you for choosing us as your preferred online shopping destination. We look forward to serving you and providing you with a seamless and enjoyable shopping experience. Happy shopping!


                    We take pride in offering a diverse and curated collection of products in our eCommerce website's three sections. Our aim is to provide our customers with high-quality products, trendy styles, and exceptional customer service, making their online shopping experience convenient, enjoyable, and satisfying. Shop with us and discover the perfect products for your clothing, jewelry, and electronics needs!

                    <br/>
                    <br />


                    <strong className='ab-ac'>Abhishek Soni</strong>
                </Typography>
            </Box>
            <div class="accordion acc" id="accordionExample">
                <div class="accordion-item acc-it">
                    <h2 class="accordion-header acc-header">
                        <button class="accordion-button acc-bt" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Men and Women's Clothing:
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body acc-body">
                            <strong>Our men and women's clothing section offers an extensive range of fashionable and trendy apparel, footwear, and accessories for both genders. From casual wear to formal attire, we have a wide selection of clothing styles to suit different tastes, occasions, and seasons. Our collection includes a diverse range of options, such as stylish tops, bottoms, dresses, outerwear, activewear, swimwear, and more. We also offer a variety of sizes, including plus sizes, to cater to different body types. Our clothing collection is carefully curated to ensure high quality, comfort, and durability, and we source our products from reputable brands known for their craftsmanship and style.</strong>
                        </div>
                    </div>
                </div>
                <div class="accordion-item acc-it">
                    <h2 class="accordion-header acc-header">
                        <button class="accordion-button collapsed acc-bt" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Electronics:
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body acc-body">
                            <strong>Our electronics section offers a wide range of cutting-edge gadgets, appliances, and accessories to meet the technological needs of our customers. We provide the latest and most innovative products from renowned brands known for their quality and reliability. Our electronics collection includes smartphones, tablets, laptops, smartwatches, headphones, speakers, home appliances, gaming accessories, and more. We strive to offer a comprehensive selection of products that cater to different interests and requirements, from tech enthusiasts to everyday users. Our team thoroughly researches and tests each product to ensure that they meet our strict quality standards and provide excellent performance.

                                We take pride in offering a diverse and curated collection of products in our eCommerce website's three sections. Our aim is to provide our customers with high-quality products, trendy styles, and exceptional customer service, making their online shopping experience convenient, enjoyable, and satisfying. Shop with us and discover the perfect products for your clothing, jewelry, and electronics needs!</strong>
                        </div>
                    </div>
                </div>
                <div class="accordion-item acc-it">
                    <h2 class="accordion-header acc-header">
                        <button class="accordion-button collapsed acc-bt" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Jewelry:
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body acc-body">
                            <strong>Our jewelry section offers an exquisite array of jewelry pieces that are perfect for adding a touch of elegance and sophistication to any outfit. We offer a wide variety of options, including necklaces, earrings, bracelets, rings, and more, crafted from various materials such as precious metals, gemstones, pearls, and high-quality alloys. Our jewelry collection encompasses a diverse range of styles, from classic and timeless designs to modern and trendy pieces that cater to different tastes and preferences. Each piece of jewelry is carefully selected for its quality, craftsmanship, and aesthetic appeal, ensuring that our customers receive exceptional value.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
