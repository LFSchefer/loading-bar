import * as React from "react"
import { LoadingBar2 } from "./LoadingBar2";


const Conteur = () => {

  let [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (count <= 100) {
      const interval = setInterval(() => {
        setCount((counter) => counter + 1);
      }, 30);
      return () => {
        clearInterval(interval);
      };
    }
    if (count > 100) {
      setCount(0)
    }

  }, [count]);

  return (
    <>
    <div className="separation" style={{marginTop: "100px"}}>
      <LoadingBar2 count={count}/>
    </div>
    </>
  )
}


export {Conteur}
