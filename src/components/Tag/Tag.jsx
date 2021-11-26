import React from "react";
import AutoLink from "../AutoLink/AutoLink";
import { getTagPath } from "../../utils/helpers";

const Tag = ({ content }) => (
  <AutoLink
    key={content}
    to={getTagPath(content)}
    className="inline-block small-text 
      border border-color-light-grey padding-left-half padding-right-half"
  >
    <span>{content}</span>
  </AutoLink>
);

export default Tag;
