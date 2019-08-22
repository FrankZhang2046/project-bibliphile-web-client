import React from 'react';
import ResultCard from '../ResultCard/ResultCard';

export default class ResultArea extends React.Component{
    state={
       data:[] 
    }

    componentDidMount(){
        this.setState({data: this.props.data})
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.data !== this.props.data) {
            this.setState({data: this.props.data})
        }
    }

    render(){
        return(
            <div>
                {this.state.data.map((item)=>{
                    return <ResultCard {...item.volumeInfo}/>
                })}
            </div>
        )
    }
}
