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


     <div class="first-pro">
      <img src="/Rectangle 7 (4).png" alt="">
      <div class="pro-info">
        <h1>Bean Cake</h1>
        <p>Bite into the fluffy, sweet Bean Cake(Akara), and savor the amazing flavor it delivers.</p>
        <h2>N3000 per pack</h2>
         <div class="pro">
        <div class="reg">
          <h3>packs</h3>
          <div class="regulate">
            <img src="/Frame (13).png" alt="">
            <h4>0</h4>
            <img src="/Frame (12).png" alt="">
          </div>
        </div>
        <div class="btns">
          <button class="adbtn">Add to cart</button>
          <button class="bybtn">Buy Now</button>
        </div>
      </div>

      </div>

     </div>
     <section>
      <div class="more products">
        <img src="/image 7 (3).png" alt="">
        <div>
          <div>

          </div>
          <button>Add to cart</button>
        </div>
      </div>



      <div class="more products">
        <img src="/image 6 (4).png" alt="">
        <div>
          <div>

          </div>
          <button>Add to cart</button>
        </div>
      </div>



      <div class="more products">
        <img src="/Rectangle 7 (4).png" alt="">
        <div>
          <div>

          </div>
          <button>Add to cart</button>
        </div>
      </div>
     </section>

     </main>
</template>


<style scoped>

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

.first-pro {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 90px;
}

.first-pro img {
  width: 30rem;
  height: 27rem;
}

.pro-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.pro-info h1 {
  font-weight: 700;
  font-size: 30px;
}

.first-pro p {
  font-weight: 400;
  font-size:17px;
  width: 279px;
  line-height: 29px;
}


.pro-info h2 {
  font-size: 19px;
  font-weight: 700;
}



.pro {
  display: flex;
  align-items: start;
  gap: 20px;
  
}

.reg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -9px;
  gap: 6px;
}


  .regulate {
     display: flex;
     align-items: center;
     gap: 10px;
  }


  .regulate img {
  width: 1.7rem;
  height: 1.7rem;
  }

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .btns .adbtn {
    width: 9rem;
    height: 2.7rem;
    border: 1px solid #1E9658;
    color: #1E9658;
    background: transparent;
  }


  .btns .bybtn {
    width: 9rem;
    height: 2.7rem;
    background: #1E9658;
    color: #fff;
    border: none;
   
  }

  section {
    display: flex;
    gap: 20px;
    padding-left: 20px;
  }

</style>