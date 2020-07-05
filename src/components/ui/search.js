import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onChangeValue = (q) => {
        setText(q);
        getQuery(q)
    }

  return (
    <div className="search">
      <form>
          <input type="text" 
          className="form-control"
          placeholder="search characters..." 
          value={text}
          onChange={(e) => onChangeValue(e.target.value)}
          autoFocus />
      </form>
    </div>
  )
}

export default Search
