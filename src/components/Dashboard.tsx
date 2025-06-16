import React, { useState } from "react";
import FakeReview from "./FakeReview";
import FakeReceipt from "./FakeReceipt";
import FakeIDCard from "./FakeIDCard";
import FakeSocial from "./FakeSocial";
import FakePayslip from "./FakePayslip";

const Dashboard: React.FC = () => {
  const [activeTool, setActiveTool] = useState<
    "review" | "receipt" | "idcard" | "social" | "payslip"
  >("review");

  const renderTool = () => {
    switch (activeTool) {
      case "review":
        return <FakeReview />;
      case "receipt":
        return <FakeReceipt />;
      case "idcard":
        return <FakeIDCard />;
      case "social":
        return <FakeSocial />;
      case "payslip":
        return <FakePayslip />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav style={navStyle}>
        <button
          onClick={() => setActiveTool("review")}
          style={activeTool === "review" ? activeBtn : normalBtn}
        >
          รีวิวปลอม
        </button>
        <button
          onClick={() => setActiveTool("receipt")}
          style={activeTool === "receipt" ? activeBtn : normalBtn}
        >
          ใบเสร็จปลอม
        </button>
        <button
          onClick={() => setActiveTool("idcard")}
          style={activeTool === "idcard" ? activeBtn : normalBtn}
        >
          บัตรประชาชนปลอม
        </button>
        <button
          onClick={() => setActiveTool("social")}
          style={activeTool === "social" ? activeBtn : normalBtn}
        >
          โซเชียลปลอม
        </button>
        <button
          onClick={() => setActiveTool("payslip")}
          style={activeTool === "payslip" ? activeBtn : normalBtn}
        >
          สลิปเงินเดือนปลอม
        </button>
      </nav>

      <section style={{ marginTop: 32 }}>{renderTool()}</section>
    </>
  );
};

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: 12,
  flexWrap: "wrap",
};

const normalBtn: React.CSSProperties = {
  padding: "10px 16px",
  border: "1px solid #aaa",
  borderRadius: 6,
  background: "#f5f5f5",
  cursor: "pointer",
  fontWeight: 500,
};

const activeBtn: React.CSSProperties = {
  ...normalBtn,
  background: "#1976d2",
  color: "#fff",
  border: "1px solid #1976d2",
};

export default Dashboard;