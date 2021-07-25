import React, { useState } from "react";

export const PageNumberContext = React.createContext(null);

const PageNumberContextProvider = (props) => {
  const [pageNumber, setPageNumber] = useState(1);

  const pageUp = () => {
    setPageNumber(pageNumber + 1)
    console.log(pageNumber)
  };

  const pageDown = () => {
    setPageNumber(pageNumber - 1)
  };
  
  return (
    <PageNumberContext.Provider
      value={{
          pageNumber,
          pageUp,
          pageDown,
      }}
    >
      {props.children}
    </PageNumberContext.Provider>
  );
};

export default PageNumberContextProvider;