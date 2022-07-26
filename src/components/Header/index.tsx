import React, { useState } from "react";
import styles from "./styles.module.scss";

import { Link } from "react-router-dom";
import { Bell, CaretDown, Plus, SignOut } from "phosphor-react";

import { Hamburger } from "../Hamburger";

type Props = {
  profile: {
    avatar: string;
    name: string;
  };
};

export function Header({ profile }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className={styles.header}>
        <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <nav className={styles.nav}>
          <Link className={styles.logo} to="/">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="octicon octicon-mark-github v-align-middle"
            >
              <path
                fill-rule="evenodd"
                fill="#fff"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </Link>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search or jump to..." />
          </div>
          <ul>
            <li>
              <Link to="#">Pull requests</Link>
            </li>
            <li>
              <Link to="#">Issues</Link>
            </li>
            <li>
              <Link to="#">Marketplace</Link>
            </li>
            <li>
              <Link to="#">Explore</Link>
            </li>
          </ul>
        </nav>
        <section className={styles.actions}>
          <button className={styles.notificationsButton}>
            <Bell size={20} color="#fff" />
          </button>
          <button className={styles.newButton}>
            <Plus size={20} color="#fff" />
            <CaretDown size={10} weight="fill" color="#fff" />
          </button>
          <button className={styles.profileButton}>
            <img src={profile.avatar} alt={profile.name} />
            <CaretDown size={10} weight="fill" color="#fff" />
          </button>
        </section>
      </header>

      {isMenuOpen && (
        <nav className={styles.mobileMenu}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search or jump to..." />
          </div>
          <ul>
            <li>
              <Link to="#">Dashboard</Link>
            </li>
            <li>
              <Link to="#">Pull requests</Link>
            </li>
            <li>
              <Link to="#">Issues</Link>
            </li>
            <li>
              <Link to="#">Marketplace</Link>
            </li>
            <li>
              <Link to="#">Explore</Link>
            </li>
            <li>
              <Link to="#">Codespaces</Link>
            </li>
            <li>
              <Link to="#">Sponsors</Link>
            </li>
            <li>
              <Link to="#">Settings</Link>
            </li>
            <li>
              <Link to="#">
                <img src={profile.avatar} alt={profile.name} />
                <span>{profile.name}</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <SignOut size={16} color="#fff" />
                <span>Sign Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
