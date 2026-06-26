import React from 'react';
import Info from './component/info';
import Nav from './component/nav';
import Welcome from './component/welcome';
import { MusicSlot } from './component/music';

export default () => {
    return (
        <div className="blog-sidebar">
            <Info></Info>
            <Nav></Nav>
            <Welcome></Welcome>
            <MusicSlot></MusicSlot>
        </div>
    )
}
