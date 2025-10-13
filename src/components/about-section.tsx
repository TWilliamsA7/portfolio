"use client"

import React from 'react'
import { motion, type Transition, Variants } from 'motion/react';
import { Terminal, Code, HeartHandshake } from 'lucide-react'

// import { InfiniteScrollGallery } from './infinite-scroll-gallery'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

// Animation variants for the text content
const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        } 
    },
};


export default function AboutSection() {
    return (
        <section 
            id="about" 
            // Tailwind class for responsive padding and centering
            className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto"
        >
            {/* 1. Scrolling Technology Gallery */}
            <h2 className="text-xl font-semibold text-center text-primary mb-4 uppercase tracking-widest">
                My Toolkit
            </h2>

            {/* 2. Main Centered Content */}
            <motion.div
                className="max-w-3xl mx-auto text-center mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
            >
                <motion.h1 
                    variants={textVariants} 
                    className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-foreground"
                >
                    A Bit About My Journey
                </motion.h1>

                <motion.p 
                    variants={textVariants} 
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
                    transition={{ ...(textVariants.visible as any).transition, delay: 0.2 }}
                >
                    As a dedicated Full-Stack Developer, my passion lies in building applications that are not just functional, but truly enjoyable to use. I thrive on the challenge of bridging the gap between elegant design and robust, scalable backend architecture.
                </motion.p>
                
                <motion.p 
                    variants={textVariants} 
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
                    transition={{ ...(textVariants.visible as any).transition, delay: 0.4 } as Transition}
                >
                    My journey started with a deep dive into modern JavaScript frameworks and the MERN stack, but I constantly expand my horizons into cloud services, DevOps practices, and new languages to deliver holistic, production-ready solutions.
                </motion.p>
                
                <Separator className="my-8" />

                {/* Optional: Key Highlights */}
                <div className="flex justify-center space-x-8">
                    <motion.div variants={textVariants} transition={{ ...(textVariants.visible as any).transition, delay: 0.6 }}>
                        <Terminal className="w-8 h-8 mx-auto text-primary mb-2" />
                        <p className="font-semibold text-foreground">Backend Logic</p>
                    </motion.div>
                    <motion.div variants={textVariants} transition={{ ...(textVariants.visible as any).transition, delay: 0.7 }}>
                        <Code className="w-8 h-8 mx-auto text-primary mb-2" />
                        <p className="font-semibold text-foreground">Clean Code</p>
                    </motion.div>
                    <motion.div variants={textVariants} transition={{ ...(textVariants.visible as any).transition, delay: 0.8 }}>
                        <HeartHandshake className="w-8 h-8 mx-auto text-primary mb-2" />
                        <p className="font-semibold text-foreground">User Experience</p>
                    </motion.div>
                </div>

                <motion.div 
                    variants={textVariants} 
                    transition={{ ...(textVariants.visible as any).transition, delay: 1.0 }}
                    className="mt-10"
                >
                    <Button size="lg" className="text-lg">View Detailed Resume</Button>
                </motion.div>

            </motion.div>
        </section>
    );
}