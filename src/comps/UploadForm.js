import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const UploadForm = () => {
  const types = ["image/jpeg", "image/png"];
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFile = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select the appropriate file type");
    }
  };

  return (
    <>
      <form>
        <label>
          <input type="file" onChange={handleFile} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div className="file">{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </>
  );
};

export default UploadForm;
