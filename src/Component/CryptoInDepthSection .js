"use client";

import React from "react";
import dep1 from "../Assests/depth1.png";
import dep2 from "../Assests/depth2.png";
import dep3 from "../Assests/depth3.png";
import dep4 from "../Assests/depth4.png";

const inDepthArticles = [
  {
    id: 1,
    title:
      "Bitcoin hashrate down 15%, 26 firms add BTC to balance sheets: June in charts",
    image: dep1,
  },
  {
    id: 2,
    title: "Bitcoin loans are back, rewriting the book Celsius burned",
    image: dep2,
  },
  {
    id: 3,
    title: "US home mortgage regulator considers Bitcoin amid housing crisis",
    image: dep3,
  },
  {
    id: 4,
    title: "June remains Bitcoin's danger zone, while S&P 500 eyes summer rally",
    image: dep4,
  },
];

const CryptoInDepthSection = () => {
  return (
    <div style={styles.container}>
      <style>{cssStyles}</style>

      <div style={styles.header}>
        <h1 style={styles.title}>Crypto In-Depth</h1>
      </div>

      {/* Horizontally aligned cards */}
      <div style={styles.rowWrap}>
        {inDepthArticles.map((article) => (
          <article key={article.id} style={styles.articleCard} className="article-card">
            <div style={styles.imageContainer} className="image-container">
              <img
                src={article.image}
                alt={article.title}
                style={styles.articleImage}
                className="article-image"
              />
            </div>
            <h3 style={styles.articleTitle} className="article-title">
              {article.title}
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 8px",
    backgroundColor: "#ffffff", // white bg
    color: "#000000", // black text
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "32px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#000000",
  },
  rowWrap: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "nowrap",
  },
  articleCard: {
    width: "23%",
    flexShrink: 0,
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: "8px",
    marginBottom: "12px",
    background: "linear-gradient(45deg, #f3f3f3, #e5e5e5)",
  },
  articleImage: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  articleTitle: {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "1.4",
    color: "#000000",
    transition: "color 0.2s ease",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
};

// Additional CSS
const cssStyles = `
  .article-card:hover {
    transform: translateY(-4px);
  }

  .article-card:hover .article-image {
    transform: scale(1.05);
  }

  .article-card:hover .article-title {
    color: #EAB308 !important;
  }

  @media (max-width: 1024px) {
    .article-card {
      width: 48%;
    }
  }

  @media (max-width: 640px) {
    .article-card {
      width: 100%;
    }
  }
`;

export default CryptoInDepthSection;
