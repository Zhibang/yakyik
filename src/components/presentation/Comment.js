import React, {Component} from 'react'

class Comment extends Component{

    render(){
        return(
            <div>
                <p style={{fontSize:20,fontWeight:600}}>
                    {this.props.currentComment.username}
                </p>
                <span style={{fontWeight:200}}>{this.props.currentComment.body}</span>
                <span style={{fontWeight:200, marginLeft:12, marginRight:12}}>|</span>
                <span style={{fontWeight:200}}>{this.props.currentComment.timestamp}</span>
                <hr />
            </div>
        )
    }
}
export default Comment