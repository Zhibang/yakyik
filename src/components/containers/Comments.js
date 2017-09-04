import React, {Component} from 'react'
import Comment from '../presentation/Comment'
import styles from '../presentation/styles'
class Comments extends Component{
    constructor(){
        super()
        this.state = {
            comment:{
                username:'',
                body:'',
                timestamp:''
            },
            /*list:[
                {body: 'Comment 1',username: 'dtrump',timestamp:'10:30'},
                {body: 'Comment 2',username: 'hclinton',timestamp:'11:30'},
                {body: 'Comment 3',username: 'gjohson',timestamp:'12:30'}
            ]*/
            list:[]
        }
    }

    submitComment(){
        console.log('submitComment: '+JSON.stringify(this.state.comment))
        let updatedList = Object.assign([],this.state.list)
        updatedList.push(this.state.comment)
        this.setState({
            list: updatedList
        })
    }

    updateUsername(event){
        console.log('updateUsername: '+event.target.value)
        let updatedComment = Object.assign({},this.state.comment)
        updatedComment['username'] = event.target.value
        //updatedComment['body'] = 'Helloooooo!!!!!!!!'
        this.setState({
            comment: updatedComment
        })
    }

    updateBody(event){
        console.log('updateBody: '+event.target.value)
        let updatedComment = Object.assign({},this.state.comment)
        updatedComment['body'] = event.target.value
        this.setState({
            comment: updatedComment
        })
    }
    updateTimeStamp(event){
        console.log('updateTimeStamp: '+event.target.value)
        let updatedComment = Object.assign({},this.state.comment)
        updatedComment['timestamp'] = event.target.value
        this.setState({
            comment: updatedComment
        })
    }
    render(){
        const commentList = this.state.list.map((comment,i)=>{
            return(
                <li key={i}><Comment currentComment={comment} /></li>
            )
        })
        return(
            <div>
                <h2>Comments: Zone 1</h2>
                <div style={styles.comment.commentsBox}>
                    <ul style={styles.comment.commentsList}>
                        { commentList }
                    </ul>
                    <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username"/><br />
                    <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment"/><br />
                    <input onChange={this.updateTimeStamp.bind(this)} className="form-control" type="text" placeholder="time"/><br />
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info" 
                    type="submit">Submit Comment</button>
                </div>
            </div>
        )
    }
}
export default Comments