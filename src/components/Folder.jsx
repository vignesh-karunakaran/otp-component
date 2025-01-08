import React from "react";
import { useState } from "react";
const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);



  if(explorer.isFolder) {
  return (
    <div style={{marginTop: 5}}>
     <div className="folder" onClick={() => setExpand(!expand)}>
      <span>📁{explorer.name}</span>
    </div>
    <div>
      {expand && explorer.items.map((exp)=> {
        return <Folder explorer={exp} />;
      })}
    </div> 
    </div>);
  } else {
    return (
      <span className="file">📃{explorer.name}</span>
    )
  }
};

export default Folder;
