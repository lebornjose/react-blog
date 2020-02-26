import React from 'react';
import infoImg from '../../../img/timg.jpeg';


class info extends React.Component {  
  render() {
    return (
      <div className="sidebar-info sidebar-block">
        <img src={infoImg}/>
        <p className="nick">๑۩ﺴ  Super Xing  ﺴ۩๑</p>
        <p className="desc">梦想永远是现代式，而绝非过去式</p>
        <ul className="func-list">
          <li><a href="#"><i className="icon-github"></i></a></li>
          <li><a href="#"><i className="icon-github"></i></a></li>
          <li><a href="#"><i className="icon-github"></i></a></li>
          <li><a href="#"><i className="icon-github"></i></a></li>
          <li><a href="#"><i className="icon-github"></i></a></li>
        </ul>
      </div>
    )
  }
}

export default info;