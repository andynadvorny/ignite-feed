import { useState } from 'react';
import { Avatar } from './Avatar';
import { ArrowFatUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleUpvoteComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/andynadvorny.png" alt="Andy Nadvorny" />

      <div className={styles.commentWrapper}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.author}>
              <strong>Andy Nadvorny</strong>
              <time title="feb 22 2023, 09:30" dateTime="2023-02-22 09:30:00">About 1h ago</time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        
        <footer>
          <button onClick={handleUpvoteComment}>
            <ArrowFatUp size={20} />
            Upvote <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}