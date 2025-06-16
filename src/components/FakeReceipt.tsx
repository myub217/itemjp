import React, { useState } from "react";

const FakeReceipt: React.FC = () => {
  const [storeName, setStoreName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: 24, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>ใบเสร็จปลอม</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label>
              ชื่อร้านค้า: <br />
              <input
                type="text"
                value={storeName}
                onChange={e => setStoreName(e.target.value)}
                required
                style={{ width: "100%", padding: 8 }}
              />
            </label>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>
              วันที่ซื้อ: <br />
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                required
                style={{ width: "100%", padding: 8 }}
              />
            </label>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>
              จำนวนเงิน (บาท): <br />
              <input
                type="number"
                min="0"
                step="0.01"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                required
                style={{ width: "100%", padding: 8 }}
              />
            </label>
          </div>
          <button type="submit" style={{ padding: "8px 16px" }}>
            สร้างใบเสร็จ
          </button>
        </form>
      ) : (
        <div>
          <h3>ใบเสร็จที่สร้าง</h3>
          <p><strong>ร้านค้า:</strong> {storeName}</p>
          <p><strong>วันที่:</strong> {date}</p>
          <p><strong>จำนวนเงิน:</strong> {amount} บาท</p>
          <button onClick={() => setSubmitted(false)}>สร้างใหม่</button>
        </div>
      )}
    </div>
  );
};

export default FakeReceipt;