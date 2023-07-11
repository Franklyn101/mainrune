<script setup>
    import { RouterLink } from "vue-router";
</script>
<template>
    <main>
    <div class="background">
      <div class="nav-bar">
        <div class="logo">
          <img src="/Rune Deserts (1).png" alt="">
        </div>
        
        <div class="link">
            <RouterLink to="/"></RouterLink>
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

      <div class="tips">
        <div>
          <h1>Top tips on how to 
            prepare Coconut Candy</h1>

            <p>Coconut candy is very easy to prepare if 
                  you do not mind the process of 
                  grating the coconut</p>

        </div>
        <div class="profile">
        <div class="pic">
        <img src="/Ellipse 1.png" alt="">
        <p>Louisa Moje <span>Sept 17, 2022</span></p>
      </div>

        <div class="likes">
          <img src="/Frame (10).png" alt="">
          <img src="/bookmark-regular-24.png" alt="">
        </div>

      </div>
    </div>
    </div>
    <div class="news">
      <label for=""> Newsletter</label>
      <div class="input">
      <input type="text" placeholder="Email">
      <button>Submit</button>
    </div>

    </div>
    <section>
      <div class="recipe1">
        <img class="recipe1-img" src="/image 5 (3).png" alt="">
        <h2>May  20, 2023</h2>
        <h1>How to make Egusi Brittle</h1>
        <p>Egusi is also known as melon seeds and is typically toasted, blended and used to make soups and desserts. An example...</p>
         <button>Read more <img src="/Frame (11).png" alt=""></button>
      </div>

      <div class="recipe">
        <img class="recipe-img" src="/image 6 (3).png" alt="">
        <h2>May 12, 2023</h2>
        <h1>Plantain Pancake Recipe</h1>
        <p>Ripe plantains are a starchy and sweet vegetable which can be used in savory or sweet dishes, so we thought it was the perfect main ingredient for our...</p>
        <button>Read more <img src="/Frame (11).png" alt=""></button>

      </div>

      <div class="recipe">
        <img class="recipe-img" src="/Rectangle 6 (4).png" alt="">
        <h2>April 27, 2023</h2>
        <h1>Semolina Puff Puff in 15 Mins</h1>
        <p>Semolina puff puff is made from semo flour, which is stickier than normal flour, and that is what makes it work better.. It reacts with yeast very fast and the dough... </p>
        <button>Read more <img src="/Frame (11).png" alt=""></button>

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

// haburger menu drop down
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
    components: { RouterLink },
         
    
}
</script>


<style scoped>
.background {
    background-image: url("/Rectangle 23 (1).png");
    background-repeat: no-repeat;
    height: 100vh;
    background-size: cover;
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


.tips {
    width: 25rem;
    height: 20rem;
    background: #fff;
    margin-top: 30px;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    padding-left: 20px;
    gap: 30px;
    margin-top: 100px;
}

.tips h1 {
  font-size: 20px;
  width: 270px;
  padding-bottom: 10px;
}

.tips p {
  font-size: 12px;
  font-weight: 400;
  width: 240px;
  color: rgba(0, 0, 0, 0.82);
}

.profile {
  display: flex;
  align-items: center;
  gap: 30px;
}

.pic {
  display: flex;
  align-items: center;
  gap: 20px;
}

.pic span {
  font-size: 11px;
  font-weight: 400;
}

.pic img {
  width: 40px;
  height: 40px;
}

.pic p {
  width: 100px;
  font-weight: 700;
}

.likes {
  display: flex;
  align-items: center;
  gap: 10px;
}

.likes img {
  width: 40px;
  height: 40px;
  background: rgba(217, 217, 217, 0.24);
  border-radius: 50%;
  padding: 10px;

}

label {
  color: #fff;
  font-weight: 700;
  font-size: 18px;
}

.news {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-left: 40px;
  background: #1E9658;
  width: 55rem;
  height: 5rem;
  padding-left: 10px;
  padding-right: 10px;
}

input {
  width: 10rem;
  height: 3rem;
  padding-left: 4px;
  outline: none;
}

button {
  width: 5rem;
  height: 3rem;
 color: #fff;
 background: #2D2D2D;
 border: none;
}

::placeholder {
  color: #1E9658;
  font-weight: 700;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-left: 30px;
  padding-right: 30px;
  

}
.recipe1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60rem;
  height: 50rem;
  /* margin-top: -16px; */
  gap: 10px;
}

.recipe1-img {
  width: 21rem;
  height: 20.9rem;
}

.recipe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60rem;
  height: 50rem;
  gap: 10px;

}

.recipe-img {
  width: 21rem;
  height: 21rem;
}

.recipe button {
  width: 90px;
  font-size: 10px;
  height: 30px;
  background-color: #1E9658;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:3px;
  margin-left: 180px;
}

.recipe p {
  font-size: 10px;
  font-weight: 700;
  width: 279px;
}

.recipe1 button {
  width: 90px;
  font-size: 10px;
  height: 30px;
  background-color: #1E9658;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:3px;
  margin-left: 180px
}
img {
  width: 1rem;
  height: 1rem;
}
.recipe1 p {
  font-size: 10px;
  font-weight: 700;
  width: 279px;
}

.recipe h1 {
  font-weight: 700;
}

.recipe h2 {
  font-weight: 700;
  font-size: 10px;
}


.recipe1 h1 {
  font-weight: 700;
}

.recipe1 h2 {
  font-weight: 700;
  font-size: 10px;
}








</style>


