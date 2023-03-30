import React, { Component } from 'react'

export default class ClassCmp extends Component {
     state={
        name:"",
        dept:"",
        rating:'',
        data:[]
     }
     handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
     }

     handleSubmit=()=>{
        const ObjData={
            name:this.state.name,
            dept:this.state.dept,
            rating:this.state.rating,

        }
        const arr=this.state.data;
        arr.push(ObjData)
        this.setState({[this.state.data]: arr})
        console.log(this.state.name)
        // console.log(this.state.dept)
        console.log(this.state.data)
    } 
  render() {
    return (
        
      <div>
        <label className='jyt-ti'>Name:</label>
        <input placeholder='Enter name' name='name' className='name-me' onChange={this.handleChange}/>

        <label className='Dept-te'>Department:</label>
        <input placeholder='Enter Department' name='dept' className='dept'onChange={this.handleChange}/>

        <label className='Rating'>Rating :</label>
         <input placeholder='Enter Department' name='rating' className='rating'onChange={this.handleChange}/>

        <button onClick={this.handleSubmit} className='Submit'>Submited</button>
         
         <div >
        {this.state.data.map((item,index)=>{
            return(
                <h1 key={index} className='conic'>{item.name} || {item.dept} ||{item.rating}</h1>
            
            )
        })}
        </div>
      </div>
    )
  }
}


// // const { Component } = require("react");

// // class ClassCompo extends Component{
// //     state = {
// //         name: "",
// //         dept: "",
// //         data: []
// //     }

// //     handleChange = (e) => {
// //         this.setState({[e.target.name] : e.target.value})
// //         // this.setState({[e.target.name] : e.target.value})
        
// //     }

// //     handleSubmit = () => {
// //         const ObjData = {
// //             name: this.state.name,
// //             dept: this.state.dept,
// //         }
// //         const arr = this.state.data;
// //         arr.push(ObjData);
// //         console.log(arr);
// //         // this.state.data.push(ObjData)
        
// //         // this.setState({[this.state.data]: arr})
// //         this.setState(this.state.data = arr)
// //         console.log(this.state.name);
// //         console.log(this.state.data);
// //     }

// //     render(){
// //         return (
// //         <>
// //             <input placeholder="Enter Name" name="name" onChange={this.handleChange} />
// //             <input placeholder="Enter Dept" name="dept" onChange={this.handleChange} />
// //             <button onClick={this.handleSubmit}>Submite</button>

// //             {this.state.data.map((item, index) => {
// //                 return(
// //                     <h1 key={index}> {item.name}  || {item.dept} </h1>
// //                 )
// //             })}
// //         </>
// //         )
// //     }
// // }

// // export default ClassCompo;