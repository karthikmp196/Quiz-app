import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div id='base'>
        <div id='box'>
            <img style={{width:'50%',height:'50%',marginBottom:'20px'}} src="https://miro.medium.com/v2/resize:fit:1000/1*FBRsnCP9wE84UVW1Kkv5Yw.jpeg" alt="" />
<h3>INSTRUCTIONS</h3>
<ol>
    <li>You will be asked 10 questions one after another</li>
    <li>10 point is awarded to the correct answer</li>
    <li>Each question has four options. You can choose only one option</li>
    <li>The result will be decalred at the end of the quiz</li>
</ol>
<Link to={'/Questions'}> <Button style={{width:'80%'}} variant="warning">Get's START</Button></Link>
        </div>
      
    </div>
  )
}

export default Home
