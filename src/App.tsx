import { Header } from "./components/header/Header";
import { Post } from "./components/post/Post";

import style from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/sidebar/Sidebar";
const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: "Fernando Duru",
      role: "web Developer",
      avatarUrl: "https://github.com/DuruFernando.png",
    },
    content: `
    <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉 <a href="#">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a> 
            <a href="#">#nlw</a>
            <a href="#">#rocketseat</a>
          </p>
    `,
    publishedAt: new Date("2024-02-25 11:00:00"),
  },
  {
    id: 2,
    author: {
      id: 1,
      name: "Erick Freitas",
      role: "Developer",
      avatarUrl: "https://github.com/NinjaAzul.png",
    },
    content: `
    <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉 <a href="#">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a> 
            <a href="#">#nlw</a>
            <a href="#">#rocketseat</a>
          </p>
    `,
    publishedAt: new Date("2024-02-24 08:00:00"),
  },
];
export function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.id}
            />
          ))}
        </main>
      </div>
    </>
  );
}
