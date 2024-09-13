import Icon from "./Icon";

type ButtonProps = {
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  iconStartSrc?: string;
  iconEndSrc?: string;
  text?: string;
  paddingY?: string;
  fontSize?: string;
  imageWidth?: number;
  imageHeight?: number;
  responsivePaddingY?: {
    base?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  responsiveFontSize?: {
    base?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
};

export default function Button({
  text,
  type = "button",
  disabled = false,
  iconStartSrc,
  iconEndSrc,
  imageHeight,
  imageWidth,
  responsivePaddingY = {},
  responsiveFontSize = {},
}: ButtonProps) {
  const commonStyles =
    "relative w-full h-full flex items-center justify-center gap-2 px-6 font-bold uppercase";

  const disabledStyles =
    "border-transparent bg-[#E1E4E8] text-gray-400 border-[2px] after:btn-shadow-format after:absolute after:bottom-[-6.8px] after:left-[-2px] after:bg-gray-400";

  const activeStyles =
    "border-[2px] border-[black] bg-yellow-500 text-[black] after:btn-shadow-format after:absolute after:bottom-[-6.8px] after:left-[-2px] after:bg-[black] hover:border-transparent hover:bg-[#F8DCA0]";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${commonStyles} ${disabled ? disabledStyles : activeStyles} ${
        responsivePaddingY.base || ""
      } ${responsivePaddingY.sm ? `sm:${responsivePaddingY.sm}` : ""} ${
        responsivePaddingY.md ? `md:${responsivePaddingY.md}` : ""
      } ${responsivePaddingY.lg ? `lg:${responsivePaddingY.lg}` : ""} ${
        responsivePaddingY.xl ? `xl:${responsivePaddingY.xl}` : ""
      } ${responsiveFontSize.base || ""} ${
        responsiveFontSize.sm ? `sm:${responsiveFontSize.sm}` : ""
      } ${responsiveFontSize.md ? `md:${responsiveFontSize.md}` : ""} ${
        responsiveFontSize.lg ? `lg:${responsiveFontSize.lg}` : ""
      } ${responsiveFontSize.xl ? `xl:${responsiveFontSize.xl}` : ""}`}
    >
      {iconStartSrc && (
        <Icon
          src={iconStartSrc}
          isDisabled={disabled}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
      )}
      <p className="text-center">{text}</p>
      {iconEndSrc && (
        <Icon
          src={iconEndSrc}
          isDisabled={disabled}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
      )}
    </button>
  );
}
