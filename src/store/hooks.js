import { useContext } from "react";
import StoreContext from "./Context";

export const useUserStore = () => {
  const [user, setUser] = useContext(StoreContext);
  return [user, setUser];
};
