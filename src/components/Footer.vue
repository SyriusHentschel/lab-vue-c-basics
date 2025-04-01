<template>
  <footer class="footer">
    <p>&copy; {{ currentYear }} Vue.js Basics Lab</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// Get current year for copyright
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  text-align: center;
  border-top: 1px solid #e9ecef;
}
</style>