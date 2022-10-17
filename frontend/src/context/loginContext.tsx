import { createContext } from "react";
import { UserContext } from "../types";

const loginContext = createContext<Partial<UserContext>>({});

export default loginContext;
