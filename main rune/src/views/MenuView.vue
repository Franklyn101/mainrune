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
            <RouterLink to="/"></RouterLink>
          <RouterLink class="ink" to="/">Home</RouterLink>
          <RouterLink class="ink" to="/about">About</RouterLink>
          <RouterLink class="ink" to="/menu">Menu</RouterLink>
          <RouterLink class="ink" to="/blog">Blog</RouterLink>
        </div>
        <div class="nav-right">
          <RouterLink class="ink" to="/">Contact Us</RouterLink>
          <RouterLink to="/cart"><img src="/Frame.png" alt=""></RouterLink> 


        </div>
      </div>


       <section>
        <h1>Dessert Menu</h1>
       
        <p class="title">Special menu</p>
        <div class="desert2">
        <div class="desert-info2">
        <img src="/image 5.png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

      <div class="desert-info2">
        <img src="/image 6.png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

      <div class="desert-info2">
        <img src="/Rectangle 6 (1).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

       <div class="desert-info2">
        <img src="/Rectangle 7 (1).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

      <div class="desert-info2">
        <img src="/Rectangle 8 (1).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

      <div class="desert-info2">
        <img src="/Rectangle 9 (1).png" alt="">
        
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

  
      </div>




        <!-- appetizers -->
      
      <p class="title">Appetizers</p>
        <div class="desert2">
        <div class="desert-info2">
        <img src="/image 5 (1).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

      <div class="desert-info2">
        <img src="/Rectangle 8.png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

    

      <div class="desert-info2">
        <img src="/Rectangle 6 (2).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

       <div class="desert-info2">
        <img src="/Rectangle 7 (2).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <!-- <button>View Product</button> -->
        <RouterLink class="viewcart" to="/product">View Product</RouterLink>
      </div>
      </div>

      <div class="desert-info2">
        <img src="/Rectangle 8 (2).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

      <div class="desert-info2">
        <img src="/Rectangle 9 (2).png" alt="">
        
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

  
      </div>




      <!-- vegan -->
      <p class="title">Vegan Desserts</p>
        <div class="desert2">
        <div class="desert-info2">
        <img src="/image 5 (2).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

      <div class="desert-info2">
        <img src="/image 6 (1).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

    

      <div class="desert-info2">
        <img src="/Rectangle 6 (3).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

       <div class="desert-info2">
        <img src="/Rectangle 7 (3).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

      <div class="desert-info2">
        <img src="/Rectangle 8 (3).png" alt="">
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
      </div>
      </div>

      <div class="desert-info2">
        <img src="/Rectangle 9 (3).png" alt="">
        
        <div class="products">
        <p>Peanut Butter Cookies</p>
        <button>View Product</button>
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
</main>

</template>
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



.link {
  display: flex;
  justify-self: center;
  align-items: center;
  gap: 40px;
}




.background {
  background-image: url("/public/image 4.png");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 60px;
  padding-left:40px;
  padding-right: 40px;

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

h1 {
  font-size: 30px;
  color: #1E9658;
  font-weight: 700;
  margin-left: 40px;
  padding-bottom: 60px;
  padding-top: 50px;
}

 .title {
  font-size: 24px;
  position: absolute;
 margin-left: 24px;
  margin-top: 25px;
  font-weight: 700;
}



.desert2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  padding-top: 60px;
  
}
.desert2 .desert-info{
  width: 306px;
}
.desert2 img {
  width: 270px;
  height: 260px;
 
}

.products {
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  
}

.products p {
  color: #1E9658;

  font-weight: 400;
  font-size: 13px;
}

.products p::before {
  content: "N4, 000";
  position: absolute;
  color: #000;
  margin-top: 20px;
  width: 80px;
  margin-right: 100px;
  font-weight: 700;
  font-size: 17px;

}


.products button {
  background: #1E9658;
  width: 120px;
  height: 40px;
  border: none;
  color: #fff;
}

.viewcart {
  background: #1E9658;
  width: 120px;
  height: 40px;
  border: none;
  color: #fff;
  padding-top: 10px;
  text-align: center;
}




footer {
  display: flex;
  justify-content: center;
  align-items: start;

  padding-top: 160px;
  padding-bottom: 90px;
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
  font-size: 17px;
  width: 280px;
}

.foot span {
  color: rgba(30, 30, 30, 0.80);
  font-size: 24px;
  font-family: DM Sans;
  font-weight: 700;
  padding-bottom: 20px;
}


</style>