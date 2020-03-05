import React from 'react';


class foot extends React.Component {
  
    render() {
        return (
            <div className="footer">
                <ul className="blog-link">
                    <li><a href="http://evilbinary.org/" target="_blank" rel="noopener noreferrer">邪恶二进制</a></li>
                    <li><a href="https://www.oschina.net/" target="_blank" rel="noopener noreferrer">开源中国</a></li>
                    <li><a href="https://kooteam.com" target="_blank" rel="noopener noreferrer">Kooteam</a></li>
                    <li><a href="https://about.sourcegraph.com/" target="_blank" rel="noopener noreferrer">sourcegraph</a></li>
                    <li><a href="https://coolshell.cn/" target="_blank" rel="noopener noreferrer">酷壳</a></li>
                    <li><a href="https://iizhi.cn/" target="_blank" rel="noopener noreferrer">子衿</a></li>
                </ul>
                <p className="copyright">Copyright  2015-2020 <a href="http://www.beian.gov.cn/" target="_blank" rel="noopener noreferrer">鄂ICP备15011003号-1</a></p>
                <div className="bottom">
                    <div className="github-badge">
                        <a rel="license" href="https://kooteam.com/" target="_blank" title="kooteam">
                        <span className="badge-subject">team</span><span className="badge-value bg-blue">Kooteam</span>
                        </a>
                    </div>
                    <div className="github-badge">
                        <a rel="license" href="https://github.com/" target="_blank" title="github">
                        <span className="badge-subject">Link</span><span className="badge-value bg-brightgreen">github</span>
                        </a>
                    </div>
                    <div className="github-badge">
                        <a rel="license" href="https://react.docschina.org/" target="_blank" title="React">
                        <span className="badge-subject">Lang</span><span className="badge-value bg-react">React</span>
                        </a>
                    </div>
                    <div className="github-badge">
                        <a rel="license" href="https://cn.vuejs.org/" target="_blank" title="vue">
                        <span className="badge-subject">Lang</span><span className="badge-value bg-vue">Vue</span>
                        </a>
                    </div>
                    <div className="github-badge">
                        <a rel="license" href="https://www.aliyun.com" target="_blank" title="Aliyun">
                        <span className="badge-subject">CDN</span><span className="badge-value brightgreen">Aliyun</span>
                        </a>
                    </div>
                    <div className="github-badge">
                        <a rel="license" href="https://www.bootcss.com/" target="_blank" title="Bootstarp">
                        <span className="badge-subject">Link</span><span className="badge-value bg-orange">Bootstarp</span>
                        </a>
                    </div>   
                    <div className="github-badge">
                        <a rel="license" href="https://996.icu/" target="_blank" title="支持 996.ICU">
                        <span className="badge-subject">Link</span><span className="badge-value bg-red">996.ICU</span>
                        </a>
                    </div>   
                    <div className="github-badge">
                        <a rel="license" href="https://ant.design/docs/react/customize-theme-cn" target="_blank" title="Antd">
                        <span className="badge-subject">Ant</span><span className="badge-value bg-ant">Antd</span>
                        </a>
                    </div>  
                    <div className="github-badge">
                        <a rel="license" href="https://element.faas.ele.me/#/zh-CN" target="_blank" title="Element">
                        <span className="badge-subject">Ele</span><span className="badge-value bg-ant">Element</span>
                        </a>
                    </div>   
                    <div className="github-badge">
                        <a rel="license" href="https://github.com/MoePlayer/APlayer" target="_blank" title="APlayer">
                        <span className="badge-subject">Music</span><span className="badge-value bg-red">APlayer</span>
                        </a>
                    </div>   
                </div> 
            </div>
        )
    }
}

export default foot;