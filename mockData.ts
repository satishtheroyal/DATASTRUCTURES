import { MockStudent, ChatConversation, Notification, NotificationType, AssignedTest, ExamStatus, Competition, CompetitionStatus, StudyGroup, GroupChatMessage, DiscussionThread, FAQItem, RecordedClass, TaskReminder } from './types';

export const mockStudentData: MockStudent[] = [
  {
    id: 1,
    username: 'CodeNinja',
    avatar: 'fas fa-user-ninja',
    progress: 85,
    level: 25,
    xp: 5250,
    streak: 42,
    confidenceScore: 90,
    progressHistory: [
      { date: 'Day 1', progress: 10 }, { date: 'Day 7', progress: 25 }, { date: 'Day 14', progress: 50 },
      { date: 'Day 21', progress: 75 }, { date: 'Day 30', progress: 85 }
    ],
    topicStrengths: [
      { topic: 'Arrays', strength: 95 }, { topic: 'Trees', strength: 80 }, { topic: 'Graphs', strength: 75 },
      { topic: 'DP', strength: 60 }, { topic: 'Strings', strength: 90 }, { topic: 'Backtracking', strength: 70 }
    ],
    recentActivity: [
      { description: "Achieved a 42-day streak!", timestamp: '1 hour ago', icon: 'FireIcon' },
      { description: "Completed 'Hard' problem: Median of Two Sorted Arrays", timestamp: '3 hours ago', icon: 'CheckBadgeIcon' },
      { description: "Mastered the 'Arrays' topic", timestamp: '1 day ago', icon: 'TrophyIcon' }
    ]
  },
  {
    id: 2,
    username: 'AlgoWizard',
    avatar: 'fas fa-hat-wizard',
    progress: 92,
    level: 24,
    xp: 4980,
    streak: 31,
    confidenceScore: 95,
    progressHistory: [
        { date: 'Day 1', progress: 15 }, { date: 'Day 7', progress: 40 }, { date: 'Day 14', progress: 60 },
        { date: 'Day 21', progress: 80 }, { date: 'Day 30', progress: 92 }
    ],
    topicStrengths: [
      { topic: 'Arrays', strength: 98 }, { topic: 'Trees', strength: 90 }, { topic: 'Graphs', strength: 88 },
      { topic: 'DP', strength: 85 }, { topic: 'Strings', strength: 92 }, { topic: 'Backtracking', strength: 80 }
    ],
    recentActivity: [
        { description: "Reached Level 24", timestamp: '4 hours ago', icon: 'RocketIcon' },
        { description: "Completed 'Graphs' topic", timestamp: '2 days ago', icon: 'TrophyIcon' },
        { description: "Solved 10 problems in a single day", timestamp: '3 days ago', icon: 'MarathonerIcon' }
    ]
  },
  { 
    id: 3, 
    username: 'SyntaxSavvy', 
    avatar: 'fas fa-robot', 
    progress: 78, 
    level: 22, 
    xp: 4620, 
    streak: 15,
    confidenceScore: 82,
    progressHistory: [
        { date: 'Day 1', progress: 5 }, { date: 'Day 7', progress: 20 }, { date: 'Day 14', progress: 45 },
        { date: 'Day 21', progress: 65 }, { date: 'Day 30', progress: 78 }
    ],
    topicStrengths: [
      { topic: 'Arrays', strength: 85 }, { topic: 'Trees', strength: 70 }, { topic: 'Graphs', strength: 65 },
      { topic: 'DP', strength: 50 }, { topic: 'Strings', strength: 88 }, { topic: 'Backtracking', strength: 60 }
    ],
    recentActivity: [
        { description: "Completed 'Strings' topic", timestamp: 'yesterday', icon: 'TrophyIcon' },
        { description: "Achieved a 15-day streak", timestamp: 'yesterday', icon: 'FireIcon' },
        { description: "Solved first 'Hard' problem", timestamp: '4 days ago', icon: 'FirstBloodIcon' }
    ]
  },
  { 
    id: 4, 
    username: 'ByteBard', 
    avatar: 'fas fa-feather-alt', 
    progress: 65, 
    level: 20, 
    xp: 4100, 
    streak: 5,
    confidenceScore: 75,
     progressHistory: [
        { date: 'Day 1', progress: 10 }, { date: 'Day 7', progress: 20 }, { date: 'Day 14', progress: 35 },
        { date: 'Day 21', progress: 50 }, { date: 'Day 30', progress: 65 }
    ],
    topicStrengths: [
      { topic: 'Arrays', strength: 70 }, { topic: 'Trees', strength: 60 }, { topic: 'Graphs', strength: 55 },
      { topic: 'DP', strength: 40 }, { topic: 'Strings', strength: 80 }, { topic: 'Backtracking', strength: 50 }
    ],
     recentActivity: [
        { description: "Reached Level 20", timestamp: '5 hours ago', icon: 'RocketIcon' },
        { description: "Completed 'Two Pointers' sub-topic", timestamp: '2 days ago', icon: 'CheckBadgeIcon' }
    ]
  },
  { 
    id: 5, 
    username: 'ScriptSorcerer', 
    avatar: 'fas fa-scroll', 
    progress: 55, 
    level: 19, 
    xp: 3850, 
    streak: 0,
    confidenceScore: 68,
     progressHistory: [
        { date: 'Day 1', progress: 8 }, { date: 'Day 7', progress: 15 }, { date: 'Day 14', progress: 30 },
        { date: 'Day 21', progress: 45 }, { date: 'Day 30', progress: 55 }
    ],
    topicStrengths: [
      { topic: 'Arrays', strength: 65 }, { topic: 'Trees', strength: 50 }, { topic: 'Graphs', strength: 45 },
      { topic: 'DP', strength: 30 }, { topic: 'Strings', strength: 75 }, { topic: 'Backtracking', strength: 40 }
    ],
     recentActivity: [
        { description: "Streak broken. Start a new one!", timestamp: '1 day ago', icon: 'TrendingDownIcon' },
        { description: "Completed 'Sliding Window' sub-topic", timestamp: '3 days ago', icon: 'CheckBadgeIcon' }
    ]
  },
];

