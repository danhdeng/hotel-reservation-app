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

import React, {useContext, useState, useEffect} from "react";
import items from "./data";

const RoomContext = React.createContext();

//const useRoomContext = useContext(RoomContext);

export default function RoomProvider({children}){
      const initialState={
       rooms:[],
       sortedRooms:[],
       featureRooms: [],
       loading: true
      };

      //get data
      useEffect(() => {
        let rooms=formatData(items);
        console.log(rooms);
      });

      const formatData=(items)=> {
        let tempItems=items.map(item=>{
          let id=item.sys.id;
          let images=item.fields.images.map(image=>image.fields.file.url);
          let room={...item.fields, images: images, id};
          return room;
        });
        return tempItems;
      };

      const [state, setState] = useState(initialState);
      return (
        <RoomContext.Provider
        value={[state, setState]}
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
