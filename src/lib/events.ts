
export type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  image: {
    id: string;
    url: string;
    hint: string;
  };
};

export const events: Event[] = [
  {
    id: 1,
    title: "Inauguration Ceremony",
    description: "Event will be in the Medlycot",
    date: "Day 1",
    time: "09 AM to 10 Am",
    image: {
      id: "event-1",
      url: "/images/colleage.jpg",
      hint: "inauguration",
    },
  },
  {
    id: 2,
    title: "Codex",
    description: "Coding competition",
    date: "Day 1",
    time: "09:30 AM to 11:00 AM",
    image: {
      id: "event-2",
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB0eXBpbmclMjBjb2RlJTIwaW4lMjB0aGUlMjBjb21wdXRlcnxlbnwwfHx8fDE3MjE4MzYzODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      hint: "person coding",
    },
  },
    {
    id: 3,
    title: "Inquizitive",
    description: "Quiz Competiton",
    date: "Day 1",
    time: "10:00 AM to 03:00 PM",
    image: {
      id: "event-3",
      url: "/images/quiz.png",
      hint: "robot combat",
    },
  },
  {
    id: 4,
    title: "Hiest & Seek",
    description: "Treasure hunt",
    date: "Day 1",
    time: "10:00 AM to 01:00 PM",
    image: {
      id: "event-8",
      url: "/images/tresure hunt.png",
      hint: "esports gaming",
    },
  },
  {
    id: 5,
    title: "Bug Smash",
    description: "Debugging Competition",
    date: "Day 1",
    time: "01:00 PM to 02:30 PM",
    image: {
      id: "event-9",
      url: "/images/debbug.png",
      hint: "street theatre",
    },
  },
  {
    id: 6,
    title: "TraceBot",
    description: "Quiz Competiton",
    date: "Day 1",
    time: "01:00 PM to 04:00 PM",
    image: {
      id: "event-10",
      url: "/images/line.png",
      hint: "photo gallery",
    },
  },
  {
    id: 7,
    title: "MindScape",
    description: "Mind game - puzzle solving",
    date: "Day 2",
    time: "09:30 AM to 11:30 AM",
    image: {
      id: "event-7",
      url: "/images/mind.png",
      hint: "AI workshop",
    },
  },
  {
    id: 8,
    title: "Ardentis",
    description: "Ideathon - Idea presentation.",
    date: "Day 2",
    time: "11:00 AM to 12:00 PM",
    image: {
      id: "event-4",
      url: "/images/idea.png",
      hint: "business pitch"
    },
  },
    {
    id: 9,
    title: "Web Craft",
    description: "Web Designing Competition",
    date: "Day 2",
    time: "10:00 AM to 11:00 AM",
    image: {
      id: "event-6",
      url: "/images/web.png",
      hint: "dj party",
    },
  },
  {
    id: 10,
    title: "Waltz",
    description: "Dance competition",
    date: "Day 2",
    time: "04:00 PM to 05:00 PM",
    image: {
      id: "event-5",
      url: "/images/waltz.jpeg",
      hint: "music concert",
    },
  },
];