export const mockChatData: ChatConversation = {
    1: [
        { id: 1, senderId: 'master', text: 'Hey CodeNinja, how are you finding the Arrays module?', timestamp: '10:30 AM' },
        { id: 2, senderId: 1, text: 'It\'s going great! A bit challenging but I am learning a lot.', timestamp: '10:31 AM' },
        { id: 3, senderId: 'master', text: 'Excellent. Keep up the great work. Let me know if you get stuck.', timestamp: '10:32 AM' },
    ],
    2: [
        { id: 1, senderId: 'master', text: 'Hi AlgoWizard, I saw you reached Level 24. Congratulations!', timestamp: '11:00 AM' },
        { id: 2, senderId: 2, text: 'Thanks! I am really enjoying the platform.', timestamp: '11:01 AM' },
    ],
    3: [
        { id: 1, senderId: 3, text: 'I am having some trouble with the recursion topic, can you help?', timestamp: '2:15 PM' },
    ],
    4: [],
    5: [
        { id: 1, senderId: 'master', text: 'I noticed your streak broke. Don\'t worry, happens to the best of us. Ready to start a new one?', timestamp: '9:00 AM' },
        { id: 2, senderId: 5, text: 'Yeah, I was busy yesterday. I am back on track today!', timestamp: '9:05 AM' },
    ]
};

export const mockNotifications: Notification[] = [
    { id: 1, type: NotificationType.STREAK, title: 'Streak Warning!', description: 'Your 5-day streak is about to end. Solve a problem today to keep it going!', timestamp: '2 hours ago', read: false },
    { id: 2, type: NotificationType.NEW_TOPIC, title: 'New Topic Unlocked', description: 'Congratulations! You have unlocked the "Trees" module.', timestamp: '1 day ago', read: false },
    { id: 3, type: NotificationType.TEST, title: 'Test Assigned', description: 'Master User has assigned you a new test on "Arrays & Hashing". Due in 3 days.', timestamp: '2 days ago', read: false },
    { id: 4, type: NotificationType.ACHIEVEMENT, title: 'Achievement Unlocked: Week Warrior', description: 'You maintained a 7-day streak. Keep up the great work!', timestamp: '4 days ago', read: true },
    { id: 5, type: NotificationType.SYSTEM, title: 'Platform Maintenance', description: 'There will be a scheduled maintenance on Sunday at 2 AM. The platform might be unavailable.', timestamp: '5 days ago', read: true },
    { id: 6, type: NotificationType.ACHIEVEMENT, title: 'Achievement Unlocked: First Blood', description: 'You solved your first problem. Welcome to the journey!', timestamp: '1 week ago', read: true },
];

