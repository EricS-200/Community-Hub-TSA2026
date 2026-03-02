import img1 from "../../public/resource-directory/resources/image (1).jpg";
import img2 from "../../public/resource-directory/resources/image (2).jpg";
import img3 from "../../public/resource-directory/resources/image (3).jpg";
import img4 from "../../public/resource-directory/resources/image (4).jpg";
import img5 from "../../public/resource-directory/resources/image (5).jpg";
import img6 from "../../public/resource-directory/resources/image (6).jpg";
import img7 from "../../public/resource-directory/resources/image (7).jpg";
import img8 from "../../public/resource-directory/resources/image (8).jpg";
import img9 from "../../public/resource-directory/resources/image (9).jpg";
import img10 from "../../public/resource-directory/resources/image (10).jpg";
import img11 from "../../public/resource-directory/resources/image (11).jpg";
import img12 from "../../public/resource-directory/resources/image (12).jpg";
import img13 from "../../public/resource-directory/resources/image (13).jpg";
import img14 from "../../public/resource-directory/resources/image (14).jpg";
import img15 from "../../public/resource-directory/resources/image (15).jpg";

export const RESOURCES = [
  {
    id: 1,
    slug: "meal-discount-monday",
    title: "Meal Discount Monday",
    category: "Food",
    address: "1600 Man O' War Blvd.",
    details:
      "Weekly community meal discount program partnering with local restaurants to provide budget-friendly dinners for families.",
    image: img1,
  },
  {
    id: 2,
    slug: "open-badminton-practice",
    title: "Open Badminton Practice",
    category: "Sport",
    address: "1600 Man O' War Blvd.",
    details:
      "Drop-in badminton practice for all ages and skill levels. Equipment is provided, and no registration is required.",
    image: img2,
  },
  {
    id: 3,
    slug: "public-tutoring",
    title: "Public Tutoring",
    category: "Education",
    address: "1600 Man O' War Blvd.",
    details:
      "After-school tutoring in math, reading, and science for grades 4–12 led by volunteer educators and university students.",
    image: img3,
  },
  {
    id: 4,
    slug: "new-restaurant-opening",
    title: "New Restaurant Opening",
    category: "Food",
    address: "1600 Man O' War Blvd.",
    details:
      "Local restaurant soft opening with community tasting menu and donation-based meals supporting neighborhood food banks.",
    image: img4,
  },
  {
    id: 5,
    slug: "food-distribution",
    title: "Food Distribution",
    category: "Food",
    address: "1600 Man O' War Blvd.",
    details:
      "Weekly fresh food distribution with boxes of produce, pantry staples, and recipes tailored for families.",
    image: img5,
  },
  {
    id: 6,
    slug: "mental-health-counseling",
    title: "Mental Health Counseling",
    category: "Health",
    address: "1600 Man O' War Blvd.",
    details:
      "Low-cost counseling sessions with licensed professionals focusing on stress, anxiety, and family support.",
    image: img6,
  },
  {
    id: 7,
    slug: "recreational-basketball-league",
    title: "Recreational Basketball League",
    category: "Sport",
    address: "1600 Man O' War Blvd.",
    details:
      "Non-competitive basketball league emphasizing teamwork, fitness, and fun for teens and young adults.",
    image: img7,
  },
  {
    id: 8,
    slug: "engineering-workshop",
    title: "Engineering Workshop",
    category: "Education",
    address: "1600 Man O' War Blvd.",
    details:
      "Hands-on STEM workshop exploring circuits, robotics, and basic engineering design challenges for students.",
    image: img8,
  },
  {
    id: 9,
    slug: "career-resume-clinic",
    title: "Career Resume Clinic",
    category: "Employment",
    address: "1600 Man O' War Blvd.",
    details:
      "One-on-one resume reviews, mock interviews, and job search support hosted by local workforce specialists.",
    image: img9,
  },
  {
    id: 10,
    slug: "job-fair-local-employers",
    title: "Job Fair: Local Employers",
    category: "Employment",
    address: "1600 Man O' War Blvd.",
    details:
      "Quarterly job fair connecting residents with local employers, apprenticeship programs, and training providers.",
    image: img10,
  },
  {
    id: 11,
    slug: "community-clean-up",
    title: "Community Clean-Up",
    category: "Volunteering",
    address: "1600 Man O' War Blvd.",
    details:
      "Weekend trash pickup and beautification event that supplies gloves, bags, and tools for neighbors to clean shared spaces.",
    image: img11,
  },
  {
    id: 12,
    slug: "volunteer-orientation",
    title: "Volunteer Orientation",
    category: "Volunteering",
    address: "1600 Man O' War Blvd.",
    details:
      "Monthly orientation session introducing new volunteers to partner organizations, roles, and upcoming projects.",
    image: img12,
  },
  {
    id: 13,
    slug: "after-school-wellness-check",
    title: "After-School Wellness Check",
    category: "Health",
    address: "1600 Man O' War Blvd.",
    details:
      "Drop-in wellness screening for students that includes basic health checks and referrals to local clinics.",
    image: img13,
  },
  {
    id: 14,
    slug: "community-interview-prep",
    title: "Community Interview Prep",
    category: "Employment",
    address: "1600 Man O' War Blvd.",
    details:
      "Small-group sessions practicing interview questions, body language, and salary conversations in a supportive setting.",
    image: img14,
  },
  {
    id: 15,
    slug: "weekend-volunteer-drive",
    title: "Weekend Volunteer Drive",
    category: "Volunteering",
    address: "1600 Man O' War Blvd.",
    details:
      "Rotating volunteer opportunities with neighborhood nonprofits, from packing food boxes to mentoring youth.",
    image: img15,
  },
];

export const CATEGORIES = [
  "All",
  ...Array.from(new Set(RESOURCES.map((r) => r.category))),
];
