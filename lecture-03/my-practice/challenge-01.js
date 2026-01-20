/* Scenario: You are merging user profile settings. If a user updates their profile, you need to merge the new settings into the old ones, but you must ensure you don't accidentally delete properties that weren't mentioned in the update. */

const inititalState = {
  id: 1,
  name: "Yash",
  preferences: { theme: "light", lang: "en" },
};
const updatedState = {
  id: 1,
  name: "YashPrajapati",
  preferences: { theme: "dark" },
};

const finalProfile = {
  ...inititalState,
  ...updatedState,
  preferences: {
    ...inititalState.preferences,
    ...updatedState.preferences,
  },
};

console.log(finalProfile);