export const mockAssignedTests: AssignedTest[] = [
    {
        id: 'test-1',
        title: 'Weekly Contest #24: Advanced Trees',
        description: 'A challenging test covering advanced tree traversal and manipulation.',
        questions: [],
        assignedStudentIds: [1],
        status: ExamStatus.ACTIVE,
        dueDate: 'Ends in 2 hours',
        totalPoints: 100
    },
    {
        id: 'test-2',
        title: 'Arrays & Hashing Quiz',
        description: 'A quick quiz to test your fundamental knowledge of arrays.',
        questions: [],
        assignedStudentIds: [1],
        status: ExamStatus.UPCOMING,
        dueDate: 'Due in 3 days',
        totalPoints: 50
    },
    {
        id: 'test-3',
        title: 'Mid-term Exam: Core DSA Concepts',
        description: 'A comprehensive exam covering all topics from Arrays to Stacks.',
        questions: [],
        assignedStudentIds: [1],
        status: ExamStatus.COMPLETED,
        dueDate: 'Completed on 24th July',
        score: 85,
        totalPoints: 100
    },
    {
        id: 'test-4',
        title: 'Pop Quiz: Linked Lists',
        description: 'A short quiz on linked list basics.',
        questions: [],
        assignedStudentIds: [1],
        status: ExamStatus.UPCOMING,
        dueDate: 'Due in 5 days',
        totalPoints: 30
    },
    {
        id: 'test-5',
        title: 'Monthly Contest #5: Dynamic Programming',
        description: 'The monthly DP challenge.',
        questions: [],
        assignedStudentIds: [1],
        status: ExamStatus.COMPLETED,
        dueDate: 'Completed on 1st July',
        score: 64,
        totalPoints: 100
    },
];

export const mockCompetitions: Competition[] = [
    {
        id: 'comp-live-1',
        title: 'CyberByte Clash 2024',
        description: 'A 90-minute speed coding challenge focused on algorithms and data structures.',
        status: CompetitionStatus.LIVE,
        startTime: new Date(Date.now() - 30 * 60 * 1000), // Started 30 mins ago
        duration: 90,
        participants: 1250,
        bannerImage: 'https://picsum.photos/seed/cyberclash/1200/400',
    },
    {
        id: 'comp-upcoming-1',
        title: 'CodeSprint: Recursion Rumble',
        description: 'A deep dive into recursive problem-solving.',
        status: CompetitionStatus.UPCOMING,
        startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Starts in 2 days
        duration: 120,
        participants: 480,
        bannerImage: 'https://picsum.photos/seed/recursion/1200/400',
    },
    {
        id: 'comp-upcoming-2',
        title: 'Data Structures Derby',
        description: 'Test your knowledge on a wide range of data structures.',
        status: CompetitionStatus.UPCOMING,
        startTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // Starts in 5 days
        duration: 180,
        participants: 890,
        bannerImage: 'https://picsum.photos/seed/dsderby/1200/400',
    },
    {
        id: 'comp-ended-1',
        title: 'Bit Manipulation Bonanza',
        description: 'A previous contest focused on bitwise operations.',
        status: CompetitionStatus.ENDED,
        startTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Ended a week ago
        duration: 90,
        participants: 2100,
        bannerImage: 'https://picsum.photos/seed/bitbonanza/1200/400',
    },
];

