"use client";

import { motion, type Variants } from 'motion/react'

// Define the animation variant
const bobVariants: Variants = {
  // Use a named state for the continuous animation
  bobbing: {
    y: [0, -10, 0], // Keyframes: Start at 0, move up 10px, return to 0
    transition: {
      duration: 3,         // The animation cycle takes 3 seconds
      ease: "easeInOut",   // Smooth acceleration and deceleration
      repeat: Infinity,    // Loop forever
      repeatType: "mirror", // Smoothly reverse the animation
      repeatDelay: 0.5,     // Small pause between cycles (optional)
    },
  },
  // Optional: A non-bobbing state for when it's out of view
  initial: {
      y: 0,
  }
};


const hoverGrowVariants: Variants = {
  grow: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "linear"
    }
  },

  initial: {
    scale: 1.0
  }
}

// This child components wrapped by this component will bob up and down
export function ContinuousBob({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={bobVariants}
      initial="initial"
      // Start the 'bobbing' animation only when the component is in the viewport
      whileInView="bobbing"
      // Ensure the animation only starts when visible (and maybe stops when out of view)
      viewport={{ 
        amount: 0.5, 
        once: false, // Set to false so it keeps animating every time it enters view
      }}
    >
      {children}
    </motion.div>
  );
}

export function GrowOnHover({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={hoverGrowVariants}
      initial="initial"
      whileHover="grow"
      viewport={{
        amount: 0.5,
        once: false
      }}
    >
      {children}
    </motion.div>

  )
}