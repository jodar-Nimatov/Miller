import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import { set } from "./slice";
import styles from "./index.module.scss";

const Theme = ({ className }) => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = () => dispatch(set(theme === "dark" ? "light" : "dark"));

  return (
    <div
      className={cn(
        className,
        styles.root,
        theme === "dark" ? styles.dark : styles.light
      )}
      onClick={handleChange}
    />
  );
};

export default Theme;
