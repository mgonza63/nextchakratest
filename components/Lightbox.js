import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
export default function Lightbox(props) {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Show All Images <ArrowForwardIcon /> </button>
      <FsLightbox
        toggler={toggler}
        sources={props.gallery}
      />
      <style jsx>{`
      button {
        color: #1A202C;
        border-radius: 3px;
        padding: 15px;

        transition: all 200ms ease-in;
      }
      button:hover {
        opacity: .75;
        background-color: #F7FAFC;
      }

      `}</style>
    </>
  );
}
