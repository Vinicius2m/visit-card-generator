import Image from "next/image";

type ButtonProps = {
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  iconStartSrc?: string;
  iconEndSrc?: string;
  text?: string;
};

export default function Button({ text, type, disabled, iconStartSrc, iconEndSrc }: ButtonProps) {
  return disabled ? (
    <button type={type} className="flex gap-2 relative border-[2px] border-transparent bg-[#E1E4E8] px-6 py-3 font-bold uppercase text-gray-400 after:absolute after:bottom-[-6.8px] after:left-[-2px] after:bg-gray-400 after:btn-shadow-format">
      <p>{text}</p>
    </button>
  ) : (
    <button
      type={type}
        className="flex gap-2 relative border-[2px] border-[black] bg-yellow-500 px-6 py-3 font-bold uppercase text-[black] after:absolute after:bottom-[-6.8px] after:left-[-2px] after:bg-[black] after:btn-shadow-format hover:bg-[#F8DCA0]"
      >
        {iconStartSrc && <Image src={iconStartSrc} alt="" className="w-6 h-6" />}
        <p>{text}</p>
        {iconEndSrc && <Image src={iconEndSrc} alt="" className="w-6 h-6" />}
    </button>
  );
}
