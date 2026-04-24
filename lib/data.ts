import { Code2, ShieldCheck, ServerCog, Wrench } from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" }
];

export const services = [
  {
    title: "IT Consulting & Support",
    description:
      "Strategic advisory and proactive support services that align your technology with measurable business outcomes.",
    icon: Wrench
  },
  {
    title: "Network & System Solutions",
    description:
      "Resilient infrastructure design, implementation, and management for secure and scalable operations.",
    icon: ServerCog
  },
  {
    title: "Cybersecurity Services",
    description:
      "Enterprise-grade threat prevention, incident response, and compliance workflows to protect critical assets.",
    icon: ShieldCheck
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored digital products engineered for performance, maintainability, and future-ready integration.",
    icon: Code2
  }
];

export const strengths = [
  {
    title: "Speed",
    description: "Agile delivery cycles with clear milestones, transparent communication, and measurable progress."
  },
  {
    title: "Reliability",
    description: "Battle-tested engineering standards and robust quality assurance for dependable outcomes."
  },
  {
    title: "Security",
    description: "Security-first architecture and best practices embedded at every stage of delivery."
  }
];
