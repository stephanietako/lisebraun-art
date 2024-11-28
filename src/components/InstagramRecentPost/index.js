import React, { useEffect, useState } from "react";

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
    <div
      className="instagram_recent_post_media"
      style={{
        display: "flex",
        width: "auto",
        height: "auto",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          display: "block",
          marginBottom: "1rem",
        }}
      >
        Découvrez notre dernière publication Instagram
      </p>
      <span
        className="__media"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          alignItems: "center",
          flexDirection: "column",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        <a href={post.permalink} target="_blank" rel="noopener noreferrer">
          {post.media_type === "IMAGE" ||
          post.media_type === "CAROUSEL_ALBUM" ? (
            <img
              width={400}
              height={400}
              src={post.media_url}
              alt={post.caption}
              style={{ objectFit: "contain" }}
            />
          ) : post.media_type === "VIDEO" ? (
            <video width={400} height={400} controls>
              <source src={post.media_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
        </a>
      </span>

      <span
        className="instagram_recent_post_media__caption"
        style={{
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "18px",
          }}
        >
          {post.caption}
        </p>
      </span>
    </div>
  );
};

export default InstagramRecentPost;
