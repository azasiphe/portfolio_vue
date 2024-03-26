<template>

    <div class="about">
    <h1>ABOUT ME</h1>
  </div>

 <div class="real">
  <div v-if="loading" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
  <div class="both">
<img src="https://i.postimg.cc/yxDpN0J0/IMG-20230531-WA0015.jpg" class="img-a">

 
<div class="background">
  <p class="pp"> Who am i?</p>
  <p>Hello! I'm Azasiphe Ndoro, an aspiring fullstack developer with a current focus on front-end development. I find joy in every aspect of the design process, from collaborative discussions to bringing ideas to life through code.
</p>
<p class="pp"> What I Do?</p>

<p>

As a front-end developer, I specialize in crafting engaging and user-friendly interfaces. I am passionate about creating seamless experiences that not only look good but also deliver exceptional functionality. I thrive on the challenges of turning design concepts into interactive and responsive web applications.
</p>
<p  class="pp">
 Passion for Learning:
</p>
<p>
In addition to my core skills, I am continuously expanding my knowledge and exploring new technologies. I believe that staying curious and embracing new challenges are essential traits for a developer.


</p>
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
  .about {
    text-align: center;
    text-decoration: underline 8px solid black;
    background-color: red;
    padding: 15px;
    color: black;
    position: relative;
    top: 20px;
  }

  .real {
    background-color: black;
    padding: 9%;
    justify-content: right;
  }

  .pp {
    text-decoration: underline 2px solid red;
  }

  .real p {
    color: black;
    font-size: 150%;
    font-style: italic;
  }

 

  .cont2 {
    margin-top: -70%;
    position: relative;
  }

  .blurred-background {
    width: 1000%;
    height: 50%;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(15px);
    border: 5px solid red;
    box-sizing: border-box;
    border-radius: 10px;
    
  }

  .img-a {
    width: 26%;
    height: 100%;
    margin-left: -8%;
    border-top: 4px solid red;
    border-bottom: 4px solid red;
    border-radius: 10px;
    position: relative;
    margin-bottom: 5px;
  }

  .img-a::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: red;
    left: -2px;
    top: 0;
  }

  .both {
    display: flex;
   
 gap: 8%;
    position: relative;
    bottom: 30px;
  }

  .background {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(15px);
    border: 5px solid red;
    box-sizing: border-box;
    border-radius: 10px;
    position: relative;
  }

  .blurred-background::before {
    width: 1000%;
    height: 50%;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(15px);
    border: 5px solid red;
    box-sizing: border-box;
    border-radius: 10px;
    position: relative;
  }

  .container::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: red;
    left: 250%;
    top: 0;
    transform: translateX(-50%);
  }

  .cont2::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: red;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  
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

@media only screen and (max-width: 390px) {
  .real {
    padding: 5%; 
  }

 

  .img-a {
    width: 50%; 
    margin-left: 85px;
    margin-bottom: 10px; 
  }

  .blurred-background{
    width: 90%; 
    height: 100%;
    
  }
  
  .cont2 {
    margin-top: 0; 
    padding: 70%;
  }
}
</style>