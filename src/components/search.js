import React from 'react';
import ItemArticle from '../components/article/item';
import util from '../utils/index';


class Search extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
          articleList: []
      }
    }
    getData = () => {
        util.get('/blog/home/jsonSearch/' +  this.props.match.params.keyword).then((data) => {
          this.setState({articleList: data});
        })
    }
    componentDidMount() {
       this.getData();
    }
    render() {
        let DOM = this.state.articleList.map((item, index) => ( <ItemArticle key={index} item={item}></ItemArticle>))
        return (
            <div className="container home-main serch-blog">
               {DOM}
            </div>
        )
    }
}

export default Search;