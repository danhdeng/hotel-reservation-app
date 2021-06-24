// import React, { Children, useContext } from 'react'

// export const RoomContext=React.createContext();

// export default function RoomProvider() {
//     return (
//        <RoomContext.Provider value="hello">
//            {Children}
//        </RoomContext.Provider>
//     );
// }

// export const RoomConsumer=RoomContext.Consumer;

import React from "react";
import items from "./data";

const RoomContext = React.createContext();


export default function RoomProvider({children}){
  
      return (
        <RoomContext.Provider
          value="Hello"
        >
          {children}
        </RoomContext.Provider>
      );
  }
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
