<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router';
import { useMenuStore } from '@/stores/menu';


const menuStore = useMenuStore();

// import {VueImageSlider} fronpmm '.../node_modules/vue-image-slider'
</script>

<template>
  <main>
    <div class="background">
      <div class="nav-bar">
        <div class="logo">
          <img src="/Rune Deserts (1).png" alt="">
        </div>
        
        <div class="link">
          <RouterLink class="ink" to="/"></RouterLink>
          <RouterLink class="ink" to="/">Home</RouterLink>
          <RouterLink class="ink" to="/about">About</RouterLink>
          <RouterLink class="ink" to="/menu">Menu</RouterLink>
          <RouterLink class="ink" to="/blog">Blog</RouterLink>
        </div>
      
        <div class="nav-right">
          <RouterLink class="ink" to="/contact">Contact Us</RouterLink>
         <RouterLink to="/cart"><img src="/Frame.png" alt=""></RouterLink> 

        </div>
       
    <div class="hamburger-men">
    <span class="hamburger" @click="menuStore.toggleMenu"></span>
    <span class="hamburger" @click="menuStore.toggleMenu"></span>
    <span class="hamburger" @click="menuStore.toggleMenu"></span>
   
    <div class="menu-content" :class="{'menu-open': menuStore.isOpen }" >
      <div class="link">
        <RouterLink to="/"></RouterLink>
        <router-link class="ink" to="/">Home</router-link>
        <router-link class="ink" to="/about">About</router-link>
        <router-link class="ink" to="/menu">Menu</router-link>
        <RouterLink class="ink" to="/blog">Blog</RouterLink>
        <RouterLink class="ink" to="/contact">Contact Us</RouterLink>
      </div>
    </div>
  </div>
      </div>
      <div class="hero">
        <h1 id="header1">Indulge In The Delicacies Of African Desserts</h1>
        <p id="subHeader">Sweeten Your Life With Our African Delicacies</p>
        <button>Order Now</button>
      </div>
    </div>
    <TheWelcome />
    <div class="color">
      <p id="title">Rune, Established in 2019 is a family owned, African dessert company. we are known for flavorful, real taste products, that conveys a sense of excitement and let you feel the taste of home.</p>
    </div>

    <section>
      <div class="foodheader">
        <p>OUR PRODUCTS</p>

      </div>
      <div class="desert1">
        <div class="desert-info">
        <img src="/Rectangle 4.png" alt="">
        <p style="margin-left: 130px;">Waina</p>
      </div>

      <div class="desert-info">
        <img src="/Rectangle 5 (2).png" alt="">
        <p>Scented Poached Paw-paw</p>
      </div>

      <div class="desert-info">
        <img src="/Rectangle 6.png" alt="">
        <p>Beans & Plantain Waffles</p>
      </div>

       <div class="desert-info">
        <img src="/Rectangle 8.png" alt="">
        <p>Chocolate malva pudding</p>
      </div>

      <div class="desert-info">
        <img src="/Rectangle 9.png" alt="">
        <p>Peanut Butter Cookies</p>
      </div>

      <div class="desert-info">
        <img src="/Rectangle 7.png" alt="">
        <p>Vanilla Pancake</p>
      </div>

  
      </div>

      <div class="special-info">
        <p>This Week Special Dessert</p>
      </div>

      <div class="special">
        <div class="special-food">
          <img src="/Rectangle 11.png" alt="">
          <p>Puff Puff</p>
        </div>

        <div class="special-food">
          <img src="/Rectangle 10.png" alt="">
           <p>Triffle</p>
        </div>

      </div>



      <div class="popular-info">
        <p>This Week Special Dessert</p>
      </div>

      <div class="popular">
        <div class="popular-food">
          <img src="/Rectangle 20 (1).png" alt="">
          <p>Beju</p>
        </div>

        <div class="popular-food">
          <img src="/Rectangle 21 (1).png" alt="">
           <p>Hot Cross buns</p>
        </div>

        <div class="popular-food">
          <img src="/Rectangle 22 (1).png" alt="">
           <p>Shuku shuku</p>
        </div>

      </div>

      <div class="place-order">
        <div class="order">
          <h1>Place an order and get your dessert delivered to your doorstep.</h1>
          <p>Get in touch with us today and experience dessert done right!</p>
          <button>Order Now</button>

        </div>
        
          <img src="/Rectangle 23.png" alt="">
        

      </div>


      <div class="opening">
        <img src="/Rectangle 16.png" alt="">
        <h1>Opening Hours</h1>
        <div class="abs">
        <div class="time">
          <div class="days">
          <p>Monday - Thursday</p>
          <span>10AM - 9PM</span>
        </div>
        <div class="days">
          <p>Friday</p>
          <span>10AM - 9PM</span>
        </div>
        <div class="days">
          <p>Saturday</p>
          <span>10AM - 12AM</span>
        </div>
        <div class="days">
          <p>Sunday</p>
          <span>10AM - 11PM</span>
        </div>

        </div>
        
      </div>
      </div>

    </section>
    
    <footer>
      <div class="foot">
        <span>Menu</span>
        <a href="">How to order</a>
        <a href="">Where we deliver</a>
        <a href="">FAQs</a>
        <a href="">Contact</a>
      </div>
      <div class="foot">
        <span>About</span>
        <a href="">Why Rune?</a>
        <a href="">Where we deliver</a>
        <a href="">FAQs</a>
     
      </div>
      <div class="foot">
        <span>Contact us</span>
        <a class="address" href="">30 Kakawa St, Victoria Island, Lagos, Nigeria.</a>
        <a class="no" href="">+234  9 108 6019</a>
        <a class="site" href="">www.runeNg.com</a>
        
      </div>
      <div class="foot">
        <span>Follow Us</span>
        <div class="media">
        <img src="/Frame (4).png" alt="">
        <img src="/Frame (5).png" alt="">
        <img src="/Frame (6).png" alt="">
        <img src="/Frame (7).png" alt="">
      </div>
      </div>
    </footer>

    <div>
   

    <button class="scroll-to-top" @click="scrollToTop" v-show="showScrollButton">
      Scroll to Top
    </button>
    </div>
    
   
  </main>
