import Image, { type ImageProps } from "next/image";
import styles from "../../page.module.css";

export default function AnnoucementPage() {
  return (
        <main className={styles.main}>
            <h1>Annoucments for [Class]</h1>
            <hr></hr>
            <div>
                <h2>
                   <Image aria-hidden src="/globe.svg" alt="Globe icon" width={32} height={32}/>
                    {" "}Here is an annoucement!
                </h2>
            </div>
            <hr></hr>
            <div>
                <h2>
                   <Image aria-hidden src="/globe.svg" alt="Globe icon" width={32} height={32}/>
                    {" "}Here is an another!
                </h2>
            </div>
        </main>
    )
}