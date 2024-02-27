import { PencilLine } from "@phosphor-icons/react";
import style from "./Sidebar.module.css";
import { Avatar } from "../avatar/Avatar";

export function Sidebar() {
  return (
    <>
      <aside className={style.sidebar}>
        <img
          className={style.cover}
          src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className={style.profile}>
          <Avatar src="https://github.com/DuruFernando.png" />
          <strong>Fernando Duru</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
