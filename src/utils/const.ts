const BASE_URL_PAGINATION = "https://picsum.photos/v2/list";
const IMAGE_COUNT = 100;
const VIRTUAL_ITEM_COUNT = 10000;
const projectTechnicalStack = [
  "React",
  "React Router",
  "TanStack Query",
  "TanStack Virtual",
  "React Window",
  "Tailwind CSS",
  "Picsum Photos API",
];

export const carouselApproaches = [
  {
    icon: "📄",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Pagination Carousel",
    description: "Uses `@tanstack/react-query` with `useInfiniteQuery`",
    features: [
      "Fetches 10 images per page",
      "Infinite pagination",
      "Virtual scrolling with react-virtual",
      "Scroll-only navigation",
    ],
    isMain: false,
  },
  {
    icon: "🖼️",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Virtual Carousel",
    description: "Uses `react-window` with `VariableSizeList`",
    features: [
      "Random image fetching",
      "Variable size handling",
      "Optimized rendering",
    ],
    isMain: false,
  },
  {
    icon: "∞",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Infinite Carousel",
    description: "Custom implementation with `@tanstack/react-virtual`",
    features: [
      "True infinite scrolling",
      "Multiple aspect ratios",
      "Scroll-only navigation",
    ],
    isMain: true,
  },
];

export {
  BASE_URL_PAGINATION,
  IMAGE_COUNT,
  VIRTUAL_ITEM_COUNT,
  projectTechnicalStack,
};
