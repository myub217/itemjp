import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-6 h-6 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118l-3.388-2.454a1 1 0 00-1.176 0l-3.388 2.454c-.785.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.04 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
  </svg>
);

const FakeReview: React.FC = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const previewRef = useRef<HTMLDivElement>(null);

  const handleCopyText = () => {
    if (!previewRef.current) return;
    navigator.clipboard.writeText(previewRef.current.innerText).then(() => {
      alert("คัดลอกข้อความรีวิวเรียบร้อยแล้ว!");
    });
  };

  const handleDownloadImage = async () => {
    if (!previewRef.current) return;
    try {
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: null,
        scale: 2,
      });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `fake-review-${name || "anonymous"}.png`;
      link.click();
    } catch (err) {
      alert("เกิดข้อผิดพลาดในการดาวน์โหลดรูปภาพ");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded space-y-6">
      <h1 className="text-xl font-bold text-center mb-4">เครื่องมือสร้างรีวิวปลอม</h1>

      <div className="space-y-2">
        <label className="block font-semibold">ชื่อผู้รีวิว</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="เช่น สมชาย"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="block font-semibold">คะแนนดาว</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              onClick={() => setRating(i)}
              aria-label={`${i} ดาว`}
              className="focus:outline-none"
            >
              <Star filled={i <= rating} />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block font-semibold">ข้อความรีวิว</label>
        <textarea
          className="w-full border rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="เขียนข้อความรีวิวของคุณ"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>

      <div className="border rounded p-4 bg-gray-50" ref={previewRef} aria-live="polite" aria-atomic="true">
        <p className="font-semibold mb-1">{name || "ชื่อผู้รีวิว"}</p>
        <div className="flex mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} filled={i <= rating} />
          ))}
        </div>
        <p className="whitespace-pre-wrap">{review || "ข้อความรีวิวจะปรากฏที่นี่..."}</p>
      </div>

      <div className="flex space-x-4 justify-center">
        <button
          onClick={handleCopyText}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          คัดลอกข้อความรีวิว
        </button>
        <button
          onClick={handleDownloadImage}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          ดาวน์โหลดรูปภาพรีวิว
        </button>
      </div>

      <footer className="text-center text-xs text-gray-400 mt-6">
        © 2025 JP Visual & Docs - เครื่องมือปลอมทั้งหมดเพื่อการศึกษาทดลองเท่านั้น
      </footer>
    </div>
  );
};

export default FakeReview;