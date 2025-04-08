"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { TextSkeleton } from "../ui/skeleton";
import { AnimatedTooltip } from "../ui/animated-tooltip";
interface ISecondaryHero {
  _id: string;
  tagline: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaLabel: string;
  ctaLink: string;
  phoneNumber: string;
  phoneText: string;
  stats: Array<{ value: string; label: string }>;
  createdAt: string;
  updatedAt: string;
}

interface TeamMember {
  _id: string;
  name: string;
  designation: string;
  image: string;
}

export default function SecondaryHero() {
  const [heroData, setHeroData] = useState<ISecondaryHero | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Fetch hero data
  const fetchHeroData = useCallback(async () => {
    try {
      // cache control headers to improve performance
      const response = await fetch("/api/secondary-hero", {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      });
      if (!response.ok) {
        console.error(
          "Failed to fetch secondary hero data:",
          response.statusText
        );
        throw new Error("Failed to fetch secondary hero data");
      }

      const data = await response.json();

      const teamResponse = await fetch("/api/team-members");
      if (teamResponse.ok) {
        const teamData = await teamResponse.json();
        setTeamMembers(teamData);
      }

      // Check if data has the expected structure
      if (!data || typeof data !== "object") {
        console.error("Invalid data format received:", data);
        setIsLoading(false);
        return;
      }

      // Ensure stats is an array
      if (!Array.isArray(data.stats)) {
        data.stats = [];
      }

      setHeroData(data);
      setIsLoading(false);

      // Manually trigger the animation after data is loaded
      if (isInView) {
        controls.start("visible");
      }
    } catch (error) {
      console.error("Error fetching secondary hero data:", error);
      setIsLoading(false);
    }
  }, [controls, isInView]);

  useEffect(() => {
    fetchHeroData();
  }, [fetchHeroData]);

  // Optimize animations to trigger only when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // If still loading or no data, show a minimal placeholder
  if (isLoading) {
    return <TextSkeleton className="h-[500px] w-full" />;
  }

  // If no data was found, don't render anything
  if (!heroData) {
    return null;
  }
  // Format team members for AnimatedTooltip component
  const formattedTeamMembers = teamMembers.map((member, index) => ({
    id: index,
    name: member.name,
    designation: member.designation,
    image: member.image,
  }));

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 md:pt-32 pb-10"
      ref={ref}
    >
      <div className="absolute top-1/2 left-[-10%] transform -translate-y-1/2 -rotate-90 z-[1] hidden lg:block">
        <h2 className="text-[80px] font-semibold font-rajdhani uppercase leading-none [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:var(--text-stroke)] [-webkit-text-fill-color:transparent] animate-shine">
          Elfedge Solutions
        </h2>
      </div>
      <div className="absolute top-0 left-0 w-[320px] h-auto">
        <Image
          src="https://gramentheme.com/html/infotek/assets/img/hero/line-shape.png"
          width={330}
          height={270}
          alt="Secondary Hero Background"
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="absolute top-1/2 left-[42%] translate-x-[-50%] translate-y-[-50%] w-[600px] h-[400px]">
        <Image
          src="https://gramentheme.com/html/infotek/assets/img/hero/dot-shape.png"
          width={600}
          height={400}
          alt="Secondary Hero Background"
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="absolute left-[32%] bottom-[13%] w-14 h-14 animate-pulse">
        <Image
          src="https://gramentheme.com/html/infotek/assets/img/hero/frame.png"
          alt="Secondary Hero Background"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-0 bottom-0 right-0 w-1/2 h-auto hidden lg:block">
        <Image
          src="https://gramentheme.com/html/infotek/assets/img/hero/mask-shape.png"
          alt="Secondary Hero Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="container relative">
        <motion.div
          variants={containerVariants}
          animate={controls}
          className="flex flex-col lg:flex-row lg:items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 z-10 px-4 flex flex-col justify-center items-center lg:items-start"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-3 py-1 mb-4 text-sm rounded-full bg-primary/10 text-primary border border-border font-montserrat"
            >
              {heroData.tagline}
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-3xl sm:text-4xl text-center lg:text-left font-oswald font-bold text-foreground md:text-5xl lg:text-6xl xl:text-7xl leading-[1.2] whitespace-pre-line"
            >
              {heroData.title
                .split(" ")
                .reduce((acc, word, i) => {
                  if (i > 0 && i % 3 === 0) {
                    return acc + "\n" + word;
                  }
                  return acc + " " + word;
                })
                .trim()}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-sm text-center lg:text-left sm:text-base text-foreground/80 max-w-xl font-inter font-light lg:font-normal"
            >
              {heroData.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-3 sm:gap-6">
              <Button
                variant="primary"
                size="lg"
                className="text-sm px-3 sm:px-5 sm:text-base"
                rightIcon={<IoIosArrowForward />}
              >
                {heroData.ctaLabel}
              </Button>

              {formattedTeamMembers.length > 0 && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <AnimatedTooltip items={formattedTeamMembers} />
                  </div>
                </div>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-4 sm:gap-12 justify-center xl:justify-between items-center"
            >
              {heroData.stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-primary font-rajdhani">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground font-inter">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image and Shapes */}
          <div className="relative w-full lg:w-1/2 mt-4 lg:mt-0 h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Background Shapes */}
            <div className="absolute right-0 top-0 w-full h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute right-0 top-0 w-full h-full"
              >
                <div className="absolute -left-10 top-1/4 w-24 h-24 rounded-full bg-primary/10 blur-xl"></div>
                <div className="absolute right-1/4 bottom-1/4 w-32 h-32 rounded-full bg-secondary/10 blur-xl"></div>
                <div className="absolute right-10 top-10 w-16 h-16 rounded-full bg-accent/10 blur-lg"></div>
              </motion.div>

              {/* Optimize image loading with priority and sizes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative z-10 h-full"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={heroData.imageUrl}
                    alt="Hero Image"
                    fill
                    className="object-contain object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="absolute -left-10 top-1/3 hidden lg:block">
                  <div className="w-16 h-16 border-2 border-primary/30 rounded-lg rotate-12"></div>
                </div>
                <div className="absolute right-1/4 bottom-1/4 hidden lg:block">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full"></div>
                </div>
                <div className="absolute right-10 top-1/4 hidden lg:block">
                  <div className="w-12 h-12 border-2 border-accent/30 rounded-full"></div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute left-0 top-1/4 hidden md:block z-10"
              >
                <div className="bg-card p-4 rounded-lg shadow-lg w-48">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-lg">✓</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">TypeScript Ready</p>
                      <p className="text-xs text-muted-foreground">
                        Full type safety
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute right-0 bottom-1/3 hidden md:block z-10"
              >
                <div className="bg-card p-4 rounded-lg shadow-lg w-48">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="text-secondary text-lg">⚡</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Next.js 15</p>
                      <p className="text-xs text-muted-foreground">
                        Server components
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-50 dark:opacity-30">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2">
            <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(200 200) rotate(90) scale(200)"
            >
              <stop stopColor="var(--color-primary)" />
              <stop
                offset="1"
                stopColor="var(--color-primary)"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 -z-10 opacity-50 dark:opacity-30">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2">
            <circle cx="150" cy="150" r="150" fill="url(#paint1_radial)" />
          </g>
          <defs>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(150 150) rotate(90) scale(150)"
            >
              <stop stopColor="var(--color-secondary)" />
              <stop
                offset="1"
                stopColor="var(--color-secondary)"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
