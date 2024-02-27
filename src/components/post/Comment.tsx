import { ThumbsUp, Trash } from "@phosphor-icons/react";
import style from "./Comment.module.css";
import { Avatar } from "../avatar/Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleOnDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // setLikeCount(likeCount + 1);

    /// assim garante que pega o valor atualizado de likes
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <>
      <div className={style.comment}>
        <Avatar src="https://github.com/DuruFernando.png" hasBorder={false} />

        <div className={style.commentBox}>
          <div className={style.commentContent}>
            <header>
              <div className={style.authorAndTime}>
                <strong>Fernando Duru</strong>
                <time
                  title="24 de Fevereiro às 12h04"
                  dateTime="2024-02-24 13:04"
                >
                  Cerca de 1h atrás
                </time>
              </div>

              <button
                onClick={handleOnDeleteComment}
                title="Deletar comentário"
              >
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp size={20} />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
