# Vue.js Basics Lab (Composition API) - Solution

This document explains the solution to the Vue.js Basics Lab.

## Project Structure

This project demonstrates Vue.js basics using two different approaches:

1. **Single-file approach** (`index.html`): All Vue.js code is in a single HTML file
2. **Component-based approach** (`index-components.html`): Vue.js code is organized into separate component files

## How to Run

Simply open either of these files in your browser:
- `index.html` - Single-file approach
- `index-components.html` - Component-based approach

No build step is required!

## Lab Requirements Implementation

### 1. Basic Template Structure
- Created a navbar component (`components/Navbar.js`) and a footer component (`components/Footer.js`)
- Included them in the main application (`components/App.js`)

### 2. JavaScript Operations
- Displayed the result of a mathematical operation: `{{ 2 + 2 }}`
- Created a function `getGreeting()` that returns a string using the reactive variable `userName`

### 3. Conditional Rendering
- Created a boolean variable `isVisible` using `ref(true)`
- Used `v-if="isVisible"` directive to conditionally show/hide an element
- Added a button with `@click="toggleVisibility"` to toggle visibility

### 4. List Rendering
- Created an array of posts with title, description, and content properties
- Used `v-for="(post, index) in posts"` directive to display the list of posts

### 5. Dynamic Styling (Bonus)
- Created a reactive variable `boxColor` for the background color
- Used `:style="{ backgroundColor: boxColor }"` binding to dynamically change the style
- Added a button with `@click="changeColor"` to change the color randomly

## Components

- **Navbar**: Navigation bar at the top of the page
- **Footer**: Footer with dynamic current year
- **Home**: Main content with all the lab exercises
- **App**: Root component that includes all other components

## Notes

The component-based approach (`index-components.html`) better follows the lab instructions by separating the code into reusable components. This demonstrates one of the main advantages of Vue.js - the ability to create reusable components that can be used throughout an application.