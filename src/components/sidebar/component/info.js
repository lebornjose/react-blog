import React from 'react';
import infoImg from '../../../img/timg.jpeg';
import zhihu from '../../../img/zhihu.png';
import gitee from '../../../img/oschina.png';
import jian from '../../../img/jianshu.png';
import juejin from '../../../img/juejin.png';

class info extends React.Component {  
  render() {
    return (
      <div className="sidebar-info sidebar-block">
        <img src={infoImg}/>
        <p className="nick">๑۩ﺴ  Super Xing  ﺴ۩๑</p>
        <p className="desc">梦想永远是现代式，而绝非过去式</p>
        <ul className="func-list">
          <li><a href="https://github.com/lebornjose" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
          <li><a href="https://www.zhihu.com/people/huang_xing" target="_blank" rel="noopener noreferrer"><img src={zhihu} alt="lebornjose" /></a></li>
          <li><a href="https://gitee.com/cshap" target="_blank" rel="noopener noreferrer"><img src={gitee} alt="super xing"/></a></li>
          <li><a href="https://www.jianshu.com/u/5138bb4d8a48" target="_blank" rel="noopener noreferrer"><img src={jian} alt="super xing"/></a></li>
          <li><a href="https://juejin.im/user/599bd9896fb9a0248c2dd899"  target="_blank" rel="noopener noreferrer"><img src={juejin} alt="super xing"/></a></li>
        </ul>
      </div>
    )
  }
}

export default info;