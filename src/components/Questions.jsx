import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Qbank from '../Ques'

import { Link } from 'react-router-dom'

function Questions() {

const[currentQn,setCurrentQn]=useState(0)
const [answers,setAnswers]=useState([])
const[score,setScore]=useState(0)
const[showScore,setShowScore]=useState(false)
const nextQn = currentQn
 
const next=()=>{
 
    if(currentQn+1<Qbank.length)
    {
      setCurrentQn(currentQn+1)
    }
    else{
     
      setShowScore(true)
    }
   
  }

const scored=(opt)=>{
  if(Qbank[currentQn].Answer==opt)
  {
    setScore(score+1)
    
    
  }
}
console.log(score);





  return (
  
    <div id='base2'>
  <div id='box2'>
    {
      showScore==true?
      <div>
       <h1><i>Congratulations</i></h1>
       <h3> Test completed</h3>
       <h4>You Scored {score}</h4>
      <Link to={'/'} > <Button style={{width:'40%'}} className='btn' variant="warning"  >Go to home</Button></Link>

      </div>
    :
   <div  >
      <div id='Qsn' >
     <h3> Question.no:{Qbank[currentQn].id}</h3>
     <p>{Qbank[currentQn].question}</p>
      
      <ul>
      {Qbank[currentQn].options.map((opt,index)=>(
        <li key={index}>
          <input style={{margin:'10px',width:'100%'}} type="button"
          name={`Qbank${currentQn}`}
          value={opt}
          onClick={()=>scored(opt)
          
          }
          />
      
        </li>
      )
  
      )}
      
      </ul>
      <Button className='btn' variant="warning" onClick={next} >Next</Button>
      </div>
      
   </div>
}
   
    </div>  
    
     </div>
    
  )
}

export default Questions
