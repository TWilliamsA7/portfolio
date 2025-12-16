import {
  Globe,
  ShoppingCart,
  MessageSquare,
  Heart,
  Zap,
  Calendar,
} from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  icon: any;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    fullDescription:
      "Built a comprehensive e-commerce platform from scratch using the MERN stack. Implemented user authentication, product management, shopping cart functionality, and integrated Stripe for secure payments. The platform features real-time inventory updates, order tracking, and an admin dashboard for managing products and orders.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    icon: ShoppingCart,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "User authentication with JWT tokens",
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Admin dashboard for product management",
      "Order tracking and history",
      "Responsive design for all devices",
    ],
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.",
    fullDescription:
      "Developed a comprehensive analytics dashboard that aggregates data from multiple social media platforms. Features interactive charts and graphs using Recharts, real-time data updates, and customizable reporting. Users can track engagement metrics, follower growth, and content performance across different platforms.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Recharts",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    icon: Zap,
    githubUrl: "https://github.com",
    features: [
      "Multi-platform data aggregation",
      "Interactive charts and visualizations",
      "Real-time metric updates",
      "Customizable reporting tools",
      "Export data in multiple formats",
      "Dark/light theme support",
    ],
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "Real-time messaging application with WebSocket support, group chats, and media sharing capabilities.",
    fullDescription:
      "Created a real-time chat application using WebSocket technology for instant messaging. The app supports one-on-one chats, group conversations, file sharing, and message reactions. Implemented end-to-end encryption for secure communications and added features like typing indicators and read receipts.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop",
    icon: MessageSquare,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "Real-time messaging with Socket.io",
      "Group chat functionality",
      "File and image sharing",
      "Message reactions and replies",
      "Typing indicators and read receipts",
      "End-to-end encryption",
    ],
  },
  {
    id: 4,
    title: "IoT Health Monitor",
    description:
      "Embedded system for monitoring vital signs with cloud integration and real-time alerts.",
    fullDescription:
      "Designed and built an IoT-based health monitoring system using embedded sensors and microcontrollers. The device tracks vital signs like heart rate, temperature, and blood oxygen levels, sending data to a cloud platform for analysis. Implemented real-time alerts for abnormal readings and created a web dashboard for visualization.",
    technologies: ["C++", "Arduino", "MQTT", "Python", "React", "AWS IoT"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    icon: Heart,
    githubUrl: "https://github.com",
    features: [
      "Real-time vital sign monitoring",
      "Cloud data synchronization",
      "Automated alerts for abnormal readings",
      "Historical data visualization",
      "Low-power sensor integration",
      "MQTT protocol for IoT communication",
    ],
  },
  {
    id: 5,
    title: "Portfolio CMS",
    description:
      "Content management system for portfolios with drag-and-drop interface and template customization.",
    fullDescription:
      "Built a modern CMS specifically designed for creating and managing portfolio websites. Features a drag-and-drop interface for content arrangement, customizable templates, and SEO optimization tools. Users can easily update their projects, blog posts, and personal information without coding knowledge.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    icon: Globe,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "Drag-and-drop content builder",
      "Multiple customizable templates",
      "SEO optimization tools",
      "Image optimization and CDN",
      "Blog integration",
      "Analytics dashboard",
    ],
  },
  {
    id: 6,
    title: "Event Management System",
    description:
      "Platform for organizing and managing events with ticketing, scheduling, and attendee tracking.",
    fullDescription:
      "Developed a comprehensive event management platform that handles everything from event creation to post-event analytics. Features include ticket sales, attendee registration, schedule management, and QR code-based check-ins. Integrated email notifications and calendar syncing for seamless event coordination.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe",
      "SendGrid",
    ],
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
    icon: Calendar,
    githubUrl: "https://github.com",
    features: [
      "Event creation and management",
      "Ticket sales and QR code generation",
      "Attendee registration and tracking",
      "Email notifications and reminders",
      "Calendar integration",
      "Post-event analytics and reporting",
    ],
  },
];
