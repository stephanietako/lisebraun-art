import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss"; // Importez le fichier SCSS

const InstagramRecentPost = () => {
  const [post, setPost] = useState(null); // Contiendra les données du dernier post
  const [error, setError] = useState(null); // Gère les erreurs

  // Fonction pour récupérer les données du backend
  useEffect(() => {
    const url = "http://localhost:5000/api/instagram";

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch the Instagram post");
        }

        const json = await response.json();
        console.log(json);

        // Mettre à jour l'état post avec les données récupérées
        setPost(json);
      } catch (error) {
        console.log("error", error);
        setError(error.message); // Enregistrer l'erreur dans l'état
      }
    };

    fetchData();
  }, []);

  // Afficher l'erreur si elle existe
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Afficher un message de chargement si les données ne sont pas encore disponibles
  if (!post) {
    return <div>Veuillez patienter...</div>;
  }

  return (
    <div className={styles.instagram_recent_post_media}>
      <h1>Galerie Lise Braun</h1>
      <br />
      <h2>Stay updated with the latest post</h2>
      <br />
      <span className={styles.__media}>
        <a href={post.permalink} target="_blank" rel="noopener noreferrer">
          {post.media_type === "IMAGE" ||
          post.media_type === "CAROUSEL_ALBUM" ? (
            <img src={post.media_url} alt={post.caption} />
          ) : post.media_type === "VIDEO" ? (
            <video controls>
              <source src={post.media_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
        </a>
      </span>
      <span className={styles.instagram_recent_post_media__caption}>
        <p>{post.caption}</p>
      </span>
    </div>
  );
};

export default InstagramRecentPost;
