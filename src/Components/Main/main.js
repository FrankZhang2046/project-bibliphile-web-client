import React from 'react';
import '../../styles/main.scss';
import Form from '../Form/form';
import ResultCard from '../ResultCard/ResultCard';
import Axios from 'axios';
import ResultArea from '../ResultArea/ResultArea';

class Main extends React.Component{
    state={
        searchResult: []
    }

    handleQuery=(queryString)=>{
        Axios.post('http://localhost:8080/search', {
            searchQuery: queryString
        })
             .then((response)=>{
                 this.setState({searchResult: response.data});
                 console.log(this.state.searchResult);
             })
             .catch((error)=>{console.log(error);
             })
    }

    render(){
        return(
            <div>
                <Form handleQuery={this.handleQuery}/>
                <ResultArea data={this.state.searchResult}/>
            </div>
        )
    }
}

export default Main;