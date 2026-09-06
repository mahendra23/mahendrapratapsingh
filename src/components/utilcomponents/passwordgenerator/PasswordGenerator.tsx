import React, { useEffect, useState } from "react";
import "./PasswordGenerator.scss";
import { UtilCopyButton, UtilInputField, UtilsCardControlsButtons } from "../UtilCardControls/UtilCardControls";

export const PasswordGenerator = () => {
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
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
        <UtilInputField
          id="passwordlength"
          type="number"
          label="Length:"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          required={true}
        />
        <UtilsCardControlsButtons onCalculate={generatePassword} onClear={() => {setPassword("")}} />
      </div>
      {password && (
        <div className="passwordgeneratoroutput">
          <div className="passworddisplay">
            <UtilInputField id="generatedpassword" value={password} readOnly={true} label="Password:" />
            <UtilCopyButton title="Copy to Clipboard" onClick={copyToClipboard} />
          </div>
          <div className="expirynote">* This password will disappear after 30 seconds ⏳</div>
        </div>
      )}
    </div>
  );
}