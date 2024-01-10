<template>

    <div class="about">
    <h1>ABOUT ME</h1>
  </div>
 <div class="real">
  <div class="both">
<img src="https://i.postimg.cc/yxDpN0J0/IMG-20230531-WA0015.jpg" class="img-a">
<div class="container">
  <div class="blurred-background">
<p>Hello! I'm Azasiphe Ndoro, an aspiring fullstack developer with a current focus on front-end development. I find joy in every aspect of the design process, from collaborative discussions to bringing ideas to life through code.
</p>
<p class="pp"> What I Do?</p>

<p>

As a front-end developer, I specialize in crafting engaging and user-friendly interfaces. I am passionate about creating seamless experiences that not only look good but also deliver exceptional functionality. I thrive on the challenges of turning design concepts into interactive and responsive web applications.
</p>
  </div>
  </div>
  </div>
  <div class="cont2">
<div class="background">
<p class="pp">


My current skill stack includes:
</p>
<p>
- HTML/CSS: These are the building blocks of the web, and I have a solid foundation in creating well-structured and visually appealing layouts.
<br>
- Bootstrap: I leverage Bootstrap to enhance the responsiveness and styling of my projects, ensuring they look great on various devices.
<br>
- JavaScript and Vue.js: I am proficient in JavaScript, and I have experience working with Vue.js to build dynamic and interactive user interfaces. Vue.js, in particular, has become an integral part of my toolkit for its simplicity and efficiency.

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


</script>
<style>
  .about {
    text-align: center;
    text-decoration: underline 8px solid black;
    background-color: red;
    padding: 15px;
    color: black;
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

  .container {
    width: 10%;
    height: 120vh;
    margin: 0 0 0 7%;
    position: relative;
  }

  .cont2 {
    margin-top: -60%;
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
    position: relative;
  }

  .img-a {
    width: 30%;
    height: 100%;
    margin-left: -8%;
    border-top: 4px solid red;
    border-bottom: 4px solid red;
    border-radius: 10px;
    position: relative;
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
    margin-bottom: 30%;
    position: relative;
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
</style>