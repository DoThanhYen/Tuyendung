import AuthContext from "./context";
import { useReducer } from "react";
import AuthReducer, { InitialState } from "./reducer";

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, InitialState);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
