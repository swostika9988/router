import React, { useState } from 'react'

function Service() {
  const [check,setCheck]=useState(true);
  const toggleValue=()=>{
  setCheck(prev=>!prev);
  }

  return (
    <>
    <div>
      {check?"true":"false"}
    </div>
    <button onClick={toggleValue}>
      Toggle
    </button>
    </>
  )
}

export default Service