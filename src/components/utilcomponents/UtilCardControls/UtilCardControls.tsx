import React from "react";
import "./UtilCardControls.scss";
import { FaForward, FaTrash, FaRegCopy} from "react-icons/fa6";
import { useTheme } from "../../themecontext/ThemeContext";

type UtilButtonProps = {
  title: string;
  onClick: () => void;
};

export const UtilRunButton = ({title,  onClick }: UtilButtonProps): JSX.Element => {
  const { isDark } = useTheme();
  return (
    <button className={(isDark ? "utilbuttondarkmode" : "utilbuttonlightmode") + " utilbutton"} title={title} onClick={onClick}>
      <FaForward />
    </button>
  );
};

export const UtilClearButton = ({title,  onClick }: UtilButtonProps): JSX.Element => {
  const { isDark } = useTheme();
  return (
    <button className={(isDark ? "utilbuttondarkmode" : "utilbuttonlightmode") + " utilbutton"} title={title} onClick={onClick}>
      <FaTrash />
    </button>
  );
};

export const UtilCopyButton = ({title,  onClick }: UtilButtonProps): JSX.Element => {
  const { isDark } = useTheme();
  return (
    <button className={(isDark ? "utilbuttondarkmode" : "utilbuttonlightmode") + " utilbutton"} title={title} onClick={onClick}>
      <FaRegCopy />
    </button>
  );
};

type UtilInputFieldProps ={
  id: string;
  label: string;
  type?: string;
  value: string | number;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const UtilInputField: React.FC<UtilInputFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  placeholder,
  readOnly = false,
  required = false,
  onChange,
}) => {
  return (
    <div className="utilinputfield">
      <label htmlFor={id} className="utilinputfield-label">
        {label}&nbsp;{required && <span className="utilinputfield-label-required">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        onChange={onChange}
        className="utilinputfield-input"
      />
    </div>
  );
};

export type UtilSelectFieldOption = {
  value: string | number;
  label: string;
};

type UtilSelectFieldProps = {
  id: string;
  label: string;
  value: string | number;
  options: UtilSelectFieldOption[];
  required?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const UtilSelectField: React.FC<UtilSelectFieldProps> = ({
  id,
  label,
  value,
  options,
  required = false,
  disabled = false,
  onChange,
}) => {
  return (
    <div className="utilselectfield">
      <label htmlFor={id} className="utilselectfield-label">
        {label} {required && <span className="utilselectfield-required">*</span>}
      </label>
      <select
        id={id}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
        className="utilselectfield-select"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

type TaxCalculatorControlsProps = {
  onCalculate: () => void;
  onClear: () => void;
};

export const UtilsCardControlsButtons: React.FC<TaxCalculatorControlsProps> = ({
  onCalculate,
  onClear,
}) => {
  return (
    <div className="utilcardcontrolsbutton">
      <UtilRunButton onClick={onCalculate} title="Run Button" />
      <UtilClearButton onClick={onClear} title="Clear Button" />
    </div>
  );
};