const RatingStars = ({ rating = 0, max = 5, fontSize = 20 }) => {
  return (
    <span style={{ display: "inline-flex", gap: "2px" }}>
      {[...Array(max)].map((_, i) => (
        <span
          key={i}
          style={{ color: i < rating ? "gold" : "#000", fontSize: fontSize }}
          dangerouslySetInnerHTML={{
            __html: i < rating ? "&#9733;" : "&#9734;", // ★ ou ☆
          }}
        />
      ))}
    </span>
  );
};

export default RatingStars;
