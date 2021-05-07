import { createContext } from "react";

const postCardContext = createContext({
  page: "",
  slug: "",
});

export default postCardContext;