
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
    date: "Day 1-2",
    time: "12:00 PM onwards",
    image: {
      id: "event-2",
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB0eXBpbmclMjBjb2RlJTIwaW4lMjB0aGUlMjBjb21wdXRlcnxlbnwwfHx8fDE3MjE4MzYzODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      hint: "person coding",
    },
  },
    {
    id: 3,
    title: "TraceBot",
    description: "Line follower robot competition.",
    date: "Day 2",
    time: "2:00 PM",
    image: {
      id: "event-3",
      url: "https://picsum.photos/seed/event3/600/400",
      hint: "robot combat",
    },
  },
  {
    id: 4,
    title: "Ardentis",
    description: "Ideathon - Idea presentation.",
    date: "Day 3",
    time: "11:00 AM",
    image: {
      id: "event-4",
      url: "https://picsum.photos/seed/event4/600/400",
      hint: "business pitch",
    },
  },
  {
    id: 5,
    title: "Waltz",
    description: "Dance competition",
    date: "Day 3",
    time: "6:00 PM",
    image: {
      id: "event-5",
      url: "https://picsum.photos/seed/event5/600/400",
      hint: "music concert",
    },
  },
  {
    id: 6,
    title: "MindScape",
    description: "Mind game - puzzle solving",
    date: "Day 2",
    time: "10:00 AM",
    image: {
      id: "event-7",
      url: "https://picsum.photos/seed/event7/600/400",
      hint: "AI workshop",
    },
  },
  {
    id: 7,
    title: "Hiest & Seek",
    description: "Treasure hunt",
    date: "Day 3",
    time: "1:00 PM",
    image: {
      id: "event-8",
      url: "https://picsum.photos/seed/event8/600/400",
      hint: "esports gaming",
    },
  },
  {
    id: 8,
    title: "Bug Smash",
    description: "Debugging Competition",
    date: "Day 2",
    time: "4:00 PM",
    image: {
      id: "event-9",
      url: "https://picsum.photos/seed/event9/600/400",
      hint: "street theatre",
    },
  },
    {
    id: 9,
    title: "Inquizitive",
    description: "Quiz Competiton",
    date: "Day 1-4",
    time: "All Day",
    image: {
      id: "event-10",
      url: "https://picsum.photos/seed/event10/600/400",
      hint: "photo gallery",
    },
  },
  {
    id: 10,
    title: "Web Craft",
    description: "Web Designing Competition",
    date: "Day 4",
    time: "7:00 PM",
    image: {
      id: "event-6",
      url: "https://picsum.photos/seed/event6/600/400",
      hint: "dj party",
    },
  },
];
