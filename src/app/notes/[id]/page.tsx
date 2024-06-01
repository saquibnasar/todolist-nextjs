import styles from "../../Notes.module.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
async function getNote(noteId: string) {
  const q = query(collection(db, "todolist"), where("id", "==", noteId));

  const querySnapshot = await getDocs(q);

  const schoolData = querySnapshot.docs.map((doc) => {
    return doc.data();
  });

  return schoolData as any[];
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  const { id, title, content, created } = note[0] || {};
  console.log(note);

  return (
    <div>
      <h1>notes/{id}</h1>
      <div className={styles.note}>
        <h3>{title}</h3>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </div>
  );
}