</template>

<script>

// haburger menu drop down
export default {


    // data() {
    //     return {
    //         isMenuOpen: false
    //     };
    // },
    // methods: {
    //     toggleMenu() {
    //         this.isMenuOpen = !this.isMenuOpen;
    //     }
    // },
    // components: { RouterLink },
         
    




  // scroll to top
 

  data() {
    return {
      showScrollButton: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showScrollButton = window.scrollY > 100; // Adjust the scroll threshold as needed
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
  
};







    
  

</script>
<style scooped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

* {
  text-decoration: none;
  color:  #000;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 13px;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;

}


.logo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin-top: 50px; */

}

.link {
  display: flex;
  justify-self: center;
  align-items: center;
  gap: 40px;
}

.link .ink {
  font-size: 16px;
}




.background {
  background-image: url("/image 4.png");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

}

.nav-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 10px;
  padding: 20px;

}



.nav-right {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.nav-right img {
  width: 14px;
  height: 14px;
}

.nav-right .ink {
  text-decoration: none;
  color: #000;
  font-size: 10px;
  font-weight: 700;
}

.link .ink {
  text-decoration: none;
  color: #000;
  font-size: 11px;
  font-weight: 700;

} 

.hamburger-men {
  display: none;
}
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 160px;
}


#header1 {
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  width: 600px;
  text-align: center;

}

#subHeader {
  font-weight: 400;
  font-size: 18px;
  color: #fff;

}

.hero button {
  background: #1E9658;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  border: none;
  width: 120px;
  height: 40px;
}

.color {
  background: #1E9658;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  
}

#title {
  color: #fff;
  font-size: 12px;
  width: 669px;
  text-align: center;
}

.foodheader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40PX;
}

.foodheader P {
  color: #1E9658;
  font-size: 33px;
  font-weight: 700;
}

.desert1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  padding-top: 60px;
  
}
.desert1 .desert-info{
  width: 256px;
}
.desert1 img {
  width: 250px;
  height: 210px;
 
}

.desert-info p {
  position: absolute;
  margin-top: -50px;
  margin-left: 28px;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
}

