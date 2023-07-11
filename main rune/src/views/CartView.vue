<script setup>
    import { RouterLink } from "vue-router";
    import { ref } from 'vue'
    import { useCounterStore } from '/src/stores/counter'
    // import { useMenuStore } from '@/stores/menu';

//  defineComponent({
//   setup() {
//     const menuStore = useMenuStore();
//     return {
//       menuStore,
//     };
//   },
// });
    const storeCounter = useCounterStore()
    // const menuStore = useMenuStore()

    // const count = ref(0)

    // const increaseCount = () => {
    //   console.log('increaseCount')
    //   count.value++
    // }

    // const decreaseCount = () => {
    //   console.log('decreaseCount')
    //   count.value--
    // }
</script>
<template>
   <main>
   
      <div class="nav-bar">
        <div class="logo">
          <img src="/Rune Deserts (1).png" alt="">
        </div>
        
        <div class="link">
            <RouterLink to="/"></RouterLink>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/menu">Menu</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
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
        <h1>My Cart List</h1>
        <div class="added">
          <img class="food" src="/Rectangle 11 (1).png" alt="">
          <div class="food-info">
            <h2>Bean Cake with sauce</h2>
            <h3>N3, 000 per pack</h3>
            <div class="regulate">
            <img  @click="storeCounter.decreaseCount" src="/Frame (13).png" alt="">
            <p>{{storeCounter.count}}</p>
            <img @click="storeCounter.increaseCount" src="/Frame (12).png" alt="">
            </div>
          </div>
          <img class="star" src="/Frame 79.png" alt="">
        </div>

        <div class="added">
          <img class="food" src="/Rectangle 7 (4).png" alt="">
          <div class="food-info">
            <h2>Bean Cake with sauce</h2>
            <h3>N3, 000 per pack</h3>
            <div class="regulate">
            <img  @click="storeCounter.decreaseCount" src="/Frame (13).png" alt="">
            <p>{{storeCounter.count}}</p>
            <img @click="storeCounter.increaseCount" src="/Frame (12).png" alt="">
            </div>
          </div>
          <img class="star" src="/Frame 79.png" alt="">
        </div>

        <div class="added">
          <img class="food" src="/image 7 (3).png" alt="">
          <div class="food-info">
            <h2>Bean Cake with sauce</h2>
            <h3>N3, 000 per pack</h3>
            <div class="regulate">
            <img src="/Frame (13).png" alt="">
            <p @click="menuStore.toggleMenu">0</p>
            <img src="/Frame (12).png" alt="">
            </div>
          </div>
          <img class="star" src="/Frame 79.png" alt="">
        </div>



        <div class="added">
          <img class="food" src="/image 6 (4).png" alt="">
          <div class="food-info">
            <h2>Bean Cake with sauce</h2>
            <h3>N3, 000 per pack</h3>
            <div class="regulate">
            <img src="/Frame (13).png" alt="">
            <p>0</p>
            <img src="/Frame (12).png" alt="">
            </div>
          </div>
          <img class="star" src="/Frame 79.png" alt="">
        </div>


      </section>

      <div class="checkout">
        <ul>
        <li>Sub Total</li>
        <li>N12, 500</li>
      </ul>
      <ul>
        <li>Delivery</li>
        <li>N1, 000</li>
      </ul>
        <span></span>
        <ul>
        <li>Total</li>
        <li>N13, 500</li>
      </ul>

      <button>Checkout <img src="/Frame (15).png" alt=""></button>

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

<!-- <script>



</script> -->


<style scoped>
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





.nav-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 10px;
  padding-bottom: 40px;
  padding-top: 30px;

}



.nav-right {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.nav-right .ink {
  font-size: 14px;
}

.nav-right a {
  text-decoration: none;
  color: #000;
  font-size: 19px;
  font-weight: 400;
}
.hamburger-men {
  display: none;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding-bottom: 80px;
  padding-top: 40px;
}


h1 {
  margin-right: 670px;
  font-size: 23px;
  font-weight: 700;
 
}
.added {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.food-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 290px;
}

.food-info h2 {
  font-size: 20px;
  font-weight: 700;
}

.food-info h3 {
  font-weight: 700;
}
.regulate {
  display: flex;
  justify-items: center;
  gap: 10px;
}

.added .food {
  width: 15rem;
  height: 15rem;
}

.added img {
  width: 1.7rem;
  height: 1.7rem;
}
.added .star {
  width: 5rem;
  height: 3rem;
  margin-top: -90px;
}
.checkout {
  background: #1E9658;
  width: 64rem;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 30px;
  gap: 30px;
 
}
.checkout span {
  width: 64rem;
  height: 1px;
  background: #fff;

}
 ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 50rem;
 
  gap: 190px;

}

li {
  color: #fff;
  font-size: 19px;
}

.checkout button {
  width: 15rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  gap: 6px;
  background: #fff;
  border: none;
}

.checkout img {
  height: 17px;
  width: 17px;
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


</style>