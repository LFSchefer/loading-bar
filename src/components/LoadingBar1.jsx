import * as React from "react"
import "./LoadingBar1.css"

const LoadingBar1 = (props) => {
  return (
    <>
    <h3>CSS only animation:</h3>

    <div className="bar-inner"></div>
    <div className="bar-back"></div>
    <h3 className="loading-txt">LOADING</h3>
    </>
  )
}


export {LoadingBar1}
