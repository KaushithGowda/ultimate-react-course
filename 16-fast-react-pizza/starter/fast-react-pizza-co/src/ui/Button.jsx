import { Link } from "react-router-dom";

function Button({ children, to, btnType, classes, disabled, onClick }) {
  const base =
    "rounded-full uppercase focus:font-semibold transition-colors duration-300 focus:ring focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary:
      base +
      "text-sm px-2 py-1 sm:px-3 sm:py-2 sm:px-4 sm:py-3 bg-yellow-400 focus:bg-yellow-300 focus:ring-yellow-300 font-mono font-semibold",
    secondary:
      base +
      "text-sm px-2 py-1 sm:px-3 sm:py-2 sm:px-4 sm:py-3 text-gray-400 hover:text-gray-500 focus:text-gray-900 focus:ring-gray-400 border-gray-400 border-2 font-mono font-semibold",
  };

  if (to)
    return (
      <Link className={`${styles[btnType]} ${classes}`} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[btnType]}>
        {children}
      </button>
    );

  return (
    <button
      disabled={disabled}
      className={`${styles[btnType]} ${classes} flex items-center justify-center ${disabled && "cursor-not-allowed"}`}
    >
      {children}
    </button>
  );
}

export default Button;
