import Link from 'next/link';
import clientPromise from "../lib/mongodb";
import Layout from '../components/Layout.js';
import styles from '../styles/Items.module.css'; // Assurez-vous d'avoir ce fichier CSS dans votre dossier styles

export default function Items({ items }) {
  return (
    <Layout>
      <div className={styles.itemsContainer}>
        <h1>Article</h1>
        <ul className={styles.itemsList}>
          {items.map((item) => (
            <li key={item._id} className={styles.item}>
              <Link href={`/article/${item._id}`}>
                <a>
                  <h2>{item.name}</h2>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db("items_db");

    const items = await db
      .collection("sport_items")
      .find({})
      .limit(10)
      .toArray();

    return {
      props: { items: JSON.parse(JSON.stringify(items)) },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    // Retournez des props vides ou un message d'erreur si nécessaire
    return {
      props: { items: [], error: "Error fetching data" },
    };
 
  }
}

