import React,{Component} from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'
class Zones extends Component{
    constructor(){
        super()
        this.state={
            zone:{
                name:'',
                zipCode:''
            },
            /*list:[
                {name:'Zone 1',zipCode:'10012',numComments:10},
                {name:'Zone 2',zipCode:'10013',numComments:10},
                {name:'Zone 3',zipCode:'10014',numComments:10}
            ]*/
            list:[]
        }
    }

    componentDidMount(){
        console.log('componentDidMount')

        superagent
        .get('/api/zone')
        .query(null)
        .set('Accept','application/json')
        .end((err,res) =>{ 
            if(err){
                alert('ERROR: '+err)
                return
            }
            console.log(JSON.stringify(res.body))
            let results = res.body.results;
            //let history = Object.assign([],this.state.list)
            //history.push({name:results.name,})
            this.setState({
                list:results
            })
        })
    }
    addZone(){
        console.log("Add Zone: "+JSON.stringify(this.state.zone))
        let updatedZone = Object.assign([],this.state.list)
        updatedZone.push(this.state.zone)
        this.setState({
            list: updatedZone
        })
    }
    updateZone(event){
        console.log("updateZone: "+event.target.value)
        let updatedZone = Object.assign({},this.state.zone)
        updatedZone[event.target.id] = event.target.value
        this.setState({
            zone: updatedZone
        })
    }
    
    render(){

        const listItems=this.state.list.map((zoneitem,i)=>{
            return(
                <li key={i}><Zone currentZone={zoneitem} /></li>
            )
        })
        return (
            <div>
                <ol>
                    {listItems}
                </ol>
                <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zone Name" /><br />
                <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code" /><br />
                
                <button onClick={this.addZone.bind(this)} className="btn btn-danger" type="submit">Add Zone</button>
            </div>
        )
    }
}

export default Zones 