.special {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.special-info {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}

.special-info p {
  color: #1E9658;
  font-size: 33px;
  font-weight: 700;
}

.special .special-food {
  width: 400px;
}

.special-food img {
  width: 400px;
  height: 300px;
}


.special-food p {
  position: absolute;
  margin-top: -50px;
  margin-left: 200px;
  color: #fff;
  font-weight: 700;
  font-size: 23px;
}


.popular {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.popular-info {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}

.popular-info p {
  color: #1E9658;
  font-size: 33px;
  font-weight: 700;
}

.popular .popular-food {
  width: 256px;
}

.popular-food img {
  width: 250px;
  height: 250px;
}


.popular-food p {
  position: absolute;
  margin-top: -50px;
  margin-left: 60px;
  color: #fff;
  font-weight: 700;
  font-size: 23px;
}

.place-order {
  display: flex;
  justify-content: center;
  align-items: center;
}


.order {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
}

.order p {
  font-weight: 700;
  font-size: 19px;
  width: 300px;
}


.order h1 {
  color: #1E9658;
  font-size: 43px;
  font-weight: 700;
  width: 500px;
}

.order button {
  width: 180px;
  height: 40px;
  background: #1E9658;
  color: #fff;
  border: none;
}

.place-order img {
  width: 300px;
  height: 300px;
}
.opening {
  padding-top: 50px;
}
.opening img {
  width: 94%;
  margin-left: 30px;
} 

.opening h1 {
  position: absolute;
  margin-top: -330px;
  margin-left: 380px;
  font-size: 43px;
  font-weight: 700;
  color: #fff;

}

.time {
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  margin-right: 110px;
  
}
.hours {
  display: flex;
  justify-content: center;
  gap: 130px;
  align-items: center;
}
.days {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 17px;
}


.days span {
  color: #fff;
  font-size: 14px;

}

.time p {
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  
}


.abs {
  position: absolute;
  margin-top: -270px;
  margin-left: 160px;

}

footer {
  display: flex;
  justify-content: center;
  align-items: start;
   gap: 40px;
  padding-top: 160px;
  padding-bottom: 90px;
}

.foot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px;
  width: 13rem;
}

.foot a {
  color: rgba(30, 30, 30, 0.60);
  font-size: 13px;
  width: 164px;
}

.address:before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (1).png") no-repeat;
  left: 438px;
 width: 21px;
  height: 21px;
  z-index: 30;
}
.no:before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (2).png") no-repeat;
  left: 438px;
  width: 21px;
  height: 21px;
  z-index: 30;
}

.site::before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (3).png") no-repeat;
  left: 438px;
 width: 21px;
  height: 21px;
  z-index: 30;
}
.foot span {
  color: rgba(30, 30, 30, 0.80);
  font-size: 18px;
  font-family: DM Sans;
  font-weight: 700;
  padding-bottom: 20px;
  
}

.media {
  display: flex;
  gap: 10px;
}

.media img {
  width: 15px;
  height: 15px;
}



.scroll-to-top {
 
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: #1E9658;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
}

.scroll-to-top:hover {
  background-color: #333;
}




@media screen and (max-width: 500px) {

  html {
    width: 75rem;

  }
  body {
    width: 300vw;
    overflow-x: hidden;
    
  }
  main {
    width: 300vw;
    overflow: hidden;
   
  }
  .link {
    display: none;
  }

  .nav-right {
    display: none;
  }

  .logo img {
    width: 450px;
    height: 80px;
}

.background {
  background-size: cover;
  width: 300vw;
  height: 90rem;
}

  .nav-bar {
    display: flex;
    padding-bottom: 40px;
    height: 15rem;
    justify-content: space-between;
   padding: 40px;
   width: 300vw;
  }
  .hamburger-men {
  display: flex;
  flex-direction: column;
  gap: 19px;
  cursor: pointer;
}

.hamburger-men .hamburger {
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 4px;
  background-color: #000;
  position: relative;
  transition: background-color 0.3s ease-in-out;
}
/* 
.hamburger:before,
  .hamburger:after {
    content: '';
    display: flex;
    width: 90px;
    height: 6px;
    background-color: #000;
    border-radius: 2px;
    transition: transform 0.3s ease-in-out;
   
  } */
  
  .hamburger:before {
    transform: translateY(-8px);
  }
  
  .hamburger:after {
    transform: translateY(4px);
  }
  
  .hamburger-menu.open .hamburger {
    transform: rotate(-60deg);
  }
  
  .hamburger-menu.open .hamburger:before {
    transform: translateY(0) rotate(-60deg);
  }
  
  .hamburger-menu.open .hamburger:after {
    transform: translateY(0) rotate(-60deg);
    /* display: none; */
  }
.hamburger-men .menu-content {
  position: absolute;
  top: 130px;
  left: -1040px;
  margin: auto;
  inset: 16;
  width: 90rem;
  background-color: #fff;
  box-shadow: 4px 6px 6px 8px #f0eeee;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  z-index: 10;
}

.hamburger-men .menu-content.menu-open {
  max-height: 190rem;
  max-width: 240rem;
}


.menu-open {
  display: block;
}

.hamburger-men .link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 40px;
}

/* .hamburger-men .link router-link {
  color: #000;
  text-decoration: none;
  font-weight: 700;
  font-size: 60px;
  transition: color 0.3s ease-in-out;
} */

.menu-content {
  display: flex;
  flex-direction: column;
  height: 72rem;
  width: 160rem;
  
}


.link .ink {
  font-size: 7rem;
  border: 1px solid #a9a5a5;
  width: 80rem;

}


