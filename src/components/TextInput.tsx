interface TextInputProps {
  inputId: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  required?: boolean;
}

const TextInput = ({
  inputId,
  label = "Input",
  placeholder = "Enter text...",
  defaultValue = "",
  value,
  onChange,
  className = "",
  required = false,
}: TextInputProps) => {
  return (
    <div className={`flex flex-col text-black/40 ${className}`}>
      <label htmlFor={inputId} className="text-[10px]">
        {label}
      </label>
      <input
        id={inputId}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="border-none bg-transparent text-black outline-none placeholder:text-black/40"
        required={required}
      />
    </div>
  );
};

export default TextInput;
