<template>
  <nav>
    <div class="logo">
      <img src="https://i.postimg.cc/PJM7dyMR/images-25.jpg" alt="Logo" />
    </div>
    <div class="links" :class="{ 'show-links': showMenu }">
      <router-link to="/">Home</router-link> |
      <router-link to="/">About</router-link> |
      <router-link to="/resume">Education</router-link> |
      <router-link to="/project">My work</router-link> |
      <router-link to="/testimonials">Reviews</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="toggle-button" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComp',
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>

nav {
  display: flex;
  padding: 15px;
  position: relative;
  top: 20px;
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

.toggle-button {
  display: none; 
  cursor: pointer;
}

.toggle-button i {
  color: white;
  font-size: 1.5rem;
}

.show-links {
  display: flex !important;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 0;
  background-color: black;
  width: 100%;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
  }

  .links {
    display: none;
  }

  .toggle-button {
    display: block; 
  }
}
</style>
