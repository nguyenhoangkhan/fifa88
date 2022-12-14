const ArrowThin = ({ className, color = "#082C3E" }) => {
  return (
    <svg
      className={className}
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.57095 6.00003L0.749953 2.17903C0.335953 1.76503 0.335953 1.09303 0.749953 0.67903C1.16395 0.26503 1.83595 0.26503 2.24995 0.67903L6.86395 5.29303C7.25495 5.68403 7.25495 6.31703 6.86395 6.70703L2.24995 11.321C1.83595 11.735 1.16395 11.735 0.749953 11.321C0.335953 10.907 0.335953 10.235 0.749953 9.82103L4.57095 6.00003Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowThin;
