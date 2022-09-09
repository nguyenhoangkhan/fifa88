const reset = ({ color = "white", className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2715_13841)">
        <path
          d="M11 0.5C10.74 0.5 10.484 0.601969 10.293 0.792969L7.29297 3.79297C6.90197 4.18397 6.90197 4.81703 7.29297 5.20703L10.293 8.20703C10.579 8.49303 11.0078 8.57783 11.3828 8.42383C11.7568 8.26883 12 7.905 12 7.5V5.5C15.8775 5.5 19 8.62252 19 12.5C19 13.5258 18.775 14.4948 18.377 15.377C18.318 15.4973 18.2838 15.6282 18.2764 15.7621C18.2691 15.8959 18.2887 16.0298 18.3341 16.1559C18.3795 16.2819 18.4498 16.3976 18.5408 16.496C18.6317 16.5944 18.7416 16.6735 18.8637 16.7286C18.9858 16.7837 19.1178 16.8137 19.2518 16.8168C19.3858 16.8199 19.519 16.7961 19.6436 16.7467C19.7681 16.6973 19.8815 16.6234 19.977 16.5294C20.0724 16.4353 20.148 16.3231 20.1992 16.1992C20.7072 15.0734 21 13.8202 21 12.5C21 7.54148 16.9585 3.5 12 3.5V1.5C12 1.096 11.7568 0.731172 11.3828 0.576172C11.2588 0.525172 11.129 0.5 11 0.5ZM4.72656 8.19922C4.53024 8.19755 4.33777 8.2537 4.17314 8.36067C4.00851 8.46765 3.87901 8.62071 3.80078 8.80078C3.29281 9.92662 3 11.1798 3 12.5C3 17.4585 7.04148 21.5 12 21.5V23.5C12 23.904 12.2432 24.2688 12.6172 24.4238C12.7412 24.4748 12.871 24.5 13 24.5C13.26 24.5 13.516 24.398 13.707 24.207L16.707 21.207C17.098 20.816 17.098 20.184 16.707 19.793L13.707 16.793C13.421 16.507 12.9922 16.4222 12.6172 16.5762C12.2432 16.7312 12 17.096 12 17.5V19.5C8.12252 19.5 5 16.3775 5 12.5C5 11.4742 5.22502 10.5052 5.62305 9.62305C5.69401 9.47136 5.72574 9.30427 5.71533 9.13713C5.70493 8.96998 5.65271 8.80813 5.56349 8.66641C5.47426 8.52469 5.35087 8.40765 5.20464 8.32602C5.05841 8.24439 4.89402 8.20079 4.72656 8.19922Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2715_13841">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default reset;
