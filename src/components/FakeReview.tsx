// 📁 src/components/FakeReview.tsx
import React, { useState } from "react";

const FakeReview: React.FC = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setRating(5);
    setComment("");
    setSubmitted(false);
  };

  return (
    <div style={{ padding: 24, border: "1px solid #ccc", borderRadius: 8, maxWidth: 400, margin: "auto" }}>
      <h2>รีวิวปลอม</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="name">
              ชื่อ: <br />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="rating">
              คะแนน: <br />
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} ดาว
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="comment">
              ความเห็น: <br />
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                required
              />
            </label>
          </div>
          <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
            ส่งรีวิว
          </button>
        </form>
      ) : (
        <div
          style={{
            border: "1px solid #444",
            padding: 16,
            borderRadius: 4,
            background: "#f9f9f9",
            textAlign: "left",
          }}
        >
          <h3>ขอบคุณสำหรับรีวิวของคุณ!</h3>
          <p>
            <strong>ชื่อ:</strong> {name}
          </p>
          <p>
            <strong>คะแนน:</strong> {rating} ดาว
          </p>
          <p>
            <strong>ความเห็น:</strong> {comment}
          </p>
          <button onClick={handleReset} style={{ marginTop: 12, padding: "6px 12px", cursor: "pointer" }}>
            เขียนรีวิวใหม่
          </button>
        </div>
      )}
    </div>
  );
};

export default FakeReview;