import MenuItem from "../Menu-Item/MenuItem";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./Directory.scss";

const Directory = () => {
  const state = useSelector(state => state);
  const sections = selectDirectorySections(state);
  
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