import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading';
import Room from './Room';
import Title from "./Title";


export default function FeatureRooms() {
    const {loading, featuredRooms}=useContext(RoomContext);

    return (
        <section className="feature-rooms">
            <Title title="feature rooms" />
            <div className="featured-rooms-center">
                { loading ? <Loading /> : 
                    featuredRooms.map(room => {
                        return <Room key={room.id} room={room} />;
                      })
                }
            </div>
        </section>
    );
}
