import Image from "next/image";
import styles from "./page.module.css";
import Chatbot from "./components/chatbot";

export default function Home() {
  return (
    <main className={styles.main}>


          <Chatbot></Chatbot>


    </main>
  );
}
