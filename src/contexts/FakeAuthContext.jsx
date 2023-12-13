import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

// STEP 1 WRITE ALL THE STATES

const initialState = {
  user: null,
  isAuthenticated: false,
};

// STEP 2 WRITE ALL THE ACTIONS IN REDUCER FUNCTION

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action");
  }
};

const FAKE_USER = {
  name: "Najeeb",
  email: "najeeb@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

// USE CONTEXT WRITE THE LOGIC ACCORDING TO THE REDUCER FUNCTION
const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const login = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  //   Pass all the states and event types here in context
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("This context was used outside the AuthProvider");
  return context;
};

export { AuthProvider, useAuth };
