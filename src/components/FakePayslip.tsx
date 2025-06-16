import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

const FakePayslip: React.FC = () => {
  const [senderName, setSenderName] = useState("สุชานันท์ บัวหลวง");
  const [senderAccount, setSenderAccount] = useState("x-xxx-1234-x");
  const [receiverName, setReceiverName] = useState("วานิตย์ พันนาดอน");
  const [receiverAccount, setReceiverAccount] = useState("x-xxx-1234-x");
  const [bank, setBank] = useState("ธนาคารกสิกรไทย");
  const [amount, setAmount] = useState("100.00");
  const [transferTime, setTransferTime] = useState("17 มิ.ย. 68 1:15");
  const [transferId, setTransferId] = useState("0132242023N7CTRP7Z2L");
  const [fee, setFee] = useState("0.00 บาท");

  const slipRef = useRef<HTMLDivElement>(null);

  const handleSaveImage = async () => {
    if (!slipRef.current) return;

    try {
      const canvas = await html2canvas(slipRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#fff",
      });
      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "fake-slip.png";
      link.click();
    } catch (error) {
      alert("เกิดข้อผิดพลาดในการบันทึกรูปภาพ");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 40,
        flexWrap: "wrap",
        fontFamily: "'Sarabun', sans-serif",
      }}
    >
      {/* ฟอร์มกรอกข้อมูล */}
      <form
        style={{
          flex: "1 1 320px",
          maxWidth: 360,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          padding: 16,
          borderRadius: 8,
          boxShadow: "0 2px 10px rgb(0 0 0 / 0.1)",
          backgroundColor: "#fff",
          minWidth: 300,
          boxSizing: "border-box",
        }}
        onSubmit={(e) => e.preventDefault()}
        aria-label="ฟอร์มแก้ไขข้อมูลสลิปโอนเงิน"
      >
        <h2 style={{ marginBottom: 12, color: "#1A237E" }}>แก้ไขข้อมูลการโอนเงิน</h2>

        {[
          { label: "ชื่อบัญชีผู้โอน", value: senderName, setter: setSenderName, name: "senderName" },
          { label: "เลขบัญชีผู้โอน", value: senderAccount, setter: setSenderAccount, name: "senderAccount" },
          { label: "ชื่อบัญชีผู้รับ", value: receiverName, setter: setReceiverName, name: "receiverName" },
          { label: "เลขบัญชีผู้รับ", value: receiverAccount, setter: setReceiverAccount, name: "receiverAccount" },
          { label: "จำนวนเงิน (บาท)", value: amount, setter: setAmount, type: "number", step: "0.01", name: "amount" },
          { label: "เวลาโอน", value: transferTime, setter: setTransferTime, placeholder: "เช่น 17 มิ.ย. 68 1:15", name: "transferTime" },
          { label: "ค่าธรรมเนียม", value: fee, setter: setFee, name: "fee" },
          { label: "เลขที่รายการ", value: transferId, setter: setTransferId, name: "transferId" },
        ].map(({ label, value, setter, type = "text", step, placeholder, name }) => (
          <label
            key={label}
            style={{ display: "flex", flexDirection: "column", fontWeight: 600, color: "#333" }}
            htmlFor={name}
          >
            {label}
            <input
              id={name}
              name={name}
              type={type}
              step={step}
              value={value}
              placeholder={placeholder}
              onChange={(e) => setter(e.target.value)}
              style={inputStyle}
              autoComplete="off"
              aria-label={label}
            />
          </label>
        ))}

        <label
          style={{ display: "flex", flexDirection: "column", fontWeight: 600, color: "#333" }}
          htmlFor="bankSelect"
        >
          เลือกธนาคาร
          <select
            id="bankSelect"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            style={inputStyle}
            aria-label="เลือกธนาคาร"
          >
            <option>ธนาคารกสิกรไทย</option>
            <option>ธนาคารกรุงเทพ</option>
            <option>ธนาคารกรุงไทย</option>
            <option>ธนาคารไทยพาณิชย์</option>
            <option>ธนาคารทหารไทย</option>
          </select>
        </label>

        <button
          type="button"
          onClick={handleSaveImage}
          style={{
            marginTop: 20,
            padding: "12px 24px",
            backgroundColor: "#1A237E",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 16,
            transition: "background-color 0.3s ease",
          }}
          aria-label="บันทึกรูปภาพสลิป"
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0d154b")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1A237E")}
        >
          บันทึกรูปภาพสลิป
        </button>
      </form>

      {/* แสดงสลิป */}
      <div
        ref={slipRef}
        style={{
          flex: "1 1 400px",
          width: 400,
          height: 260,
          backgroundImage: "url('/assets/slip-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 12,
          position: "relative",
          color: "#000",
          boxShadow: "0 6px 15px rgb(0 0 0 / 0.1)",
          padding: 20,
          boxSizing: "border-box",
          userSelect: "none",
          fontSize: 14,
          lineHeight: 1.3,
          backgroundColor: "#fff", // fallback กรณีภาพไม่โหลด
        }}
        aria-label="ตัวอย่างสลิปโอนเงิน"
      >
        <div style={{ position: "absolute", top: 32, left: 32, fontWeight: "600" }}>
          ชื่อบัญชีผู้โอน: {senderName}
        </div>
        <div style={{ position: "absolute", top: 56, left: 32 }}>
          เลขบัญชีผู้โอน: {senderAccount}
        </div>
        <div style={{ position: "absolute", top: 84, left: 32, fontWeight: "600" }}>
          ชื่อบัญชีผู้รับ: {receiverName}
        </div>
        <div style={{ position: "absolute", top: 108, left: 32 }}>
          เลขบัญชีผู้รับ: {receiverAccount}
        </div>
        <div style={{ position: "absolute", top: 132, left: 32 }}>
          ธนาคาร: {bank}
        </div>
        <div
          style={{
            position: "absolute",
            top: 156,
            left: 32,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          จำนวนเงิน: {amount} บาท
        </div>
        <div style={{ position: "absolute", top: 192, left: 32 }}>
          เวลาโอน: {transferTime}
        </div>
        <div style={{ position: "absolute", top: 216, left: 32 }}>
          ค่าธรรมเนียม: {fee}
        </div>
        <div
          style={{
            position: "absolute",
            top: 244,
            left: 32,
            fontSize: 10,
            color: "#555",
          }}
        >
          เลขที่รายการ: {transferId}
        </div>
      </div>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  borderRadius: 6,
  border: "1px solid #ccc",
  fontSize: 14,
  boxSizing: "border-box",
  transition: "border-color 0.3s ease",
};

export default FakePayslip;