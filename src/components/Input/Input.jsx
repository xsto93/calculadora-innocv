import React from 'react'

const Input = ({result}) => {
  return (
    <form>
        <input type="text" value={result} onChange={(value) => {}}/>
    </form>
  )
}

Input.propTypes = {
  result: string.isRequired,
}

export default Input