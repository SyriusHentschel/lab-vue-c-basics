// Home Component
const Home = {
  setup() {
    // Iteration 2: Function that returns a string
    const userName = Vue.ref('Vue Developer');
    const getGreeting = () => {
      return `Hello, ${userName.value}! Welcome to Vue.js Basics Lab.`;
    };
    
    // Iteration 3: Conditional rendering
    const isVisible = Vue.ref(true);
    const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
    };
    
    // Iteration 4: List rendering
    const posts = Vue.ref([
      {
        title: 'Getting Started with Vue.js',
        description: 'Learn the basics of Vue.js framework',
        content: 'Vue.js is a progressive JavaScript framework used for building user interfaces. It is designed to be incrementally adoptable.'
      },
      {
        title: 'Understanding the Composition API',
        description: 'A deep dive into Vue 3 Composition API',
        content: 'The Composition API is a set of APIs that allows us to author Vue components using imported functions instead of declaring options.'
      },
      {
        title: 'Building Reusable Components',
        description: 'Best practices for component design',
        content: 'Creating reusable components is essential for maintaining a clean and efficient codebase. This post explores strategies for designing components that can be used across your application.'
      }
    ]);
    
    // Iteration 5: Dynamic styling
    const colors = ['#42b983', '#3498db', '#e74c3c', '#f39c12', '#9b59b6'];
    const boxColor = Vue.ref('#42b983');
    const changeColor = () => {
      // Get a random color different from the current one
      let newColor;
      do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
      } while (newColor === boxColor.value);
      
      boxColor.value = newColor;
    };
    
    return {
      userName,
      getGreeting,
      isVisible,
      toggleVisibility,
      posts,
      boxColor,
      changeColor
    };
  },
  template: `
    <div class="home">
      <h1>Vue.js Basics Lab</h1>
      
      <!-- Iteration 2: Display the result of a JavaScript operation -->
      <section class="section">
        <h2>Iteration 2: JavaScript Operations</h2>
        <div class="card">
          <h3>Simple Math Operation:</h3>
          <p>2 + 2 = {{ 2 + 2 }}</p>
          
          <h3>Function Result:</h3>
          <p>{{ getGreeting() }}</p>
        </div>
      </section>
      
      <!-- Iteration 3: Conditional Rendering -->
      <section class="section">
        <h2>Iteration 3: Conditional Rendering</h2>
        <div class="card">
          <button @click="toggleVisibility">Toggle Visibility</button>
          <div v-if="isVisible" class="conditional-element">
            <p>This element is visible because the condition is true!</p>
          </div>
        </div>
      </section>
      
      <!-- Iteration 4: List Rendering -->
      <section class="section">
        <h2>Iteration 4: List Rendering</h2>
        <div class="card">
          <div v-for="(post, index) in posts" :key="index" class="post">
            <h3>{{ post.title }}</h3>
            <p class="description">{{ post.description }}</p>
            <p class="content">{{ post.content }}</p>
          </div>
        </div>
      </section>
      
      <!-- Iteration 5: Dynamic Styling -->
      <section class="section">
        <h2>Iteration 5: Dynamic Styling</h2>
        <div class="card">
          <div class="color-box" :style="{ backgroundColor: boxColor }">
            <p>This box changes color when you click the button!</p>
          </div>
          <button @click="changeColor">Change Color</button>
        </div>
      </section>
    </div>
  `
};