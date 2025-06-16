import React, { useState } from "react";

const FakeIDCard: React.FC = () => {
  const [idNumber, setIdNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: 24, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>บัตรประชาชนปลอม</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label>
              เลขบัตรประชาชน: <br />
              <input
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                maxLength={13}
                pattern="\d{13}"
                placeholder="เลข 13 หลัก"
                required
                style={{ width: "100%", padding: 8 }}
              />
            </label>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>
              ชื่อ-สกุล: <br />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                style={{ width: "100%", padding: 8 }}
              />
            </label>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>
              วันเดือนปีเกิด: <br />
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                style={{ width: "100%", padding: 8 }}
              />
            </label>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>
              ที่อยู่: <br />
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                required
                style={{ width: "100%", padding: 8 }}
              />
            </label>
          </div>
          <button type="submit" style={{ padding: "8px 16px" }}>
            สร้างบัตรประชาชนปลอม
          </button>
        </form>
      ) : (
        <div>
          <h3>ข้อมูลบัตรประชาชนปลอม</h3>
          <p><strong>เลขบัตรประชาชน:</strong> {idNumber}</p>
          <p><strong>ชื่อ-สกุล:</strong> {fullName}</p>
          <p><strong>วันเดือนปีเกิด:</strong> {dob}</p>
          <p><strong>ที่อยู่:</strong> {address}</p>
          <button onClick={() => setSubmitted(false)}>สร้างใหม่</button>
        </div>
      )}
    </div>
  );
};

export default FakeIDCard;