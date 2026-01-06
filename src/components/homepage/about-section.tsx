"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Code, Cog, Component } from "lucide-react";

const ABOUT_ME_IMAGE_PATH: string = "/shellhacks_win_2025.jpg";

// Animation variants
const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-xl md:text-3xl font-bold text-center text-primary mb-12 uppercase tracking-widest">
        About Me
      </h2>

      <motion.div
        // 1. GRID LAYOUT: 1 column on mobile, 2 columns on medium+ screens
        // items-center ensures the text is vertically centered with the image
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible" // Fixed typo here (was 'visibile')
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* TEXT SECTION */}
        {/* 2. ALIGNMENT: Center text on mobile, Left align on desktop */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.h1
            variants={textVariants}
            className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight text-foreground"
          >
            A Bit About My Background
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-md md:text-lg text-muted-foreground leading-relaxed mb-6"
          >
            As a developing Computer Engineer, my passion lies in using both
            software and hardware to augment each other. I thrive off of a
            challenge and truly enjoy testing my hand at new concepts.
          </motion.p>

          <motion.p
            variants={textVariants}
            className="text-md md:text-lg text-muted-foreground leading-relaxed"
          >
            My journey has taken dips into many different areas including Full
            Stack Development, Digital Design, Machine Learning, Robotics, and
            more! I am constantly looking to deepen and expand my horizons.
          </motion.p>

          <Separator className="my-8" />

          <div className="flex justify-center space-x-8">
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <Component className="w-8 h-8 mx-auto text-primary mb-2" />
              <p className="font-semibold text-foreground">Design</p>
            </motion.div>
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            >
              <Code className="w-8 h-8 mx-auto text-primary mb-2" />
              <p className="font-semibold text-foreground">Development</p>
            </motion.div>
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            >
              <Cog className="w-8 h-8 mx-auto text-primary mb-2" />
              <p className="font-semibold text-foreground">Testing</p>
            </motion.div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        {/* 3. IMAGE WRAPPER: Needs relative + defined height for 'fill' to work */}
        <div className="order-1 md:order-2 relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-xl border-5 border-primary/20">
          <Image
            src={ABOUT_ME_IMAGE_PATH}
            alt="About Me Image"
            fill // This makes the image fill the parent container
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw" // Optimization for loading
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
