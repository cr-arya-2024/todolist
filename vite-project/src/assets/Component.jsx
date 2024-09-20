import React,{ useState } from 'react'
function Component(){
const [tasks,setTask]=useState([])
const [newEle,setNewEle]=useState("")
function handleInputChange(e){
   setNewEle(e.target.value)
}
function add(){
   if(newEle.trim() !==""){
    setTask(t=>[...t,newEle])
    setNewEle("")
   }
}
function remove(index){
    console.log("hello");
   setTask( tasks.filter((_,i)=> i!== index))
   
    
}
function  up(index){
    const update=[...tasks]
if(index >0){
[update[index],update[index-1]]=[update[index-1],update[index]]
setTask(update)

}
}
function down(index){
    const update=[...tasks]
    if(index < tasks.length){
    [update[index],update[index+1]]=[update[index+1],update[index]]
    setTask(update)
}
}
return(<>
<div className='container'>
    <h1 className='tag'>To Do List</h1>
    <input placeholder='Enter The Task... ' type="text" className="input-element"onChange={handleInputChange} value={newEle}/>
    <button onClick={add} className='add-btn'>Add</button>
    <ol>{tasks.map((task,index)=><li key={index} className='li-btn' ><span className='text'>{task}</span>
    <button onClick={()=>remove(index)} className='btn'>Delete</button>
    <button onClick={()=>up(index)} className='btn'>UP</button>
    <button onClick={()=>down(index)} className='btn'>Down</button>
    </li>)}</ol>
</div>
</>)
}
export default Component