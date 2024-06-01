"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "todolist"), {
        title: title,
        content: content,
      });
      console.log("Document written with ID: ", docRef.id);

      setContent("");
      setTitle("");

      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}
