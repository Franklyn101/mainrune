<script setup>
    import { RouterLink } from "vue-router";
</script>
<template>
  <main>
  <div class="nav-bar">
        <div class="logo">
          <img src="/public/Rune Deserts (1).png" alt="">
        </div>
        <div class="link">
          <RouterLink class="ink" to="/"></RouterLink>
          <RouterLink class="ink" to="/">Home</RouterLink>
          <RouterLink class="ink" to="/about">About</RouterLink>
          <RouterLink class="ink" to="/menu">Menu</RouterLink>
          <RouterLink class="ink" to="/blog">Blog</RouterLink>
        </div>
        <div class="nav-right">
          <RouterLink class="ink" to="/">Contact Us</RouterLink>
          <RouterLink to="/cart"><img src="/Frame.png" alt=""></RouterLink> 


        </div>
        <div class="hamburger-men">
    <span class="hamburger" @click="toggleMenu"></span>
    <span class="hamburger" @click="toggleMenu"></span>
    <span class="hamburger" @click="toggleMenu"></span>
   
    <div class="menu-content" :class="{ 'menu-open': isMenuOpen }">
      <div class="link">
        <RouterLink to="/"></RouterLink>
        <router-link class="ink" to="/">Home</router-link>
        <router-link class="ink" to="/about">About</router-link>
        <router-link class="ink" to="/menu">Menu</router-link>
        <RouterLink class="ink" to="/contact">Contact Us</RouterLink>
      </div>
    </div>
  </div>
   
      </div>
      <section>
       
      <div class="about-info">
        <h1>About Us</h1>
        
        <p id="info">{{msg}}Rune, is an African dessert company that specializes in creating unique and delicious African - inspired desserts. Our mission is to provide delicious, authentic African desserts that bring the joy of African culture to our customers. Our recipes are crafted with the highest quality ingredients, and we strive to bring a unique and flavorful experience to every bite. whether you’re looking for something to satisfy your sweet tooth or you want to try something new, you’ve come to the right place. Let Rune take you on a delicious journey of flavors from around the world!</p>
      </div>
      <div class="background2">

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
    </main>
</template>

<script>
export default {

  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
 
      }

    
  

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
 /* .ink {
  font-size: 19px;
} */




.background {
  background-image: url("/public/image 4.png");
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
  height: 60px;

}

nav {
  display: flex;
  justify-self: center;
  align-items: center;
  gap: 40px;
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

.about-info {
  background: #1E9658;
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.about-info h1 {
  color: #fff;
  font-weight: 700;
  font-size: 38px;

}

#info {
  color: #fff;
  width: 748px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
}
.background2 {
  background-image: url('/public/Rectangle 19.png');
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;


}

.address:before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (1).png") no-repeat;
 left: -30px;
  width: 35px;
  height: 35px;
  z-index: 20;
}
.no:before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (2).png") no-repeat;
 left: -30px;
  width: 35px;
  height: 35px;
  z-index: 20;
}

.site::before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (3).png") no-repeat;
 left: 448px;
  width: 35px;
  height: 35px;
  z-index: 20;
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
 left: 448px;
  width: 21px;
  height: 21px;
  z-index: 20;
}
.no:before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (2).png") no-repeat;
 left: 448px;
  width: 21px;
  height: 21px;
  z-index: 20;
}

.site::before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (3).png") no-repeat;
 left: 448px;
  width: 21px;
  height: 21px;
  z-index: 20;
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








@media screen and (max-width: 500px) {

  body {
    /* overflow: hidden; */
    width: 300vw;
  }
  * {
    margin: 0;
    padding: 0;
    
  }
  main {
    
    width: 300vw;
   
  }

  

.background {
  background-image: url("/public/image 4.png");
  width: 300vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

}

  .link {
    display: none;
  }

  .nav-right {
    display: none;
  }

  .logo img {
    width: 250px;
    height: 80px;
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
/* }
.hamburger:before,
  .hamburger:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
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
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  z-index: 10;
}

.hamburger-men .menu-content.menu-open {
  max-height: 220rem;
  max-width: 200rem;
}

.hamburger-men .link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.hamburger-men .link router-link {
  color: #000;
  text-decoration: none;
  font-weight: 700;
  font-size: 90px;
  transition: color 0.3s ease-in-out;
}

.menu-content {
  display: flex;
  flex-direction: column;
  height: 90rem;
  width: 160rem;
  
}


.link .ink {
  font-size: 60px;

}

.about-info {
  height: 80rem;
  /* padding: 60px; */
}



.about-info h1 {
  color: #fff;
  font-weight: 700;
  font-size: 7rem;


}

#info {
  color: #fff;
  width: 1448px;
  font-weight: 400;
  font-size: 4rem;
  text-align: center;
}

footer {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
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
  margin-left: 100px;
}

.foot a {
  color: rgba(30, 30, 30, 0.60);
  font-size: 58px;
  width: 164px;
}

.address:before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (1).png") no-repeat;
 left: -30px;
  width: 21px;
  height: 21px;
  z-index: 20;
}
.no:before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (2).png") no-repeat;
 left: -30px;
  width: 21px;
  height: 21px;
  z-index: 20;
}

.site::before {
  content: "";
  position: absolute;
  display: block;
  background: url("/Frame (3).png") no-repeat;
 left: -30px;
  width: 21px;
  height: 21px;
  z-index: 20;
}
.foot span {
  color: rgba(30, 30, 30, 0.80);
  font-size: 60px;
  font-weight: 700;
  padding-bottom: 20px;
  
}

.media {
  display: flex;
  gap: 10px;
}

.media img {
  width: 25px;
  height: 25px;
}
}


</style>
