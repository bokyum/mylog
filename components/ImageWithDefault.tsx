import cn from "classnames";
import Image from "next/image";
interface ImageWithDefaultProps {
  className?: string;
  alt: string;
  imageUrl?: string;
}

export const ImageWithDefault = ({
  className,
  alt,
  imageUrl,
}: ImageWithDefaultProps) => {
  return (
    <div
      className={cn(
        "relative h-36 w-36 flex-shrink-0 rounded-md dark:bg-slate-700",
        className
      )}
    >
      {imageUrl ? (
        <Image src={imageUrl} alt={alt} fill className="object-cover p-1" />
      ) : (
        <Image
          src={"image_search_28dp.svg"}
          fill
          alt="Empty Image"
          className="object-cover p-1"
        />
      )}
    </div>
  );
};
