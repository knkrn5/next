export interface BlogPost {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: "Understanding React Server Components",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    excerpt: "Dive deep into how React Server Components (RSC) change the way we build web applications by rendering components entirely on the server.",
    date: "2026-05-01",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS v4",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    excerpt: "Explore the new features, performance improvements, and utility classes introduced in the highly anticipated Tailwind CSS v4.",
    date: "2026-04-20",
  },
  {
    id: "3",
    title: "A Guide to Next.js App Router",
    image: "https://images.unsplash.com/photo-1618477247222-ac60ceb3601f?q=80&w=800&auto=format&fit=crop",
    excerpt: "Learn how to structure your routes, manage layouts, and handle data fetching using the modern Next.js App Router paradigm.",
    date: "2026-04-15",
  },
  {
    id: "4",
    title: "Building Interactive Canvas with React Flow",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=800&auto=format&fit=crop",
    excerpt: "Step-by-step tutorial on creating visual node-based editors and wiring up custom nodes using the powerful @xyflow/react library.",
    date: "2026-03-30",
  },
  {
    id: "5",
    title: "The Future of Web Development in 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    excerpt: "An overview of the hottest trends in frontend and backend development that are dominating the software industry this year.",
    date: "2026-03-12",
  },
  {
    id: "6",
    title: "Optimizing Web Fonts for Speed",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    excerpt: "Tips and tricks to load custom fonts quickly without causing Layout Shifts or penalizing your core web vitals score.",
    date: "2026-02-28",
  }
];
