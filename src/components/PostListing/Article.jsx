import React from "react";
import Thumbnail from "./Thumbnail";
import PostInfo from "./PostInfo";
import "./Article.scss";

const Article = ({ post, hasThumbnail }) => (
  <article key={post.title}
    className="article-container padding-bottom-2 padding-top-1 border-bottom border-color-light-grey"
  >
    {hasThumbnail && <Thumbnail post={post} />} 
    <div> <PostInfo post={post} /> </div>
   </article>
);

export default Article;
