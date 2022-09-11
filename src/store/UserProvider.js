import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [user, setUser] = useState(false);
  return (
    <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
  );
};

export default Provider;
