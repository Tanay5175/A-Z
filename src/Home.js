 import React from 'react'
 import "./Home.css";
 import Product from './Product';
 
 function Home() {
     return (
         <div className="home">
             <div className="home__container">
                 <img 
                   className="home__image"
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Smx45pGpIC_MdofbCtG03-kgpt0JqsJg4A&usqp=CAU"
                   //src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                   alt=""
                />

                <div className="home__row">
                <Product 
                  id="431546813"
                  title="The Forgotten Daughter by Renita D'Silva"
                  price={177}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71pGj5IhK7L._AC_UY218_.jpg"
                />
                <Product 
                  id="9843503"
                  title="Harry Potter and the Cursed Child - Parts One and Two: The Official Playscript of the Original West End Production"
                  price={272}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71T4MvA3RcL._AC_UY218_.jpg"
                />
                <Product 
                  id="7816489123"
                  title="The Cosmic Power Within You: The Simple, Safe Way to Harness the Extraordinary Power Hidden in Every Individual "
                  price={599}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/71Uae82L1cL._AC_UY218_.jpg"
                />
                <Product 
                  id="7518643"
                  title="
                  Asia Reborn: A Continent Rises from the Ravages of Colonialism and War to a New Dynamism by Prasenjit K.Basu"
                  price={1356}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/617Y+42dAhL._AC_UY218_.jpg"
                /> 
                </div>

                <div className="home__row">
                  
                   <Product 
                      id="12321341"
                      title="HP Pavilion Gaming 15.6-inch FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black), 15-ec1024AX"
                      price={59990}
                      image="https://m.media-amazon.com/images/I/71FeUtw+TPL._AC_UY218_.jpg"
                      rating={5}
                    />
                    
                    <Product 
                      id="49538094"
                      title="Dell XPS 7390 13.3-inch (33.78 cms) FHD Thin & Light Laptop (10th Gen Core i5-10210U/8GB/512GB SSD/Win 10 + MS Office/Integrated Graphics) White"
                      price={103499}
                      rating={4}
                      image="https://m.media-amazon.com/images/I/51zAtqa+rBL._AC_UY218_.jpg"
                    />

                    <Product 
                      id="25479615"
                      title="HP 15 (2021) Thin & Light Ryzen 3-3250 Laptop, 8 GB RAM, 1TB HDD, 39.62 cms (15.6) FHD Screen, Windows 10, MS Office (15s-gr0011AU)"
                      price={36499}
                      rating={4}
                      image="https://m.media-amazon.com/images/I/41mQtYQUzmL._AC_UY218_.jpg"
                    />              
                </div>

                <div className="home__row">
                <Product 
                  id="4903850"
                  title="Redmi Note 10S (Deep Sea Blue, 6GB RAM, 128GB Storage) - Super Amoled Display | 64 MP Quad Camera"
                  price={15999}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/717Ba2P51FS._AC_UY218_.jpg"
                />
                <Product 
                  id="23445930"
                  title="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 128GB Storage, 3800mAH Battery)"
                  price={38000}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UL320_.jpg"
                />
                <Product 
                  id="3254354345"
                  title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                  price={26000}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
                <Product 
                  id="57864316"
                  title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)"
                  price={48000}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UY218_.jpg"
                /> 
                </div>

                <div className="home__row">
                <Product 
                  id="90829332"
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                  price={58000}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
                <Product 
                  id="7554311"
                  title="AmazonBasics 127cm (50 inches) Fire TV Edition 4K Ultra HD Smart LED TV AB50U20PS (Black)"
                  price={35000}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/61QLVYZGyFS._AC_UY218_.jpg"
                />
                </div> 
             </div>
         </div>
     )
 }
 
 export default Home
 