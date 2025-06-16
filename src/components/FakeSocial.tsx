import React, { useState } from "react";

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

  return (
    <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
      {/* ฟอร์มกรอกข้อมูล */}
      <form
        style={{
          flex: "1 1 300px",
          maxWidth: 350,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          fontFamily: "Sarabun, sans-serif",
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <h2>แก้ไขข้อมูลการโอนเงิน</h2>

        <label>
          ชื่อบัญชีผู้โอน
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            style={inputStyle}
          />
        </label>

        <label>
          เลขบัญชีผู้โอน
          <input
            type="text"
            value={senderAccount}
            onChange={(e) => setSenderAccount(e.target.value)}
            style={inputStyle}
          />
        </label>

        <label>
          ชื่อบัญชีผู้รับ
          <input
            type="text"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            style={inputStyle}
          />
        </label>

        <label>
          เลขบัญชีผู้รับ
          <input
            type="text"
            value={receiverAccount}
            onChange={(e) => setReceiverAccount(e.target.value)}
            style={inputStyle}
          />
        </label>

        <label>
          เลือกธนาคาร
          <select
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            style={inputStyle}
          >
            <option>ธนาคารกสิกรไทย</option>
            <option>ธนาคารกรุงเทพ</option>
            <option>ธนาคารกรุงไทย</option>
            <option>ธนาคารไทยพาณิชย์</option>
            <option>ธนาคารทหารไทย</option>
          </select>
        </label>

        <label>
          จำนวนเงิน (บาท)
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={inputStyle}
          />
        </label>

        <label>
          เวลาโอน
          <input
            type="text"
            value={transferTime}
            onChange={(e) => setTransferTime(e.target.value)}
            placeholder="เช่น 17 มิ.ย. 68 1:15"
            style={inputStyle}
          />
        </label>

        <label>
          ค่าธรรมเนียม
          <input
            type="text"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            style={inputStyle}
          />
        </label>

        <label>
          เลขที่รายการ
          <input
            type="text"
            value={transferId}
            onChange={(e) => setTransferId(e.target.value)}
            style={inputStyle}
          />
        </label>
      </form>

      {/* แสดงสลิป */}
      <div
        style={{
          flex: "1 1 400px",
          width: 400,
          height: 250,
          backgroundImage: "url('/assets/slip-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 10,
          position: "relative",
          fontFamily: "Sarabun, sans-serif",
          color: "#000",
          boxShadow: "0 4px 12px rgb(0 0 0 / 0.1)",
          padding: 20,
          boxSizing: "border-box",
          userSelect: "none",
        }}
      >
        <div style={{ position: "absolute", top: 30, left: 30, fontWeight: "600" }}>
          ชื่อบัญชีผู้โอน: {senderName}
        </div>
        <div style={{ position: "absolute", top: 55, left: 30 }}>
          เลขบัญชีผู้โอน: {senderAccount}
        </div>
        <div style={{ position: "absolute", top: 80, left: 30, fontWeight: "600" }}>
          ชื่อบัญชีผู้รับ: {receiverName}
        </div>
        <div style={{ position: "absolute", top: 105, left: 30 }}>
          เลขบัญชีผู้รับ: {receiverAccount}
        </div>
        <div style={{ position: "absolute", top: 130, left: 30 }}>
          ธนาคาร: {bank}
        </div>
        <div
          style={{
            position: "absolute",
            top: 155,
            left: 30,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          จำนวนเงิน: {amount} บาท
        </div>
        <div style={{ position: "absolute", top: 190, left: 30 }}>
          เวลาโอน: {transferTime}
        </div>
        <div style={{ position: "absolute", top: 215, left: 30 }}>
          ค่าธรรมเนียม: {fee}
        </div>
        <div
          style={{
            position: "absolute",
            top: 240,
            left: 30,
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
  padding: 8,
  borderRadius: 4,
  border: "1px solid #ccc",
  fontSize: 14,
  boxSizing: "border-box",
};

export default FakePayslip;