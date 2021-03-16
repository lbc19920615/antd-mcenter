import React, { useEffect, useState, useContext, useCallback, useReducer} from 'react';
import { Button } from 'antd';
import { ThemeContext } from '../../context/themes';

const initialState = {count: 0};

// 第二个参数：state的reducer处理函数
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}


export default function ACom() {
  const { theme, setTheme, themes } = useContext(ThemeContext)
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const [timeoutId, setTimeoutId] = useState(null);



  useEffect(() => {
    // console.log(timeoutId)
    document.title = `set count times ${state.count}`
    return () => {

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.count])

  let handleClick = useCallback(() => {
    let timeoutId = setTimeout(() => {
      dispatch({
        type: 'increment'
      })
    }, 100)
    setTimeoutId(timeoutId)
  }, [state.count])



  let handleChangeTheme = useCallback(() => {
    setTheme(theme == "dark" ? "light" : "dark")
  })

  return (
    <div style={{ background: themes[theme].background, color: themes[theme].foreground }}>
      <Button type="primary" onClick={handleClick}>Button</Button>
      <Button type="primary" onClick={handleChangeTheme}>change theme</Button>
    </div>
  )
}