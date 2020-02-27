import React from 'react';


class foot extends React.Component {
  
    render() {
        return (
            <div className="footer">
                <ul className="blog-link">
                    <li><a href="">邪恶二进制</a></li>
                    <li><a href="">开源中国</a></li>
                    <li><a href="">一米一粟</a></li>
                    <li><a href="">Kooteam</a></li>
                    <li><a href="">酷壳</a></li>
                    <li><a href="">子衿</a></li>
                </ul>
                <p className="copyright">Copyright  2015-2020 鄂ICP备15011003号-1</p>
                <div className="bottom">
                    <div class="github-badge">
                        <a rel="license" href="https://kooteam.com/" target="_blank" title="kooteam">
                        <span class="badge-subject">team</span><span class="badge-value bg-blue">Kooteam</span>
                        </a>
                    </div>
                    <div class="github-badge">
                        <a rel="license" href="https://github.com/" target="_blank" title="github">
                        <span class="badge-subject">Link</span><span class="badge-value bg-brightgreen">github</span>
                        </a>
                    </div>
                    <div class="github-badge">
                        <a rel="license" href="https://react.docschina.org/" target="_blank" title="React">
                        <span class="badge-subject">Lang</span><span class="badge-value bg-react">React</span>
                        </a>
                    </div>
                    <div class="github-badge">
                        <a rel="license" href="https://cn.vuejs.org/" target="_blank" title="vue">
                        <span class="badge-subject">Lang</span><span class="badge-value bg-vue">Vue</span>
                        </a>
                    </div>
                    <div class="github-badge">
                        <a rel="license" href="https://www.aliyun.com" target="_blank" title="Aliyun">
                        <span class="badge-subject">CDN</span><span class="badge-value brightgreen">Aliyun</span>
                        </a>
                    </div>
                    <div class="github-badge">
                        <a rel="license" href="https://www.bootcss.com/" target="_blank" title="Bootstarp">
                        <span class="badge-subject">Link</span><span class="badge-value bg-orange">Bootstarp</span>
                        </a>
                    </div>   
                    <div class="github-badge">
                        <a rel="license" href="https://996.icu/" target="_blank" title="支持 996.ICU">
                        <span class="badge-subject">Link</span><span class="badge-value bg-red">996.ICU</span>
                        </a>
                    </div>   
                    <div class="github-badge">
                        <a rel="license" href="https://ant.design/docs/react/customize-theme-cn" target="_blank" title="Antd">
                        <span class="badge-subject">Ant</span><span class="badge-value bg-ant">Antd</span>
                        </a>
                    </div>   
                </div> 
            </div>
        )
    }
}

export default foot;