import * as React from "react"
import "./LoadingBar2.css"

const LoadingBar2 = (props) => {

  React.useEffect(() => {
  }, [props.count])

  const styleBar = {
    width: props.count * 3,
    backgroundColor:  `hsl(${props.count} 70% 50%)`,
    boxShadow: `0px 0px 18px 2px rgb(${255 - props.count * 2.5}, ${props.count * 2.5}, 0, 0.4)`,

  }

  const styleBorder = {
    border:  `4px solid hsl(${props.count} 70% 50%)`,
    boxShadow: `0px 0px 18px 2px rgb(${255 - props.count * 2.5}, ${props.count * 2.5}, 0, 0.25)`,
  }

  const styleLoadingTxt = {
    color: `hsl(${props.count} 70% 50%)`,

  }

  return (
    <>
    <h3>JS injection value :</h3>
    <h2 className="loadnig-percent" style={styleLoadingTxt}>{props.count} %</h2>
    <div className="loading-container" style={styleBorder}>
      <div className="loading-full" style={styleBar}></div>
    </div>
    </>
  )
}

export {LoadingBar2}
