import { JSX, useId } from "react";
import { LucideIcon } from "lucide-react";
import TextWithLines from "./TextWithLines";
import { ReadMoreButton } from "./read-more-button";
import Image from "next/image";
import { Button } from "./button";
import { IoMdArrowForward } from "react-icons/io";

interface Feature {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

interface GridProps {
  pattern?: number[][];
  size?: number;
}

interface GridPatternProps {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
  className?: string;
}

interface ServicesCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
}

export default function ServicesCard({
  title,
  subtitle,
  description,
  features,
}: ServicesCardProps): JSX.Element {
  return (
    <div className="">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="flex flex-col items-center md:items-start max-w-md">
            <TextWithLines text={title} className="mb-4" />
            <h2 className="title md:text-left">
              {subtitle}&nbsp;
              <span className="text-primary mt-2">{title}</span>
            </h2>
            <p className="sub-title md:text-left">{description}</p>
          </div>
          <Button
            variant={"primary"}
            size={"lg"}
            className="mt-4"
            rightIcon={<IoMdArrowForward className="size-6" />}
          >
            View All Services
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-background rounded-xl overflow-hidden shadow-sm border border-border flex flex-col hover:shadow-lg transition-all duration-500 ease-in-out items-center md:items-start md:justify-between group"
            >
              <div className="relative w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Background transition pseudo-element */}
              <div className="absolute inset-0 bg-primary transform scale-y-0 origin-top z-10" />
              <div className="p-6 relative">
                <Grid size={20} />
                <div className="p-2 absolute w-16 h-16 -top-9 group-hover:[transform:rotateY(180deg)] transition-all duration-700 left-5 flex items-center justify-center rounded-lg bg-secondary text-secondary-foreground mb-3 z-20">
                  {<feature.icon className="size-10" />}
                </div>
                <p className="text-base lg:text-lg font-bold text-foreground mt-5 mb-3 relative z-20">
                  {feature.title}
                </p>
                <p className="text-muted-foreground text-center md:text-left text-base font-normal relative z-20 mb-2">
                  {feature.description}
                </p>
                <ReadMoreButton text="Learn More" variant="primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Grid = ({ pattern, size }: GridProps): JSX.Element => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: GridPatternProps): JSX.Element {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: number[], index: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
