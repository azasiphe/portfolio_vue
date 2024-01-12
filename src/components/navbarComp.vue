<template>
  <nav>
    <div class="logo">
      <img src="https://i.postimg.cc/PJM7dyMR/images-25.jpg" alt="Logo" />
    </div>
    <div class="links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <router-link to="/project">Projects</router-link> |
      <router-link to="/testimonials">Testimonials</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComp',
};
</script>

<style scoped>
nav {
  display: flex;
  padding: 15px;
  background-color: black;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 50px;
  border-radius: 50%;
  border: 3px solid white;
}

.links {
  display: flex;
}

nav a {
  font-weight: 50px;
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 0 15px;
  text-align: center;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

nav a:hover {
  color: red;
  border-color: red;
}

nav a.router-link-exact-active {
  color: #42b983;
  border: 3px solid red;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .links {
    flex-direction: flex;
    align-items: center;
    text-align: center;
  }

  nav a {
    margin: 10px 0;
  }

  .logo {
    margin-right: 0;
  }
}
</style>