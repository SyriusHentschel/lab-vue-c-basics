// App Component
const App = {
  components: {
    Navbar,
    Home,
    Footer
  },
  template: `
    <div id="app">
      <Navbar />
      <main class="container">
        <Home />
      </main>
      <Footer />
    </div>
  `
};