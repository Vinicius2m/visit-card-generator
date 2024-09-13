import Image from "next/image";

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
};

const inlineStyleDisabled = {
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
};

export default function Button({
  text,
  type,
  disabled,
  iconStartSrc,
  iconEndSrc,
  paddingY,
  fontSize,
  imageHeight,
  imageWidth,
}: ButtonProps) {
  return disabled ? (
    <button
      type={type}
      disabled
      className="after:btn-shadow-format relative flex h-full w-full items-center justify-center gap-2 border-[2px] border-transparent bg-[#E1E4E8] px-6 py-3 text-sm font-extrabold uppercase text-gray-400 after:absolute after:bottom-[-6.8px] after:left-[-2px] after:bg-gray-400"
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        fontSize: fontSize,
      }}
    >
      {iconStartSrc && (
        <div
          className="bg-gray-400"
          style={{
            WebkitMaskImage: `url('${iconStartSrc}')`,
            maskImage: `url('${iconStartSrc}')`,
            width: imageWidth ?? 24,
            height: imageHeight ?? 24,
            ...inlineStyleDisabled,
          }}
        />
      )}
      <p className="text-center">{text}</p>
      {iconEndSrc && (
        <div
          className="bg-gray-400"
          style={{
            WebkitMaskImage: `url('${iconEndSrc}')`,
            maskImage: `url('${iconEndSrc}')`,
            width: imageWidth ?? 24,
            height: imageHeight ?? 24,
            ...inlineStyleDisabled,
          }}
        />
      )}
    </button>
  ) : (
    <button
      type={type}
      className="after:btn-shadow-format relative flex items-center justify-center gap-2 border-[2px] border-[black] bg-yellow-500 px-6 py-3 font-bold uppercase text-[black] after:absolute after:bottom-[-6.8px] after:left-[-2px] after:bg-[black] hover:bg-[#F8DCA0]"
    >
      {iconStartSrc && (
        <Image
          src={iconStartSrc}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6"
        />
      )}
      <p>{text}</p>
      {iconEndSrc && (
        <Image
          src={iconEndSrc}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6"
        />
      )}
    </button>
  );
}
