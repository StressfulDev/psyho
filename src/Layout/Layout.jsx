import {cloneElement} from "react";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

const Layout = ({children}) => {

  return (
    <>
      {cloneElement(children)}
      <ScrollToTopButton />
    </>
  )
}

export default Layout;
