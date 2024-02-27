import DOMPurify from "dompurify";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "../avatar/Avatar";
import { Comment } from "./Comment";
import style from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: string;
}
export function Post({ author, publishedAt, content }: PostProps) {
  /// DATA PUBLICACAO
  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  /// CONTEUDO
  const contentSanitized = {
    __html: DOMPurify.sanitize(content),
  };

  /// COMMENT
  const [comments, setComments] = useState(["Post interessante"]);
  const [newComment, setNewComment] = useState("");

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");

    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedone = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedone);
  }

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <>
      <article className={style.post}>
        <header>
          <div className={style.author}>
            <Avatar src={author.avatarUrl} />
            <div className={style.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time
            title={publishedDateFormated}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={style.content}>
          <div dangerouslySetInnerHTML={contentSanitized}></div>
        </div>

        <form onSubmit={handleCreateNewComment} className={style.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            name="comment"
            placeholder="Deixe um comentário"
            value={newComment}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />

          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>
              Publicar
            </button>
          </footer>
        </form>

        <div className={style.commentList}></div>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </article>
    </>
  );
}
