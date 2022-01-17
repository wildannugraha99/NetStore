import { useState } from "react";
import "./Loading.scss"
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: "#00BFA6";

`;

function App() {
  
  return (
    <div className="sweet-loading">
      <PuffLoader color={"#00BFA6"}  css={override} size={200} />
    </div>
  );
}

export default App;