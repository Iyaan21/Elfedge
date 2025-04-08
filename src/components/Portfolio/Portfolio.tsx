"use client";
import React, { useRef, useState } from "react";
import { categories, projects } from "./constant";
import Image from "next/image";
import Link from "next/link";
import FeaturedPortfolio from "./FeaturedPortfolio";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import * as Icons from "lucide-react";
import TextWithLines from "../ui/TextWithLines";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory !== "all" && project.id !== selectedCategory)
      return false;
    if (
      searchQuery &&
      !project.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="bg-background">
      <div className="relative overflow-hidden">
        <div className="container pt-28 md:pt-32 pb-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="space-y-6">
              <TextWithLines text="Our Portfolio" className="mb-4" />

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Transform The World With Your Idea.
                <span className="text-primary">
                  Modern Businesses
                </span>
              </h1>

              <p className="sub-title">
                From dream to reality, here are some apps we are proud to be
                part of.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="primary"
                className="min-w-[200px]"
                rightIcon={<Icons.ArrowRight />}
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                rightIcon={<Icons.ArrowRight />}
                className="min-w-[200px]"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="container">
        <FeaturedPortfolio />

        <div
          ref={projectsRef}
          className="relative flex flex-col lg:grid lg:grid-cols-[23%_70%] gap-8 lg:gap-16 mt-12"
        >
          <div className="sticky top-4 w-full bg-card backdrop-blur-sm px-4 py-6 rounded-3xl lg:h-[calc(100vh-6rem)]">
            {/* Search Input */}
            <div className="relative mb-6">
              <input
                type="search"
                placeholder="Search projects..."
                className="w-full px-4 py-3 pl-12 border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-4 top-3.5 h-5 w-5 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category List - Horizontal Scrolling on Mobile */}
            <div
              className="flex lg:block overflow-x-auto lg:overflow-x-hidden pb-4 lg:pb-0 -mx-2 lg:mx-0 lg:space-y-2 lg:overflow-y-auto lg:max-h-[calc(100vh-12rem)] lg:pr-2 
                        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex-shrink-0 mx-2 lg:mx-0 lg:w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary text-foreground"
                    }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div
            className="flex-1 lg:overflow-y-auto lg:pr-4
                    scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          >
            <div className="grid grid-cols-1 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-[32px] p-4 sm:p-8 border border-border"
                  style={{
                    backgroundColor: project.bgColor || "#FFF8E7",
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    {/* Left Content Section */}
                    <div className="flex-1 space-y-4 sm:space-y-6">
                      {/* Logo and Title */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                        <Image
                          src={project.logo || project.image}
                          alt={`${project.title} logo`}
                          width={80}
                          height={80}
                          className="w-16 sm:w-20"
                        />
                        <h3 className="text-2xl sm:text-3xl font-bold">
                          - {project.subtitle}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-foreground text-base">
                        {project.description}
                      </p>

                      {/* Stats Row */}
                      <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                        <div className="flex flex-col gap-1">
                          <span className="block text-sm">Downloads:</span>
                          <span className="text-base font-semibold">
                            {project.downloads || "10k+"}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm">
                            {project.country.flag}
                          </span>
                          <span className="text-base font-semibold">
                            {project.country.name}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="block text-sm">Platforms:</span>
                          <span className="text-base font-semibold">
                            {project.platforms.join(", ")}
                          </span>
                        </div>
                      </div>

                      {/* Store Links */}
                      <div className="flex items-center gap-4">
                        {project.appLinks.appStore && (
                          <Link href={project.appLinks.appStore}>
                            <Image
                              src="/images/appstore.svg"
                              alt="App Store"
                              width={40}
                              height={40}
                            />
                          </Link>
                        )}
                        {project.appLinks.playStore && (
                          <Link href={project.appLinks.playStore}>
                            <Image
                              src="/images/playstore.svg"
                              alt="Play Store"
                              width={40}
                              height={40}
                            />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full md:w-auto">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={400}
                        priority
                        className="w-full max-w-[300px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;