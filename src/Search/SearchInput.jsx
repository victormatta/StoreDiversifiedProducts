// import "./SearchInput.css";
// import { FaSearch } from "react-icons/fa";

// export const SearchInput = ({ value, onChange }) => {
//   const handleText = (text) => {
//     onChange(text.target.value);
//   };
//   return (
//     <div className="searchh">
//       <input
//         type="search"
//         value={value}
//         onChange={handleText}
//         placeholder="Search..."
//       />
//       <button>
//         <FaSearch color="grey" size={20} />
//       </button>
//     </div>
//   );
// };

import "./SearchInput.css";
import { FaSearch } from "react-icons/fa";

export function SearchInput({ value, onChange }) {
  const handleText = (text) => {
    onChange(text.target.value);
  };

  return (
    <div className="searchh">
      <input
        type="search"
        placeholder="Search..."
        value={value}
        onChange={handleText}
      />
      <button type="submit">
        <FaSearch color="grey" size={20} />
      </button>
    </div>
  );
}
