import React from 'react';

export enum UserRole {
  NORMAL = 'Normal User',
  MASTER = 'Master/Super User',
}

export enum Page {
  AUTH_PAGE = 'AUTH_PAGE',
  ONBOARDING = 'ONBOARDING',
  PROFILE_SETUP = 'PROFILE_SETUP',
  STUDENT_DASHBOARD = 'STUDENT_DASHBOARD',
  PROFILE_PAGE = 'PROFILE_PAGE',
  MASTER_DASHBOARD = 'MASTER_DASHBOARD',
  STUDENT_MANAGEMENT = 'STUDENT_MANAGEMENT',
  USER_ACTIVITY_DASHBOARD = 'USER_ACTIVITY_DASHBOARD',
  PROFILE_EDIT = 'PROFILE_EDIT',
  LEARNING_PREFERENCES = 'LEARNING_PREFERENCES',
  LEARNING_PATH = 'LEARNING_PATH',
  PRACTICE_ARENA = 'PRACTICE_ARENA',
  SOLVED_QUESTIONS = 'SOLVED_QUESTIONS',
  PENDING_QUESTIONS = 'PENDING_QUESTIONS',
  ANALYTICS_DASHBOARD = 'ANALYTICS_DASHBOARD',
  VISUALIZATION_HUB = 'VISUALIZATION_HUB',
  STREAK_TRACKER = 'STREAK_TRACKER',
  CONCEPT_VISUALIZER_3D = 'CONCEPT_VISUALIZER_3D',
  ALGORITHM_ANIMATOR = 'ALGORITHM_ANIMATOR',
  COMPLEXITY_ANALYZER = 'COMPLEXITY_ANALYZER',
  CODE_EXECUTION_FLOW = 'CODE_EXECUTION_FLOW',
  ACHIEVEMENTS = 'ACHIEVEMENTS',
  REWARDS = 'REWARDS',
  LEADERBOARD = 'LEADERBOARD',
  ANALYTICS_CENTER = 'ANALYTICS_CENTER',
  CHAT = 'CHAT',
  NOTIFICATIONS = 'NOTIFICATIONS',
  TEST_BUILDER = 'TEST_BUILDER',
  EXAM_DASHBOARD = 'EXAM_DASHBOARD',
  CODE_PLAYGROUND = 'CODE_PLAYGROUND',
  VIRTUAL_CLASSROOM = 'VIRTUAL_CLASSROOM',
  RECORDED_CLASSES = 'RECORDED_CLASSES',
  COMPETITION_ARENA = 'COMPETITION_ARENA',
  STUDY_GROUPS = 'STUDY_GROUPS',
  STUDY_GROUP_DETAIL = 'STUDY_GROUP_DETAIL',
  COMMUNITY_FORUM = 'COMMUNITY_FORUM',
  SUPPORT_PAGE = 'SUPPORT_PAGE',
  PUBLIC_PROFILE = 'PUBLIC_PROFILE',
  SETTINGS_PAGE = 'SETTINGS_PAGE',
  SYSTEM_ADMIN = 'SYSTEM_ADMIN',
  MAINTENANCE_PAGE = 'MAINTENANCE_PAGE',
  NOT_FOUND_PAGE = 'NOT_FOUND_PAGE',
  GREEDY_VS_DIVIDE_AND_CONQUER = 'GREEDY_VS_DIVIDE_AND_CONQUER',
  BIT_MANIPULATION = 'BIT_MANIPULATION',
  TASK_REMINDERS = 'TASK_REMINDERS',
}

interface CommunityStat {
  views: number;
  solutions: number;
  discuss: number;
  reputation: number;
}

interface LanguageStat {
  name: string;
  problemsSolved: number;
}

interface SkillStat {
  name: string;
  count: number;
}

export interface SkillCategory {
  level: 'Advanced' | 'Intermediate' | 'Fundamental';
  skills: SkillStat[];
}

interface ProblemStats {
  solved: number;
  total: number;
}

interface Submission {
  title: string;
  timestamp: string;
}

export interface LearningPreferences {
  dailyGoal: number;
  difficultyMix: {
    easy: number;
    medium: number;
    hard: number;
  };
  topicFocus: string[];
  notifications: {
    dailyReminder: boolean;
    streakWarning: boolean;
    newTopics: boolean;
  };
}

