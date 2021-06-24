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

import React, {useState, useEffect} from "react";
import items from "./data";

const RoomContext = React.createContext();

//const useRoomContext = useContext(RoomContext);

export default function RoomProvider({children}){
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

      //get data
      useEffect(() => {
        let rooms=formatData(items);
        setState((prevState) => {
          return {
            ...prevState,
            loading: false,
            featuredRooms:rooms
          };
        });
      }, []);

      const formatData=(items)=> {
        let tempItems=items.map(item=>{
          let id=item.sys.id;
          let images=item.fields.images.map(image=>image.fields.file.url);
          let room={...item.fields, images: images, id};
          return room;
        });
        return tempItems;
      };

      const getRoom=(roomType)=>{
        console.log(roomType);
        let tempRooms=[...state.featuredRooms];
        console.log(tempRooms);
        const room=tempRooms.find(item=>item.roomtype===roomType);
        return room;
      }

      return (
        <RoomContext.Provider
        value={{
          ...state,
          getRoom
        }}
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
