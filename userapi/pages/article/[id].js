import clientPromise from "../../lib/mongodb";
import Layout from '../../components/Layout.js';

export default function Article({ item }) {
  if (!item) {
    return (
      <Layout>
        <p>Article not found</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        {/* Autres détails de l'article */}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const client = await clientPromise;
    const db = client.db("items_db");

    // Utiliser l'id pour récupérer l'article
    const item = await db
      .collection("sport_items")
      .findOne({ _id: new require('mongodb').ObjectId(params.id) });

    return {
      props: { item: item ? JSON.parse(JSON.stringify(item)) : null },
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return {
      props: { item: null },
    };
  }
}
