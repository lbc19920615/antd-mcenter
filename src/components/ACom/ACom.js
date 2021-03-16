import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'antd';
import { ThemeContext } from '../../context/themes';


export default function ACom() {
  const theme = useContext(ThemeContext);

  const [count, setCount] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    console.log(timeoutId)
    document.title = `set count times ${count}`
    return () => {

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  function handleClick() {
    let timeoutId = setTimeout(() => {
      setCount(count + 1)
    }, 100)
    setTimeoutId(timeoutId)
  }

  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      <Button type="primary" onClick={handleClick}>Button</Button>
    </div>
  )
}