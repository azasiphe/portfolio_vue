
            
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
      <div class="col">
        <p class="pa"> <i class="fas fa-phone"></i> Phone: 083 389 3284</p>
        <p class="pa"> <i class="fab fa-github"></i> Github: Azasiphe Ndoro</p>
        
        <p class="pa">
          <i class="fab fa-linkedin"></i> LinkedIn: Azasiphe Ndoro
        </p>
        <p class="pa"><i class="far fa-envelope"></i> Email: azasiphendoro@gmail.com</p>
       
      </div>
    </div>
  </div>
</template>

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
</style>