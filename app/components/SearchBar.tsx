const SearchBar = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      className="text-sm bg-white border border-gray-300 flex-1 min-w-[130px] px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 transition-shadow"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
export default SearchBar;
