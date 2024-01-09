<template>
    <nav>
      <div class="logo"> 
        <img src="https://i.postimg.cc/PJM7dyMR/images-25.jpg" alt="Logo" />
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/resume">Resume</router-link>|
      <router-link to="/projects">Projects</router-link>|
      <router-link to="/testimonials">Testimonials</router-link>|
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view/>
  </template>
  <script>
  export default {
    name: 'NavbarComp',
  }; 
  </script>
  <style>

nav {
  display: flex;
  padding: 30px;
text-align: center;
  background-color: black;
  justify-content: center;
  align-items: center;
}

nav a:hover{
  color: red;
  border-color: red;
}

nav a {
  font-weight: 50px;
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 0 0 0 25px;
  text-align: center;
  border: 2px solid transparent;
  transition: border-color 0.3s;
  text-align: right;
 

}

nav a.router-link-exact-active {
  color: #42b983;
  border: 3px solid red;
  border-radius: 5px;

}
.logo img{
margin-right: 590px;
  width:70px;
  border-radius: 70%;
  
}
</style>