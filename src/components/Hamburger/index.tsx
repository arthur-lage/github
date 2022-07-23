import { List } from "phosphor-react";

import styles from './styles.module.scss'

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
};

export function Hamburger({ isMenuOpen, setIsMenuOpen }: Props) {
  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={styles.container}
    >
      <List color="#fff" size={28} />
    </button>
  );
}
