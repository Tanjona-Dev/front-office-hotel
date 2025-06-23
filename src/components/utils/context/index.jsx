import { createContext, useState } from "react";


export const RoomTypeContext = createContext();

export const RoomTypeProvider = ({ children }) => {
  const [roomType, setRoomType] = useState("SUPERIEUR");


  return (
    <RoomTypeContext.Provider value={{ roomType, setRoomType }}>
      {children}
    </RoomTypeContext.Provider>
  );
};
