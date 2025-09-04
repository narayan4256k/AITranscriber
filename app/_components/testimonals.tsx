import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I worked on the frontend of the project, designing and implementing the user interface with React and TailwindCSS. My goal was to make it smooth, modern, and user-friendly.",
      name: "Rachana Hinge",
      designation: "Frontend Developer",
      src: "https://randomuser.me/api/portraits/women/22.jpg", 
    },
    {
      quote:
        "I focused on the backend and database design. I ensured that the APIs were secure, fast, and integrated properly with the frontend.",
      name: "Rachana Hinge",
      designation: "Backend Developer",
      src: "https://randomuser.me/api/portraits/men/45.jpg", 
    },
    {
      quote:
        "I was responsible for UI/UX design, making wireframes, and ensuring smooth user flow across the app.",
      name: "Rachana Hinge",
      designation: "UI/UX Designer",
      src: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "I worked on testing and debugging. I made sure that the app runs without crashes, covering edge cases and ensuring performance.",
      name: "Rachana Hinge",
      designation: "QA & Tester",
      src: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      quote:
        "I handled deployment and documentation. I prepared the final report, and deployed the project to make it live for demo.",
      name: "Rachana Hinge",
      designation: "DevOps & Documentation",
      src: "https://randomuser.me/api/portraits/women/36.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
