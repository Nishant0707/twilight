// utils/mockData.js

// Pie chart mock data
export const pieChartData = [
  { name: "Super Admin", value: 4 },
  { name: "Admin", value: 10 },
  { name: "Candidates", value: 85 },
];

// Bar chart mock data
export const barChartData = [
  { name: "Mon", jobs: 3 },
  { name: "Tue", jobs: 6 },
  { name: "Wed", jobs: 4 },
  { name: "Thu", jobs: 8 },
  { name: "Fri", jobs: 5 },
  { name: "Sat", jobs: 2 },
  { name: "Sun", jobs: 1 },
];

// Line chart mock data
export const lineChartData = [
  { name: "Week 1", applicants: 10 },
  { name: "Week 2", applicants: 25 },
  { name: "Week 3", applicants: 15 },
  { name: "Week 4", applicants: 30 },
];

// Chat messages for admin UI (optional future feature)
export const chatMessages = [
  {
    id: 1,
    sender: "Super Admin",
    message: "Welcome to the Admin Dashboard!",
    timestamp: "2025-07-17T10:00:00",
  },
  {
    id: 2,
    sender: "Admin",
    message: "New candidate data has been uploaded.",
    timestamp: "2025-07-17T10:15:00",
  },
  {
    id: 3,
    sender: "Super Admin",
    message: "Great. Please make sure the resume is visible.",
    timestamp: "2025-07-17T10:20:00",
  },
  {
    id: 4,
    sender: "Admin",
    message: "All set! Also updated the job listings.",
    timestamp: "2025-07-17T10:25:00",
  },
  {
    id: 5,
    sender: "Super Admin",
    message: "Thanks! Let's prepare for the hiring review next week.",
    timestamp: "2025-07-17T10:30:00",
  },
];