export const mockStudyGroups: StudyGroup[] = [
    {
        id: 'sg-1',
        name: 'DP Dominators',
        description: 'A group for those who want to master Dynamic Programming. We meet twice a week to solve problems.',
        coverImage: 'https://picsum.photos/seed/dp/400/200',
        memberProfiles: mockStudentData.slice(0, 2).map(s => ({ id: s.id, username: s.username, avatar: s.avatar })),
        maxMembers: 10,
        topics: ['Dynamic Programming', 'Recursion'],
        isPrivate: false,
    },
    {
        id: 'sg-2',
        name: 'Graph Gurus',
        description: 'Exploring everything from BFS/DFS to complex graph algorithms. All levels welcome.',
        coverImage: 'https://picsum.photos/seed/graphs/400/200',
        memberProfiles: mockStudentData.slice(1, 4).map(s => ({ id: s.id, username: s.username, avatar: s.avatar })),
        maxMembers: 15,
        topics: ['Graphs', 'Trees'],
        isPrivate: false,
    },
    {
        id: 'sg-3',
        name: 'Beginner\'s Circle',
        description: 'A friendly, safe space for beginners to learn the fundamentals of DSA together. No question is a dumb question!',
        coverImage: 'https://picsum.photos/seed/beginner/400/200',
        memberProfiles: mockStudentData.slice(3, 5).map(s => ({ id: s.id, username: s.username, avatar: s.avatar })),
        maxMembers: 20,
        topics: ['Arrays', 'Strings', 'Linked List'],
        isPrivate: false,
    },
    {
        id: 'sg-4',
        name: 'Interview Prep Squad (Invite Only)',
        description: 'A high-intensity group for members in their final stages of interview preparation for FAANG companies.',
        coverImage: 'https://picsum.photos/seed/interview/400/200',
        memberProfiles: mockStudentData.slice(0, 5).map(s => ({ id: s.id, username: s.username, avatar: s.avatar })),
        maxMembers: 6,
        topics: ['System Design', 'Hard Problems'],
        isPrivate: true,
    },
     {
        id: 'sg-5',
        name: 'Tree Traversers',
        description: 'Dedicated to mastering all forms of tree traversals and problems. Inorder, Preorder, Postorder, and beyond.',
        coverImage: 'https://picsum.photos/seed/trees/400/200',
        memberProfiles: [mockStudentData[0], mockStudentData[3]].map(s => ({ id: s.id, username: s.username, avatar: s.avatar })),
        maxMembers: 12,
        topics: ['Trees', 'Binary Search'],
        isPrivate: false,
    },
    {
        id: 'sg-6',
        name: 'Weekly Contest Warriors',
        description: 'We get together every weekend to participate in online contests and discuss the solutions afterward.',
        coverImage: 'https://picsum.photos/seed/contest/400/200',
        memberProfiles: mockStudentData.slice(0, 5).map(s => ({ id: s.id, username: s.username, avatar: s.avatar })),
        maxMembers: 15,
        topics: ['Competitive Programming', 'Algorithms'],
        isPrivate: false,
    },
];

export const mockGroupChatData: { [key: string]: GroupChatMessage[] } = {
    'sg-1': [
        { id: 'msg1', sender: { id: 1, username: 'CodeNinja', avatar: 'fas fa-user-ninja' }, text: 'Who wants to tackle a hard DP problem tonight?', timestamp: '10:30 AM' },
        { id: 'msg2', sender: { id: 2, username: 'AlgoWizard', avatar: 'fas fa-hat-wizard' }, text: 'I\'m in! Send it over.', timestamp: '10:31 AM' },
    ],
    'sg-2': [
        { id: 'msg3', sender: { id: 2, username: 'AlgoWizard', avatar: 'fas fa-hat-wizard' }, text: 'I found a great article on Dijkstra\'s algorithm, sharing it here.', timestamp: 'Yesterday' },
        { id: 'msg4', sender: { id: 3, username: 'SyntaxSavvy', avatar: 'fas fa-robot' }, text: 'Thanks! This is super helpful.', timestamp: 'Yesterday' },
    ],
};

export const mockDiscussionThreads: DiscussionThread[] = [
    { id: 'd1', title: 'Struggling with Time Complexity for Recursive Functions', author: mockStudentData[3], category: 'General', repliesCount: 12, viewsCount: 154, lastActivity: '2 hours ago', isPinned: true, isLocked: false },
    { id: 'd2', title: 'Best resources for learning Dynamic Programming?', author: mockStudentData[4], category: 'Dynamic Programming', repliesCount: 25, viewsCount: 432, lastActivity: '5 hours ago', isPinned: false, isLocked: false },
    { id: 'd3', title: 'My Solution for "Median of Two Sorted Arrays" - Feedback Appreciated', author: mockStudentData[0], category: 'Hard Problems', repliesCount: 8, viewsCount: 98, lastActivity: '1 day ago', isPinned: false, isLocked: false },
    { id: 'd4', title: 'How to approach Graph problems? (BFS vs DFS)', author: mockStudentData[2], category: 'Graphs', repliesCount: 18, viewsCount: 310, lastActivity: '2 days ago', isPinned: false, isLocked: false },
    { id: 'd5', title: 'Interview Experience at Google (L4)', author: mockStudentData[1], category: 'Interview Experience', repliesCount: 42, viewsCount: 1200, lastActivity: '3 days ago', isPinned: false, isLocked: true },
];

