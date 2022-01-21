import React, { useState, useEffect } from "react";
import MenuItem from "../Menu-Item/MenuItem";
import DIRECTORY_DATA from "./directory-data.js";

import "./Directory.scss";

const Directory = (props) => {
  const [sections, setSections] = useState(DIRECTORY_DATA);
  
  return (
    <div className="directory-menu">
      {sections.map(({id, title, imageUrl, size, linkUrl}) => (
        <MenuItem 
        key={id} 
        title={title} 
        imageUrl={imageUrl}
        linkUrl={linkUrl}
        size={size} />
      ))}
    </div>
  );
};

export default Directory;