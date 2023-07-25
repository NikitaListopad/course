import {memo, useContext} from "react";
import {CustomContext} from "../App";

export const Button = memo(function Button({refProp, click}) {

    const context = useContext(CustomContext)
    const changeContextValue = () => {
        context.setCount((prev) => prev + 1)
        console.log('count', context.count)
        // console.log('test')
    }

    console.log('render button')

 return (
     <button type='button' onClick={() => click(changeContextValue)} ref={refProp}>
         CLICK CALLBACK
     </button>
 )
})