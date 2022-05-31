import React from "react";
import AutoLink from "../AutoLink/AutoLink";
import PostDate from "../Post/PostDate";

const PostInfo = ({ post, extraClass = "" }) => (
  <div className={`post-info-wrapper ${extraClass}`}>
    <AutoLink to={post.slug} key={post.title}>
      <h5>
        <small>{post.title}</small>
      </h5>
    </AutoLink>
    <small>
      <div className="margin-bottom-half"> {post.excerpt.substring(0,70)+'...'}</div>
      <PostDate date={post.date} />
    </small>
  </div>
);

export default PostInfo;
