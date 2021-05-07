import { createContext } from "react";

const pageContext = createContext({
  page: "",
  search: "",
});

export default pageContext;