export const mockFaqData: FAQItem[] = [
    { id: 'faq1', question: 'How is my progress calculated?', answer: 'Your progress is calculated based on the number of concepts completed within each DSA topic. Each topic contributes to your overall progress, which is visible on your dashboard.' },
    { id: 'faq2', question: 'How do I maintain my streak?', answer: 'To maintain your daily streak, you need to solve at least one problem from the Practice Arena each day. The day resets at midnight according to your local time.' },
    { id: 'faq3', question: 'What happens if I miss a day?', answer: 'If you miss a day of practice, your streak will be reset to zero. Some special events or rewards may offer a "streak freeze" to protect your streak for one day.' },
    { id: 'faq4', question: 'Can I suggest new features?', answer: 'Absolutely! We love hearing from our users. Please use the contact form below to send us your suggestions and feedback. We read every submission.' },
    { id: 'faq5', question: 'How are the daily problems generated?', answer: 'The five daily problems in your Practice Arena are intelligently selected based on the topics you have unlocked and your recent performance, ensuring a balanced mix of difficulties to challenge you appropriately.' },
];

export const mockRecordedClasses: RecordedClass[] = [
    { id: 'rec1', title: 'Introduction to Big O Notation', description: 'A fundamental look at how to analyze the time and space complexity of algorithms.', topic: 'Complexity Analysis', course: 'DSA Fundamentals', duration: 45, timestamp: '1 week ago', thumbnailUrl: 'https://picsum.photos/seed/bigo/400/225' },
    { id: 'rec2', title: 'Mastering Tree Traversals (DFS)', description: 'In-depth guide to Preorder, Inorder, and Postorder traversals with examples.', topic: 'Trees', course: 'DSA Fundamentals', duration: 62, timestamp: '2 weeks ago', thumbnailUrl: 'https://picsum.photos/seed/trees/400/225' },
    { id: 'rec3', title: 'The Knapsack Problem: A DP Approach', description: 'Learn how to solve the classic 0/1 Knapsack problem using Dynamic Programming.', topic: 'Dynamic Programming', course: 'Advanced Algorithms', duration: 75, timestamp: '3 weeks ago', thumbnailUrl: 'https://picsum.photos/seed/knapsack/400/225' },
    { id: 'rec4', title: 'Dijkstra\'s Shortest Path Algorithm', description: 'An exploration of Dijkstra\'s algorithm for finding the shortest paths in weighted graphs.', topic: 'Graphs', course: 'Advanced Algorithms', duration: 80, timestamp: '1 month ago', thumbnailUrl: 'https://picsum.photos/seed/dijkstra/400/225' },
    { id: 'rec5', title: 'Solving Problems with Sliding Window', description: 'A practical session on using the sliding window technique to optimize array and string problems.', topic: 'Arrays', course: 'DSA Fundamentals', duration: 55, timestamp: '1 month ago', thumbnailUrl: 'https://picsum.photos/seed/slidingwindow/400/225' },
    { id: 'rec6', title: 'Advanced Recursion and Backtracking', description: 'Tackle complex combinatorial problems with advanced recursive patterns and backtracking.', topic: 'Backtracking', course: 'Advanced Algorithms', duration: 95, timestamp: '2 months ago', thumbnailUrl: 'https://picsum.photos/seed/backtracking/400/225' },
];

// Get today's date in YYYY-MM-DD format
const getTodayString = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
};

export const mockTaskReminders: TaskReminder[] = [
    { id: 'task1', title: 'Submit Graphs Assignment', date: getTodayString(), description: 'Complete the final two problems and submit on the portal.', completed: false },
    { id: 'task2', title: 'Prepare for Mock Interview', date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], description: 'Review company-specific questions and practice STAR method.', completed: false },
    { id: 'task3', title: 'Watch DP lecture recording', date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], description: 'Catch up on the lecture about memoization.', completed: true },
    { id: 'task4', title: 'Weekly Contest', date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], description: 'Compete in the weekly coding challenge.', completed: false },
];