#header1 {
  font-size: 65px;
  font-weight: 700;
  color: #fff;
  width: 800px;
  text-align: center;

}

#subHeader {
  font-weight: 400;
  font-size: 38px;
  color: #fff;

}

.hero button {
  background: #1E9658;
  color: #fff;
  font-size: 49px;
  font-weight: 400;
  border: none;
  width: 400px;
  height: 140px;
}

  .color {
  background: #1E9658;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300vw;
  height: 50rem;
  padding: 30px;
  margin-top: 0px;
  
}

#title {
  color: #fff;
  font-size: 45px;
  width: 949px;
  font-weight: 400;
  text-align: center;
  line-height:60px;
}

  
.foodheader P {
  color: #1E9658;
  font-size: 69px;
  font-weight: 700;
}

  
.desert1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  width: 300vw;
  padding-top: 60px;
  
}


.desert1 .desert-info{
  width: 260vw;
}
.desert1 img {
  width: 260vw;
  height: 105vh;
 
}


.desert-info p {
  position: absolute;
  margin-top: -80px;
  margin-left: 68px;
  color: #fff;
  font-weight: 700;
  font-size: 58px
}
.special {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300vw;
  gap: 30px;
}
.special-info {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  width: 300vw;
}

.special-info p {
  color: #1E9658;
  font-size: 53px;
  font-weight: 700;
}

.special .special-food {
  width: 260vw;
}

.special-food img {
  width: 260vw;
  height: 105vh;
}


.special-food p {
  position: absolute;
  margin-top: -80px;
  margin-left: 200px;
  color: #fff;
  font-weight: 700;
  font-size: 58px;
}




.popular {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300vw;
  gap: 20px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.popular-info {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300vw;
  padding-top: 50px;
}

.popular-info p {
  color: #1E9658;
  font-size: 53px;
  font-weight: 700;
}

.popular .popular-food {
  width: 260vw;
}

.popular-food img {
  width: 260vw;
  height: 105vh;
}


.popular-food p {
  position: absolute;
  margin-top: -80px;
  margin-left: 100px;
  color: #fff;
  font-weight: 700;
  font-size: 48px;
}



.place-order {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width: 260vw; */
  gap: 30px;
  /* padding-left: 100px;
  margin-left: 160px; */
}


.order {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 260vw;
  gap: 20px;
 
}

.order p {
  font-weight: 700;
  font-size: 4rem;
  width: 70rem;
}


.order h1 {
  color: #1E9658;
  font-size: 9rem;
  font-weight: 700;
  width: 85rem;
}

.order button {
  width: 30rem;
  height: 9rem;
  background: #1E9658;
  color: #fff;
  border: none;
  font-size: 4rem;
}

.place-order img {
  width: 260vw;
  height: 115vh;
}
.opening {
  padding-top: 50px;
  width: 300vw;
  margin-left: 20px;
}
.opening img {
  width: 90%;
  height: 50rem;
  margin-left: 45px;
} 

.opening h1 {
  position: absolute;
  margin-top: -490px;
  margin-left: 260px;
  font-size: 43px;
  font-weight: 700;
  color: #fff;

}

.time {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-right: 10px;
  
}
.hours {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
}
.days {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 17px;
}


.days span {
  color: #fff;
  font-size: 26px;

}

.time p {
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  
}


.abs {
  position: absolute;
  margin-top: -410px;
  margin-left: 270px;

}


footer {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding-top: 160px;
  padding-left: 60px;
  gap: 30px;
  padding-bottom: 100px;
}

.foot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px;
}
 .foot a {
  color: rgba(30, 30, 30, 0.60);
  font-size: 39px;
  width: 280px;
} 

.address {
  width: 100px;
  color: rgba(30, 30, 30, 0.60);
  font-size: 39px;
  width: 280px;
}

.address:before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (1).png") no-repeat;
 left: -30px;
 margin-top: 15px;
  width: 95px;
  height: 95px;
  z-index: 20;
}
.no:before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (2).png") no-repeat;
  left: -30px;
  margin-top: 15px;
  width: 85rem;
  height: 85px;
  z-index: 20;
}

.site::before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (3).png") no-repeat;
 left: -30px;
 margin-top: 15px;
  width: 45px;
  height: 45px;
  z-index: 20;
}

.foot {
  display: flex;
  align-items: start;
  gap: 20px;
}

.foot span {
  color: rgba(30, 30, 30, 0.80);
  font-size: 44px;
  font-weight: 700;
  padding-bottom: 20px;
}
.media {
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 20px;
}

.media img {
  width: 50px;
  height: 50px;
}

.scroll-to-top {
  padding: 20px;
  font-size: 27px;
}




}
</style>


  


