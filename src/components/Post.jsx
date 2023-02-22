import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/andynadvorny.png" alt="Andy Nadvorny" />

          <div className={styles.info}>
            <strong>Andy Nadvorny</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="feb 22 2023, 09:30" dateTime="2023-02-22 09:30:00">Published 1h ago</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉&nbsp;<a hreef="#">jane.design/doctorcare</a></p>

        <p><a>#novoprojeto</a>&nbsp;<a>#nlw</a>&nbsp;<a>#rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea
          placeholder="Leave a comment"
        />

       <footer>
          <button type="submit">
            Publish
          </button>
       </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}