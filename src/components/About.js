import React, {useState} from 'react'

export default function About(props) {

// const [myStyle, setmyStyle] = useState(
// {
//     color:'white',
//     backgroundColor: 'black'
  
// })

let myStyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'#4B4453':'white'
}

  return (
   <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>About Us</h1>
   <div className="accordion" id="accordionExample" style={myStyle}>
<div className="accordion-item">
<h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
Analyze your text
    </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.
    </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
   Free to use
    </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.
    </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Team
    </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. 
    </div>
</div>
</div>
</div>
</div>
  )
}
