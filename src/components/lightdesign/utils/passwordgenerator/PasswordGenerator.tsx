import React, { useEffect, useState } from "react";
import "./PasswordGenerator.scss";
import { UtilCopyButton, UtilInput, UtilRunButton } from "../UtilCardControls/UtilCardControls";

export const PasswordGenerator =(): JSX.Element => {
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
    const randomValues = new Uint32Array(length);
    crypto.getRandomValues(randomValues); // 🔒 Secure randomness
    const newPassword = Array.from(randomValues, val => charset[val % charset.length]).join("");
    setPassword(newPassword);
  };

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  };

  useEffect(() => {
    if (password) {
      const timer = setTimeout(() => {
        setPassword("");
      }, 30000); // 1 minute = 60000 ms

      return () => clearTimeout(timer); // cleanup if user generates again
    }
  }, [password]);

  return (
    <div className="passwordgenerator">
      <div className="passwordgeneratorcontrols">
        <label>
          Length: &nbsp;
          <UtilInput
            id="passwordlength"
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            isReadOnly={false}
          />
        </label>
        <UtilRunButton onClick={generatePassword} title="Generate Password" />
      </div>
      <div className="passwordgeneratoroutput">
        <div className="passworddisplay">
          <UtilInput id="generatedpassword" type="text" value={password} isReadOnly={true} />
          <UtilCopyButton title="Copy to Clipboard" onClick={copyToClipboard} />
        </div>
        {password && <div className="expirynote">* This password will disappear after 30 seconds ⏳</div>}
      </div>
    </div>
  );
}