export interface PrivacySettings {
  showActivityHeatmap: boolean;
  showSolvedProblems: boolean;
  showSkills: boolean;
  showBadges: boolean;
}

export interface UserProfile {
  // From previous setup
  username: string;
  fullName: string;
  focusArea: string;
  confidence: number;
  avatar?: string;
  college?: string;
  graduationYear?: number;
  platforms?: string[];
  
  // New fields for LeetCode style profile
  rank: string;
  communityStats: CommunityStat;
  languages: LanguageStat[];
  skills: SkillCategory[];
  easy: ProblemStats;
  medium: ProblemStats;
  hard: ProblemStats;
  badges: number;
  lockedBadge: string;
  submissions: Submission[];
  heatmapData: { date: string; count: number }[];
  totalActiveDays: number;
  maxStreak: number;

  // Learning Preferences
  learningPreferences: LearningPreferences;

  // Privacy Settings
  privacySettings: PrivacySettings;
  
  // Gamification
  level: number;
  xp: number;
}

export interface DsaTopic {
  id: string;
  name: string;
  icon: React.ReactNode;
  progress: number;
  locked: boolean;
  description: string;
  totalConcepts: number;
  completedConcepts: number;
}

export enum QuestionStatus {
  NOT_STARTED = 'Not Started',
  SOLVED = 'Solved',
  PENDING = 'Pending',
}

export interface Question {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
  status: QuestionStatus;
}

export interface MockStudent {
  id: number;
  username: string;
  avatar: string;
  progress: number;
  level: number;
  xp: number;
  streak: number;
  confidenceScore: number;
  progressHistory: { date: string; progress: number }[];
  topicStrengths: { topic: string; strength: number }[];
  recentActivity: { description: string; timestamp: string, icon: string }[];
}

export interface ChatMessage {
    id: number;
    senderId: 'master' | number; // 'master' or student ID
    text: string;
    timestamp: string;
}

export interface ChatConversation {
    [key: number]: ChatMessage[]; // Key is the student ID
}

export enum NotificationType {
    STREAK = 'STREAK',
    NEW_TOPIC = 'NEW_TOPIC',
    TEST = 'TEST',
    ACHIEVEMENT = 'ACHIEVEMENT',
    SYSTEM = 'SYSTEM',
    TASK_REMINDER = 'TASK_REMINDER',
}

export interface Notification {
    id: number;
    type: NotificationType;
    title: string;
    description: string;
    timestamp: string;
    read: boolean;
}

export interface TestQuestionOption {
    id: string;
    text: string;
}

export interface TestQuestion {
    id: string;
    text: string;
    options: TestQuestionOption[];
    correctAnswerId: string | null;
    points: number;
}

export interface Test {
    id: string;
    title: string;
    description: string;
    questions: TestQuestion[];
    assignedStudentIds: number[];
}

export enum ExamStatus {
    UPCOMING = 'UPCOMING',
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
}

export interface AssignedTest extends Test {
    status: ExamStatus;
    dueDate: string;
    score?: number;
    totalPoints?: number;
}

export enum CompetitionStatus {
    LIVE = 'LIVE',
    UPCOMING = 'UPCOMING',
    ENDED = 'ENDED',
}

export interface Competition {
    id: string;
    title: string;
    description: string;
    status: CompetitionStatus;
    startTime: Date;
    duration: number; // in minutes
    participants: number;
    bannerImage: string;
}

export interface UserReference {
  id: number;
  username: string;
  avatar: string;
}

export interface StudyGroup {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  memberProfiles: UserReference[];
  maxMembers: number;
  topics: string[];
  isPrivate: boolean;
}

export interface GroupChatMessage {
  id: string;
  sender: UserReference;
  text: string;
  timestamp: string;
}

export interface DiscussionThread {
  id: string;
  title: string;
  author: UserReference;
  category: string;
  repliesCount: number;
  viewsCount: number;
  lastActivity: string;
  isPinned: boolean;
  isLocked: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface RecordedClass {
  id: string;
  title: string;
  description: string;
  topic: string;
  course: 'DSA Fundamentals' | 'Advanced Algorithms';
  duration: number; // in minutes
  timestamp: string;
  thumbnailUrl: string;
}

export interface TaskReminder {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD format
  description: string;
  completed: boolean;
}