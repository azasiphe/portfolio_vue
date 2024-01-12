
            
<template>
  <div class="about">
    <h1>Contact Me</h1>
  </div>
  <div class="all">
    <div id="container-12">
      <form
        class="form-co"
        action="https://formspree.io/f/xyyqrzaa"
        method="POST"
      >
      <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name:</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name">
              </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Massage:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="massage..."></textarea>
              </div>
        <button onclick="button()">Send</button>
      </form>
      <div class="location">
        <h2>  <i class="fas fa-map-marker-alt"></i>MY LOCATION</h2><p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.6757989776283!2d18.671636400000004!3d-34.0521865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc491929a7ba73%3A0xe1ef8594c9045bfd!2sChasa%20Cl%2C%20Harare%2C%20Cape%20Town%2C%207784!5e0!3m2!1sen!2sza!4v1705069993882!5m2!1sen!2sza" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p></div>
      <div class="col">
        
        <p class="pa"> <i class="fas fa-phone"></i> Phone: 083 389 3284</p>
        <p class="pa"> <i class="fab fa-github"></i> Github: Azasiphe Ndoro</p>
        
        <p class="pa">
          <i class="fab fa-linkedin"></i> LinkedIn: Azasiphe Ndoro
        </p>
        <p class="pa"><i class="far fa-envelope"></i> Email: azasiphendoro@gmail.com</p>
       
      </div>
      
      <div v-if="loading" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
   
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
}
 </script>
<style>


  #container-12 {
    background-color: black;
    align-items: center;
    justify-content: center;
    padding: 50px;
    border: 7px solid red;
    border-radius: 50px;
    display: flex; 
    flex-wrap: wrap; 
  }

  button {
    background-color: black;
    margin-top: 50px;
   
    padding: 25px;
    border: 3px solid red;
    color: white;
    border-radius: 24px;
  }

  .form-co {
    text-align:left;
    border: 10px solid red;
    padding: 50px;
    flex: 1; 
    margin-right: 20px; 
  }

  .col {
    flex: 1; 
  }
.location{
  border: 4px solid red;
  text-decoration: underline 2PX SOLID white;
}
  .about {
    text-align: center;
    text-decoration: underline 8px solid black;
    background-color: red;
    padding: 15px;
    color: black;
  }

  .all {
    background-color: black;
  }

  .pa {
    color: white;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    margin-left: 70px;
  }

  .pa i {
    margin-right:10px;}
    .spinner {
  margin-top: 30px;
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: red;
  margin: 4px;
  border-radius: 100%;
  display: inline-block;
  animation: bounce  2s infinite ease-in-out;
}

.spinner .bounce1 {
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
h5{
  text-decoration: underline 2px solid red;
}

@media only screen and (max-width: 768px) {
  #container-12 {
    padding: 10px;
  }

  form {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .col {
    flex-direction: column;
  }

  .spinner {
    margin-top: 0;
  }
}
</style>