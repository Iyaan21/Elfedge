"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isMobile: boolean;
}

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  return hasMounted;
};

const CustomCursor = () => {
  const hasMounted = useHasMounted();
  const [cursor, setCursor] = useState<CursorState>(() => ({
    x: 0,
    y: 0,
    isHovering: false,
    isMobile: false,
  }));

  // Memoize handlers to prevent unnecessary re-renders
  const checkDevice = useCallback(() => {
    const isMobileDevice =
      window.matchMedia("(max-width: 768px)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    setCursor((prev) => ({ ...prev, isMobile: isMobileDevice }));
  }, []);

  const moveCursor = useCallback((e: MouseEvent) => {
    setCursor((prev) =>
      !prev.isMobile
        ? {
            ...prev,
            x: e.clientX,
            y: e.clientY,
          }
        : prev
    );
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName.toLowerCase() === "a" ||
      target.tagName.toLowerCase() === "button" ||
      target.classList.contains("cursor-hover")
    ) {
      setCursor((prev) =>
        !prev.isMobile ? { ...prev, isHovering: true } : prev
      );
    }
  }, []);

  const handleMouseOut = useCallback(() => {
    setCursor((prev) =>
      !prev.isMobile ? { ...prev, isHovering: false } : prev
    );
  }, []);

  useEffect(() => {
    // Skip effect on server-side
    if (typeof window === "undefined") return;

    // Initial check
    checkDevice();

    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkDevice, 100);
    };

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    // Cleanup
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [checkDevice, moveCursor, handleMouseOver, handleMouseOut]);

  // Don't render anything if not mounted or if it's a mobile device
  if (!hasMounted || cursor.isMobile) return null;

  // Cursor animation variants
  const cursorVariants = {
    default: {
      scale: 1,
      transition: {
        type: "spring",
        damping: 30,
        mass: 0.5,
        stiffness: 400,
      },
    },
    hover: {
      scale: 2.5,
      transition: {
        type: "spring",
        damping: 30,
        mass: 0.5,
        stiffness: 400,
      },
    },
  };

  const trailVariants = {
    default: {
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        mass: 0.8,
        stiffness: 300,
      },
    },
    hover: {
      scale: 1.5,
      transition: {
        type: "spring",
        damping: 20,
        mass: 0.8,
        stiffness: 300,
      },
    },
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none mix-blend-difference z-50 hidden md:block"
        animate={{
          x: cursor.x - 8,
          y: cursor.y - 8,
          ...cursorVariants[cursor.isHovering ? "hover" : "default"],
        }}
        initial={false}
      />

      {/* Cursor trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none mix-blend-difference z-40 hidden md:block"
        animate={{
          x: cursor.x - 16,
          y: cursor.y - 16,
          ...trailVariants[cursor.isHovering ? "hover" : "default"],
        }}
        initial={false}
      />
    </>
  );
};

export default CustomCursor;
