import React from 'react'
import ListRoundMatch from '../../Components/ListRoundMatch/ListRoundMatch';
import Tabs from '../Tabs/Tabs';
import './List.css';
export default function List() {
    return (
        <div className="list">
            <Tabs />
            <>
            <ListRoundMatch/>
            <ListRoundMatch/>
            <ListRoundMatch/>
            </>
        </div>
    )
}
