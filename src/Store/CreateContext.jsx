// CreateContext.js
import { createContext, useReducer } from "react";

// Create the context
export const refContext = createContext({
  paintpost: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
});

// Reducer function to manage the posts state
const setPostNumberReducer = (currentValue, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currentValue.filter((post) => post.id !== action.payload);

    case "ADD_POST":
      return [
        { id: `${currentValue.length + 1}`, ...action.payload }, // Ensure unique ID
        ...currentValue,
      ];

    case "APP_ALL_INITIAL_POSTS":
      return [...action.payload.posts]; // Add all initial posts

    default:
      return currentValue;
  }
};

// Provider component to wrap the app and provide context
function MyProvider({ children }) {
  const [paintpost, dispatchPostNumber] = useReducer(setPostNumberReducer, []);

  const addPost = (username, title, reaction, body) => {
    dispatchPostNumber({
      type: "ADD_POST",
      payload: { username, title, reaction, body },
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostNumber({
      type: "APP_ALL_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const deletePost = (id) => {
    dispatchPostNumber({ type: "DELETE_POST", payload: id });
  };

  return (
    <refContext.Provider
      value={{ paintpost, addPost, deletePost, addInitialPost }}
    >
      {children}
    </refContext.Provider>
  );
}

export default MyProvider;
