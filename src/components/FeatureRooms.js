import React, { useContext } from 'react'
import { RoomContext } from '../context'

export default function FeatureRooms() {
    const [state, setState]=useContext(RoomContext);

    return (
        <div>
            {state.greeting} {state.name}
        </div>
    );
}
