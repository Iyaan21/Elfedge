import type { Metadata } from "next";
import "./globals.css";
import MainLayoutWrapper from "@/components/layout/MainLayoutWrapper";
import {
  inter,
  poppins,
  marva,
  rajdhani,
  oswald,
  montserrat,
  spaceGrotesk,
} from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Elfedge Solutions | Cutting-Edge IT Solutions & Development",
  description:
    "Elfedge Solutions is a leading IT solutions provider, offering website development, mobile app development, cloud services, AI tools, DevOps, cybersecurity, and more. We deliver custom software solutions tailored to your business needs since 2013.",
  keywords: [
    "Website Development",
    "Mobile App Development",
    "Custom Software",
    "MVP Development",
    "E-Commerce Solutions",
    "SEO Services",
    "Graphics Design",
    "AI Tools",
    "Content Writing",
    "Elfedge Solutions",
    "IT Solutions",
    "Tech Consulting",
  ],
  openGraph: {
    title: "Elfedge Solutions | Innovative IT Services",
    description:
      "Expert in web & mobile development, cloud computing, AI, and cybersecurity. Transform your business with cutting-edge technology solutions from Elfedge Solutions.",
    url: "https://www.elfedge.com",
    type: "website",
    images: [
      {
        url: "https://www.elfedge.com/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Elfedge Solutions - Leading IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elfedge Solutions | Innovative IT Services",
    description:
      "Transform your business with web, mobile, AI, and cybersecurity solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elfedge Solutions",
    url: "https://www.elfedge.com",
    logo: "https://www.elfedge.com/images/logo-whitebg.png",
    description:
      "Leading IT solutions provider specializing in web development, mobile apps, cloud services, and cybersecurity since 2013.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 8851967714",
      contactType: "Customer Service",
    },
    sameAs: [
      "https://twitter.com/elfedge",
      "https://linkedin.com/company/elfedge",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <MainLayoutWrapper
        interClass={inter.variable}
        poppinsClass={poppins.variable}
        marvaClass={marva.variable}
        rajdhaniClass={rajdhani.variable}
        oswaldClass={oswald.variable}
        montserratClass={montserrat.variable}
        spaceGroteskClass={spaceGrotesk.variable}
      >
        {children}
      </MainLayoutWrapper>
    </html>
  );
}
