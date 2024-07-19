import { createContext, useState } from "react";

export const BrandContext = createContext();
export const BrandProvider = ({ children }) => {
  const [isDelete, setIsDelete] = useState(false);
  const [addBrandClicked, setAddBrandClicked] = useState(false);

  return (
    <BrandContext.Provider value={{ isDelete, setIsDelete,addBrandClicked,setAddBrandClicked }}>
      {children}
    </BrandContext.Provider>
  );
};
