import React, { useContext } from 'react'
import defaultBcg from "../images/room-1.jpeg";
import Template from '../components/Template';
import Banner from "../components/Banner";
import { Link } from 'react-router-dom';
import {RoomContext} from "../context";
import StyleTemplate from '../components/Template.Styles';

export const SingleRoom = (props) => {
    //console.log(props.match.params.roomtype);
    const {getRoom} =useContext(RoomContext);
    const room=getRoom(props.match.params.roomtype);
    if(!room){
        return <div className="error">
                <h3>No such room could be found</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
    }
    const {name, description, capacity, size, price, extras, 
        breakfast, pets, images}=room;

    const [mainImg, ...defaultImgs]=images;
    return (
        <>
         <StyleTemplate img={images[0]}>
             <Banner title={`${name} room`}>
                 <Link to ="/rooms" className="btn-primary">
                     back to rooms
                 </Link>
             </Banner>
        </StyleTemplate>
        <section className="single-room">
            <div className="single-room-images">
                {defaultImgs.map((item, index)=>{
                   return <img key={index} src={item} alt={name} />
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>price: ${price}</h6>
                    <h6>size: {size} SQFT</h6>
                    <h6>
                        max capacity
                        {capacity > 1 ? `${capacity} people` : `${capacity} person`  }
                    </h6>
                    <h6>
                        {pets ? "pets allow" : "no pets allow"}
                    </h6>
                    <h6>{breakfast && "breakfast included"}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
                <h6>extra</h6>
                <ul className="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
        </section>
        </>
    )
}
