import { createContext, useState } from "react";

export const BrandContext = createContext();
export const BrandProvider = ({ children }) => {
  const [isDelete, setIsDelete] = useState(false);
  return (
    <BrandContext.Provider value={{ isDelete, setIsDelete }}>
      {children}
    </BrandContext.Provider>
  );
};
