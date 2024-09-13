import Image from "next/image";

const inlineStyleDisabled = {
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
};

export default function Icon({
  src,
  isDisabled,
  imageWidth = 24,
  imageHeight = 24,
}: {
  src: string;
  isDisabled: boolean;
  imageWidth?: number;
  imageHeight?: number;
}) {
  return isDisabled ? (
    <div
      className="bg-gray-400"
      style={{
        WebkitMaskImage: `url('${src}')`,
        maskImage: `url('${src}')`,
        width: imageWidth,
        height: imageHeight,
        ...inlineStyleDisabled,
      }}
    />
  ) : (
    <Image
      src={src}
      alt=""
      width={imageWidth}
      height={imageHeight}
      className="h-6 w-6"
    />
  );
}
