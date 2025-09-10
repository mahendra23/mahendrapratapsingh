import React from "react";
import "./UtilCardControls.scss";
import { FaForward, FaTrash, FaRegCopy} from "react-icons/fa6";

type UtilButtonProps = {
  title: string;
  onClick: () => void;
};

export const UtilRunButton = ({title,  onClick }: UtilButtonProps) => (
  <button className="utilbutton" title={title} onClick={onClick}>
    <FaForward />
  </button>
);

export const UtilClearButton = ({title,  onClick }: UtilButtonProps) => (
  <button className="utilbutton" title={title} onClick={onClick}>
    <FaTrash />
  </button>
);

export const UtilCopyButton = ({title,  onClick }: UtilButtonProps) => (
  <button className="utilbutton" title={title} onClick={onClick}>
    <FaRegCopy />
  </button>
);

type UtilInputProps ={
  id: string;
  type: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isReadOnly?: boolean;
};
export const UtilInput = ({ id, type, value, onChange, placeholder, isReadOnly }: UtilInputProps) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="utilinput"
    readOnly={isReadOnly || false}
  />
);
