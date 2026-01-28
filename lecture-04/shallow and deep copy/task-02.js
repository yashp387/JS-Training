/* Goal: Update a deeply nested state without mutating the original (Manual Deep Update). 

Requirements:
Given state, create newState.
Change profile.social.twitter to "@newHandle".
Constraint: Use only spread syntax .... Do not use structuredClone or JSON methods.
*/

const state = {
    id:1, 
    profile: {
        name: "Yash",
        social: { twitter: "@yash", facebook: "yash.fb"}
    }
};

const newState = {
    ...state,
    profile: {
        ...state.profile,
        social: {
            ...state.profile.social,
            twitter: "@newHandle"
        }
    }
};

console.log(newState);