const Search = ({ className, color = "white" }) => {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.99999 0.944031C2.7882 0.944031 0.166656 3.56557 0.166656 6.77736C0.166656 9.98916 2.7882 12.6107 5.99999 12.6107C7.45666 12.6107 8.7875 12.0674 9.81184 11.1784L10.1667 11.5332V12.6107L14.8216 17.2656C15.2816 17.7256 16.0283 17.7256 16.4883 17.2656C16.9483 16.8056 16.9483 16.059 16.4883 15.599L11.8333 10.944H10.7559L10.401 10.5892C11.29 9.56487 11.8333 8.23403 11.8333 6.77736C11.8333 3.56557 9.21178 0.944031 5.99999 0.944031ZM5.99999 2.6107C8.31105 2.6107 10.1667 4.46631 10.1667 6.77736C10.1667 9.08842 8.31105 10.944 5.99999 10.944C3.68893 10.944 1.83332 9.08842 1.83332 6.77736C1.83332 4.46631 3.68893 2.6107 5.99999 2.6107Z"
        fill={color}
      />
    </svg>
  );
};

export default Search;
