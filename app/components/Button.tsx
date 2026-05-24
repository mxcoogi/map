const Button = ({
  text,
  onClick,
  variant = "primary",
  disabled = false,
}: {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}) => {
  const styles =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300"
      : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 disabled:text-gray-300";

  return (
    <button
      className={`text-sm px-4 py-2 rounded-md transition-colors whitespace-nowrap disabled:cursor-not-allowed cursor-pointer ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default Button;
