import React from 'react'
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from '../context';

function RoomsContainer({context}) {
      const {Loading, sortedRooms,rooms} =context;
      if (Loading)  return <Loading />;
      return (
        <>
          <p>hello from the new room containers</p>
          <RoomsFilter rooms={rooms}  />
          <RoomsList  rooms={sortedRooms} />
          </>
      );
}

export default withRoomConsumer(RoomsContainer);

// import React from "react";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// export default function RoomsContainer() {
//         return (
//           <RoomConsumer>
//             {value =>{ 
//                 const {Loading, sortedRooms,rooms} =value;
//                 if (Loading)  return <Loading />;

//                 return (
//                   <>
//                     <p>hello from the new room containers</p>
//                     <RoomsFilter rooms={rooms}  />
//                     <RoomsList  rooms={sortedRooms} />
//                     </>
//                 );
//               }
//           }
//           </RoomConsumer>
//         );
// }