import Image, { type ImageProps } from "next/image";
import styles from "../../page.module.css";
import "./../../dashboard/dashboard.css";

export default function AssignmentPage() {
  return (
        <main className={styles.main}>
            <h1>Here are your assignments</h1>
            <div>
                <h2>
                    {/* Dummy button */}
                    <button className="courseButton" style={{width: "20px"}}></button>
                    Assignment 1
                </h2>
            </div>
            <hr></hr>
            <div>
                <h2>
                    <button className="courseButton" style={{width: "20px"}}></button>
                    Assignment 2s
                </h2>
            </div>
        </main>
    )
}