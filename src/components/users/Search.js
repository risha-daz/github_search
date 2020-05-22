import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  const onType = (e) => {
    setText(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (text === "") {
      githubContext.onAlert("Please enter something", "light");
    } else {
      githubContext.onSubmit(text);
      setText("");
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSearch}>
        <input
          type='text'
          name='text'
          placeholder='Search...'
          value={text}
          onChange={onType}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.onClear}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
