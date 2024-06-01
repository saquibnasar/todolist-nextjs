import Link from "next/link";
import styles from "../Notes.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import CreateNote from "./CreateNote";
async function getNotes() {
  const docSnap = await getDocs(collection(db, "todolist"));
  const data = docSnap.docs.map((doc: any) => {
    return doc.data();
  });
  return data as any[];
}
export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <>
      <div>
        <h1>Notes</h1>
        <div className={styles.grid}>
          {notes?.map((note) => {
            return <Note key={note.id} note={note} />;
          })}
        </div>
        <CreateNote />
      </div>
    </>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};
  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title} </h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
