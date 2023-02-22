import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment() {
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

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        
        <footer>
          <button>
            <ThumbsUp size={20} />
            Upvote <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}