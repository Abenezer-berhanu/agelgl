import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  id: string;
  title: string | React.ReactNode;
  description: string;
  imageSrc: StaticImageData | string;
}

export const ServiceCard = ({
  id,
  title,
  description,
  imageSrc,
}: ServiceCardProps) => {
  return (
    <div
      id={id}
      className="w-full overflow-hidden relative h-full rounded-2xl border-2 border-purple-200 shadow-lg bg-linear-to-br from-purple-50 via-violet-100 to-purple-200"
    >
      <div className="relative z-10 bg-white/95 backdrop-blur-sm w-fit ml-auto mt-auto p-8 rounded-xl shadow-xl max-w-150 border border-purple-100">
        <h3 className="text-3xl md:text-7xl bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent text-end font-bold leading-tight">
          {title}
        </h3>
        <p className="text-gray-700 text-end mt-4 leading-relaxed text-base">
          {description}
        </p>
      </div>
      <Image
        src={imageSrc}
        alt={typeof title === "string" ? title : "Service Image"}
        width={800}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover left-0 top-0 opacity-90"
      />
    </div>
  );
};
