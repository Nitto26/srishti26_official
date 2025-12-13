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
    description: "Kick off SrishtiFest with a grand opening ceremony featuring special guests and performances.",
    date: "Day 1",
    time: "10:00 AM",
    image: {
      id: "event-1",
      url: "https://picsum.photos/seed/event1/600/400",
      hint: "opening ceremony",
    },
  },
  {
    id: 2,
    title: "CodeSprint: AI Challenge",
    description: "A 24-hour hackathon focused on creating innovative solutions using Artificial Intelligence.",
    date: "Day 1-2",
    time: "12:00 PM onwards",
    image: {
      id: "event-2",
      url: "https://picsum.photos/seed/event2/600/400",
      hint: "coding hackathon",
    },
  },
  {
    id: 3,
    title: "RoboWars",
    description: "Witness the clash of titans as custom-built robots battle for supremacy in the arena.",
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
    title: "Startup Pitch Deck",
    description: "Entrepreneurs pitch their groundbreaking ideas to a panel of investors and industry experts.",
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
    title: "Crescendo: Battle of Bands",
    description: "Rock the night away with electrifying performances from the best college bands.",
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
    title: "Valedictory & DJ Night",
    description: "Concluding the fest with prize distribution followed by a massive DJ night to celebrate.",
    date: "Day 4",
    time: "7:00 PM",
    image: {
      id: "event-6",
      url: "https://picsum.photos/seed/event6/600/400",
      hint: "dj party",
    },
  },
];
