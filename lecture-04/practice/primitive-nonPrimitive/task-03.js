/* Goal: Update a deeply nested property in an immutable way (common in Redux/React). 

Requirements:
Given the state object below, write a one-line function to update isDark to true inside theme.
You must not mutate state directly. Return a new object. */

const state = {
  user: { id: 1, name: "John" },
  settings: {
    theme: { color: "blue", isDark: false },
    notifications: true,
  },
};

const updateTheme = (currentState) => {
  return {
    ...currentState,
    settings: {
      ...currentState.settings,
      theme: {
        ...currentState.theme,
        isDark: true,
      },
    },
  };
};

console.log(updateTheme(state));
