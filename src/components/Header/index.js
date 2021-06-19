import React from "react";
import FormHeader from "./FormHeader";
import MainHeader from "./MainHeader";
import SecondaryHeader from "./SecondaryHeader";
function Header({
  type,
  label,
  navigation,
  home,
  product,
  cart,
  history,
  isSearchInput,
}) {
  switch (type) {
    case "main":
      return (
        <MainHeader
          home={home}
          product={product}
          cart={cart}
          history={history}
        />
      );
    case "secondary":
      return (
        <SecondaryHeader
          home={home}
          product={product}
          cart={cart}
          history={history}
          isSearchInput={isSearchInput}
        />
      );
    case "form":
      return <FormHeader label={label} navigation={navigation} />;
    default:
      return <MainHeader />;
  }
}

export default Header;