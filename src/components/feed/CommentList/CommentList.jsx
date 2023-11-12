import React from 'react'

import commentsPost from "../../../mocks/response-comments-post.json";
import { CommentItem } from '../CommentItem/CommentItem';


export const CommentList = () => {
  return (
    <section className='comment-list'>
      <article className="comment-list__wrapper">
        <div className="comments-select">
          <h3>MOST RECENT</h3>
        <select name="" id=""></select>
        </div>
        <div className="comments-list">
        {commentsPost.map((comment) => {
          return <CommentItem key={comment._id} comment={comment} />;
        })}
        </div>
      </article>
    </section>
  )
}
