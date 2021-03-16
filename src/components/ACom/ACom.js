import React, { useEffect, useState } from 'react';
import { Button } from 'antd';


export default function ACom() {
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
    <Button type="primary" onClick={handleClick}>Button</Button>
  )
}