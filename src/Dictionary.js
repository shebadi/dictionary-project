import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }
  function handlePexelResponse(response) {
    console.log(response);
  }
  function search() {
    //documentation :https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000171b2dcf9b53f44d9a993e64f6a95360e";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;

    let header = { Authorization: `Bearer${pexelsApiKey}` };
    axios.get(pexelApiUrl, { headers: header }).then(handlePexelResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
              autoFocus={true}
            />
          </form>
          <div className="hint">
            suggested words: sunset,wine,yoga,plant,...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
