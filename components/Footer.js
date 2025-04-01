// Footer Component
const Footer = {
  setup() {
    const currentYear = Vue.ref(new Date().getFullYear());
    return { currentYear };
  },
  template: `
    <footer class="footer">
      <p>&copy; {{ currentYear }} Vue.js Basics Lab</p>
    </footer>
  `
};