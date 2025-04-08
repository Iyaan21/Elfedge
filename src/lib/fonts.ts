import localFont from "next/font/local";
import {
  Inter,
  Poppins,
  Rajdhani,
  Oswald,
  Montserrat,
  Space_Grotesk,
} from "next/font/google";

// Configure Google fonts
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const rajdhani = Rajdhani({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
});

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

// Configure local fonts
export const marva = localFont({
  src: [
    {
      path: "../../public/fonts/Marva/Marva.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Marva/Marva-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Marva/Marva-Light Italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Marva/Marva-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Marva/Marva-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Marva/Marva-Bold Italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-marva",
  display: "swap",
});

// Logo - Recommended Font: Marva or Rajdhani - Oswald or Montserrat.
//Tagline - Recommended Font: Montserrat or Poppins or Rajdhani
//Title - Recommended Font: Oswald or Rajdhani - Oswald or Montserrat
// Subheadings - Inter or Montserrat
//Body Text (Paragraphs/Descriptions): - Recommended Font: Inter or Montserrat - Inter or Poppins.
//Buttons - Poppins or Inter - Poppins or Inter
