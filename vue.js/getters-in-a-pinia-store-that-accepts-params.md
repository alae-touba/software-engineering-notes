# Getters in a pinia store that accept params

In Pinia with the Composition API, when you need a "getter" that accepts parameters (such as an `authorId` to filter posts by author), you can't directly use a computed property as in traditional Vue stores. This is because computed properties are evaluated without arguments. However, we can create a function that returns a computed value. This allows us to simulate the behavior of a getter that takes arguments.

### Concept Explanation

In a typical store setup (like in Vuex), you might see a getter that accepts parameters. Pinia's Composition API doesn't natively provide this in the same way, but we can achieve the same functionality by creating a function that returns a computed value. This approach allows you to filter or process store data dynamically based on parameters.

**Why use a function instead of a computed property?**

- **Computed properties** are reactive but can't directly accept parameters.
- By using a **function that returns a computed**, you enable dynamic logic that can take arguments and still benefit from reactivity.

### Example

Here’s how we can implement a function that acts as a "getter" in a Pinia store:

```jsx
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const usePostStore = defineStore('postStore', () => {
  // State
  const posts = ref([
    { id: 1, title: 'Post 1', userId: 1 },
    { id: 2, title: 'Post 2', userId: 2 },
    { id: 3, title: 'Post 3', userId: 1 }
  ]);

  // Function that returns a computed value, allowing for dynamic filtering by userId
  function getPostsPerAuthor(authorId) {
    return computed(() => posts.value.filter((post) => post.userId === authorId));
  }

  return {
    posts,
    getPostsPerAuthor
  };
});

```

### Key Points:

1. **`getPostsPerAuthor` is a function**: It accepts `authorId` as an argument and returns a computed property, ensuring that whenever the state (`posts.value`) changes, the filtered posts are automatically updated.
2. **Computed within the function**: The `computed` ensures that the filtered posts are reactive, recalculating if the posts list changes.
3. **Benefit of this approach**: It allows you to use dynamic logic (e.g., filtering by different parameters like `authorId`) while keeping reactivity, which wouldn't be possible with a static computed property.

### Usage Example

In your component, you can use the store and pass an argument to retrieve posts for a specific author dynamically:

```html
<template>
  <div>
    <h2>Posts by Author 1</h2>
    <ul>
      <li v-for="post in postsByAuthor1" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/postStore';
const postStore = usePostStore();

// Get posts for author with userId = 1
const postsByAuthor1 = postStore.getPostsPerAuthor(1);
</script>
```

### Conclusion:

By using a **function that returns a computed** in your Pinia store, you can simulate the behavior of "getters" that accept parameters. This is a powerful way to handle reactive data that needs to be dynamically filtered or processed based on input, maintaining Vue’s reactivity while providing flexible and customizable logic.
