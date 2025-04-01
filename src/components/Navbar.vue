<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <h1>Vue.js Basics Lab</h1>
    </div>
    <div class="navbar-menu">
      <a href="#" class="navbar-item">Home</a>
      <a href="#" class="navbar-item">About</a>
      <a href="#" class="navbar-item">Contact</a>
    </div>
  </nav>
</template>

<script setup>
// Navbar component using Composition API
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #42b983;
}

.navbar-menu {
  display: flex;
  gap: 1rem;
}

.navbar-item {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

.navbar-item:hover {
  color: #42b983;
}
</style>