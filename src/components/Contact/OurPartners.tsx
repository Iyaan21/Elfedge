'use client';

import Image from 'next/image';
import { partners } from './constant';
import { useState, useEffect } from 'react';
import TextWithLines from '../ui/TextWithLines';
import { motion } from 'framer-motion';
const OurPartners = () => {
    const [cols, setCols] = useState(2);

    useEffect(() => {
        const updateCols = () => {
            if (window.innerWidth >= 1024) setCols(6); // lg:grid-cols-6
            else if (window.innerWidth >= 768) setCols(4); // md:grid-cols-4
            else if (window.innerWidth >= 640) setCols(3); // sm:grid-cols-3
            else setCols(2); // grid-cols-2 (default)
        };

        updateCols();
        window.addEventListener('resize', updateCols);
        return () => window.removeEventListener('resize', updateCols);
    }, []);

    return (
        <section className="w-full py-30">
            <div className="container max-w-7xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-16">
                    <TextWithLines text="Our Partners" className="mb-4" />
                    <h2 className="title">
                        Our&nbsp;
                        <span className="text-primary mt-2">Partners</span>
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base font-light max-w-2xl mx-auto">
                        Our portfolio holds the work of some of the most reputed enterprise
                        & startup brands. All it is missing is YOU!
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {partners.map((partner, index) => {
                        const isLastCol = (index + 1) % cols === 0;
                        const isLastRow = index >= partners.length - (partners.length % cols || cols);

                        return (
                            <div
                                key={partner.id}
                                className={`
                                    flex items-center justify-center p-4 bg-background transition-shadow duration-300 
                                    ${!isLastCol ? 'border-r' : ''} 
                                    ${!isLastRow ? 'border-b' : ''}
                                    border-border
                                `}
                            >
                                <div className="relative w-full aspect-[3/2] transition-all duration-300 hover:scale-105">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.alt}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
