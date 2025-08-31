import React, { useEffect, useState } from "react";
import "./PasswordGenerator.scss";
import { FaForward, FaRegCopy } from "react-icons/fa6";

export const PasswordGenerator =(): JSX.Element => {
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  const generatePassword = () => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
    const randomValues = new Uint32Array(length);
    crypto.getRandomValues(randomValues); // 🔒 Secure randomness
    const newPassword = Array.from(randomValues, val => charset[val % charset.length]).join("");
    setPassword(newPassword);
    setShowOutput(true);
  };

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  };

  useEffect(() => {
    if (showOutput) {
      const timer = setTimeout(() => {
        setShowOutput(false);
        setPassword("");
      }, 30000); // 1 minute = 60000 ms

      return () => clearTimeout(timer); // cleanup if user generates again
    }
  }, [showOutput]);

  return (
    <div className="passwordgenerator">
      <div className="controls">
        <label>Length: &nbsp;
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
        <button title="Generate Password" onClick={generatePassword}><FaForward /></button>
      </div>
      {showOutput && (
        <div className="output">
          <div className="passworddisplay">
            <input type="text" value={password} readOnly />
            <button title="copyToClipboard" onClick={copyToClipboard}><FaRegCopy /></button>
          </div>
          <div className="expirynote">* This password will disappear after 30 seconds ⏳</div>
        </div>
      )}
    </div>
  );
}