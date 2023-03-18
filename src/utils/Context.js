import React, { createContext, useState } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
  const [types, setTypes] = useState({ type: "one" });
  const [cart, setCart] = useState([]);
  const [key, setKey] = useState(0);
  const [search, setSearch] = useState("");
  const [id, setId] = useState(1);
  const [category, setCategory] = useState("catalog");
  const [adds, setAdds] = useState(true);

  const chooseId = (item) => {
    if (item.kislinka != undefined) {
      setCategory("catalog");
    }
    if (item.place == "healthy") {
      setCategory("healthy-eatings");
    }
    if (item.kislinka == undefined && item.place == "tea") {
      setCategory("coffee-drinks");
    }
    setId(item.id);
  };
  const [user, setUser] = useState([]);

  const addCart = (product) => {
    setCart((prev) => [
      ...prev,
      {
        ...product,
        count: 1,
      },
    ]);
  };

  const addCompleted = (product) => {
    setCart((prev) => [
      ...prev,
      {
        ...product,
      },
    ]);
  };

  const plusOneCart = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    );
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const delCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const minusOneCart = (id) => {
    let count = cart.find((item) => item.id === id).count;

    if (count === 1) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        })
      );
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const delTo = (id) => {
    setCart((prev) => prev.slice(100));
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // useEffect(() => {
  //     if (localStorage.getItem('user') === null){
  //         setUser(JSON.parse(localStorage.getItem('user')))
  //     }

  //     if (localStorage.getItem('cart') === null){
  //         setCart(JSON.parse(localStorage.getItem('cart')))
  //     }
  // }, [])

  const value = {
    cart,
    types,
    setTypes,
    addCart,
    plusOneCart,
    minusOneCart,
    delCart,
    search,
    id,
    setSearch,
    chooseId,
    category,
    delTo,
    key,
    setKey,
    addCompleted,
    adds,
    setAdds,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
