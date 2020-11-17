import React from 'react';
// import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  // CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
// import RadialSeparators from "./RadialSeparators";
/////////Example Function///////
function Example(props) {
    return (
      <div style={{  }}>
        {/* <hr style={{ border: "2px solid #ddd" }} /> */}
        <div >
          <div style={{ width: "60px",padding:'5px',margin:'auto'}}>{props.children}</div>
         
        </div>
      </div>
    );
  }



///////////
// const percentage = 45;

const ProgressBar=(props)=>{
    return(
        <div>
   
   

    <Example>
      <CircularProgressbar 
        value={props.valueEnd}
        text={`${props.valueEnd}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#081C22",
          textColor: "#fff",
          pathColor: "#1FBB6F",
          trailColor: "transparent"
        })}
      />
    </Example>
  

   
   
  
  </div>
    )
}


export default ProgressBar