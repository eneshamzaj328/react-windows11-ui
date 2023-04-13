import { SearchForm } from "./Layout.styled";

const SearchInputForm = () => {
  const SearchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <title>ionicons-v5-f</title>
      <path
        d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
        style={{
          fill: "none",
          stroke: "#000",
          strokeMiterlimit: 10,
          strokeWidth: "32px",
        }}
      />
      <line
        x1="338.29"
        y1="338.29"
        x2="448"
        y2="448"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "32px",
        }}
      />
    </svg>
  );

  return (
    <header>
      <SearchForm>
        {SearchIcon}
        <input
          type="search"
          name="search"
          placeholder="Search for apps, settings and documents"
          autoComplete="off"
          aria-label="Windows Search"
        />
      </SearchForm>
    </header>
  );
};

export default SearchInputForm;
