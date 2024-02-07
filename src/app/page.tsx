import Image from "next/image";
import styles from "./page.module.css";
import Chatbot from "./components/chatbot";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <>
        <Header />
        <Chatbot></Chatbot>
      </>
    </main>
  );
}
