import { Avatar } from './Avatar';
import { PencilLine } from 'phosphor-react';

import userHeader from '../assets/user-header.png';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={userHeader} />

      <div className={styles.profile}>
        <Avatar src="https://github.com/andynadvorny.png" alt="Andy Nadvorny" />

        <strong>Andy Nadvorny</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>
    </aside>
  )
}