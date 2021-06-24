import React, { useContext } from 'react'
import defaultBcg from "../images/room-1.jpeg";
import Template from '../components/Template';
import Banner from "../components/Banner";
import { Link } from 'react-router-dom';
import {RoomContext} from "../context";


export const SingleRoom = (props) => {
    console.log(props.match.params.roomtype);
    const {getRoom} =useContext(RoomContext);
    const room=getRoom(props.match.params.roomtype);
    console.log(room);
    return (
        <div>
            Hello from Sing Room page
        </div>
    )
}
