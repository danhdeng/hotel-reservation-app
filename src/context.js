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
        let featuredRooms=rooms.filter(item=>item.featured===true);
        let maxPrice=Math.max(...rooms.map(item=>item.price));
        let maxSize=Math.max(...rooms.map(item=>item.size));
        setState((prevState) => {
          return {
            ...prevState,
            rooms: rooms,
            loading: false,
            featuredRooms:featuredRooms,
            sortedRooms: rooms,
            maxPrice: maxPrice,
            price: maxPrice,
            maxSize: maxSize,
          };
        });
      }, []);

      const handleChange=(event)=>{
        const target=event.target;
        const value=target.type==="checkbox" ? target.checked : target.value;
        const name=target.name;
        console.log(`${name} ${value}`);
        setState((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      }

      //hanle the room filter change
      useEffect(() => {
        let {type, capacity, price, minSize, maxSize, breakfast, pets, rooms} =state;
       
        let tempRooms=[...rooms];
        //filter by type
        if(type !=="all"){
          tempRooms=tempRooms.filter(item=>item.type===type);
        }
        //parse value to Integer
        let capacityInt=parseInt(capacity);
        let priceInt=parseInt(price);

        //filter by capacity
        if(capacity !==1){
          tempRooms=tempRooms.filter(item=>item.capacity===capacityInt);
        }

        //filter by price 
        if(parseInt !==0){   
          tempRooms=tempRooms.filter(item=>item.price<=priceInt);
        }
        
        //filter by size
        tempRooms=tempRooms.filter(item=>item.size<=maxSize && item.size>=minSize);

        //filter by breakfast

        if(breakfast){
          tempRooms=tempRooms.filter(item=>item.breakfast===true);
        }

        //filte by pets
        if(pets){
          tempRooms=tempRooms.filter(item=>item.pets===true);
        }
       setState((prevState) => {
          return {
            ...prevState,
            sortedRooms: tempRooms
          }
        });
      }, [state.type, state.capacity, state.price, state.minSize, state.maxSize, state.breakfast, state.pets]);

  
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
        let tempRooms=[...state.rooms];
        const room=tempRooms.find(item=>item.roomtype===roomType);
        return room;
      }

      return (
        <RoomContext.Provider
        value={{
          ...state,
          getRoom,
          handleChange
        }}
        >
          {children}
        </RoomContext.Provider>
      );
  }
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };


//higher order component
export function withRoomConsumer(Component){
    return function CommsumerWrapper(props){
      return (
        <RoomConsumer>
          {value=><Component {...props} context={value} />}
        </RoomConsumer>
      );
  };
}

// export function withRoomConsumer(Component) {
//   return function ConsumerWrapper(props) {
//     return (
//       <RoomConsumer>
//         {value => <Component {...props} context={value} />}
//       </RoomConsumer>
//     );
//   };
// }
