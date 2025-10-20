"use client"

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'motion/react';
import { ContinuousBob, GrowOnHover } from './Animations';

const PROFILE_IMAGE_PATH = "/headshot.jpg";

export default function HomepageHero() {
  // Framer Motion Animation Variants for a smooth entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
        delayChildren: 0.3,   // Initial delay
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-8 text-center overflow-hidden">

      <motion.div
        className="z-10 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image (Ensure 'next/image' is configured for your domain if using remote images) */}
        <motion.div
            variants={itemVariants}
            className="mb-6"
        >
        <ContinuousBob>
          <div className={`relative w-32 h-32
                            md:w-48 md:h-48 mx-auto
                            rounded-full overflow-hidden
                            border-4 border-primary shadow-2xl
                            `}>
            <Image
              src={PROFILE_IMAGE_PATH}
              alt="Profile Picture of Tai Williams"
              layout="fill"
              className="object-cover"
              priority
            />
          </div>
        </ContinuousBob>
        </motion.div>

        {/* Name */}
        <GrowOnHover>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-4"
          >
            Tai Williams
          </motion.h1>
        </GrowOnHover>

        {/* Short Blurb */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
        >
          I build scalable and user-friendly applications as a Full-Stack Developer. Specialized in the modern web development ecosystem: **Next.js, TypeScript, and the MERN stack.**
        </motion.p>

        {/* Call to Action (Optional, but highly recommended) */}
        <motion.div variants={itemVariants} className="mt-8">
          {/* Example: A Button Component from Shadcn */}
          {/* <Button size="lg" className="text-lg">View My Projects <ArrowRight className="ml-2 h-5 w-5" /></Button> */}
        </motion.div>

      </motion.div>
    </section>
  );
}