const Button = ({
  text,
  onClick,
  variant = "primary",
}: {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}) => {
  const styles =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50";

  return (
    <button
      className={`text-sm px-4 py-2 rounded-md cursor-pointer transition-colors whitespace-nowrap ${styles}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
