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
      <section>
        <h1>Contact Us</h1>
        <form action="">
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Email">
            <textarea name="" placeholder="Message"></textarea>
            



        </form>
        <button>Send</button>
     </section>
     </div>
     
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
    background-image: url("/image 6 (2).png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 115vh;
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


form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    /* margin-top: -30px; */
}

h1 {
    font-weight: 700;
    font-size: 27px;
    color: #fff;
}

input {
    background: rgba(143, 143, 143, 0.42);
    padding-left: 10px;
    outline: none;
    width: 30rem;
    height: 4rem;
    color: #fff;
}

::placeholder {
    color: #fff;
}



textarea {
    background: rgba(143, 143, 143, 0.42);
    outline: none;
    width: 30rem;
    height: 12rem;
    padding-left: 6px;
    padding-top: 10px;
    color: #fff;

}

section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}


button {
    width: 30rem;
    height: 3rem;
    border: none;
    color: #fff;
    background: #1E9658; 
}
</style>