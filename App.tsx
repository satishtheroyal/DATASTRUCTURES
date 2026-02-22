import React, { useState, useCallback, useMemo } from 'react';
import { Page, UserRole, UserProfile, MockStudent, Notification, StudyGroup, NotificationType } from './types';
import AuthPage from './components/AuthPage';
import OnboardingPage from './components/OnboardingPage';
import ProfileSetupPage from './components/ProfileSetupPage';
import ProfilePage from './components/ProfilePage';
import MasterDashboardPage from './components/MasterDashboard';
import { ThemeProvider } from './components/ThemeContext';
import StudentDashboard from './components/StudentDashboard';
import LearningPathPage from './components/LearningPathPage';
import PracticeArenaPage from './components/PracticeArenaPage';
import SolvedQuestionsPage from './components/SolvedQuestionsPage';
import PendingQuestionsPage from './components/PendingQuestionsPage';
import AnalyticsDashboardPage from './components/AnalyticsDashboardPage';
import VisualizationHubPage from './components/VisualizationHubPage';
import StreakTrackerPage from './components/StreakTrackerPage';
import ConceptVisualizer3DPage from './components/ConceptVisualizer3DPage';
import AlgorithmAnimatorPage from './components/AlgorithmAnimatorPage';
import ComplexityAnalyzerPage from './components/ComplexityAnalyzerPage';
import CodeExecutionFlowPage from './components/CodeExecutionFlowPage';
import AchievementsPage from './components/AchievementsPage';
import RewardsPage from './components/RewardsPage';
import LeaderboardPage from './components/LeaderboardPage';
import MasterLayout from './components/MasterLayout';
import StudentManagementPage from './components/StudentManagementPage';
import UserActivityDashboardPage from './components/UserActivityDashboardPage';
import AnalyticsCenterPage from './components/AnalyticsCenterPage';
import ChatPage from './components/ChatPage';
import NotificationsPage from './components/NotificationsPage';
import TestBuilderPage from './components/TestBuilderPage';
import ExamDashboardPage from './components/ExamDashboardPage';
import CodePlaygroundPage from './components/CodePlaygroundPage';
import VirtualClassroomPage from './components/VirtualClassroomPage';
import CompetitionArenaPage from './components/CompetitionArenaPage';
import StudyGroupsPage from './components/StudyGroupsPage';
import StudyGroupDetailPage from './components/StudyGroupDetailPage';
import CommunityForumPage from './components/CommunityForumPage';
import SupportPage from './components/SupportPage';
import SettingsPage from './components/SettingsPage';
import PublicProfilePage from './components/PublicProfilePage';
import SystemAdminPage from './components/SystemAdminPage';
import MaintenancePage from './components/MaintenancePage';
import NotFoundPage from './components/NotFoundPage';
import { mockStudentData, mockNotifications, mockTaskReminders } from './mockData';
import StudentLayout from './components/new/StudentLayout';
import GreedyVsDivideAndConquerPage from './components/GreedyVsDivideAndConquerPage';
import BitManipulationPage from './components/BitManipulationPage';
import RecordedClassesPage from './components/RecordedClassesPage';
import TaskRemindersPage from './components/TaskRemindersPage';
import "./src/index.css";
// Mock profile for an existing user to simulate fetching data after login.
const existingUserProfile: UserProfile = {
  username: 'CodeNinja',
  fullName: 'Alex Doe',
  focusArea: 'dsa',
  confidence: 75,
  avatar: 'fas fa-user-ninja',
  college: 'State University',
  graduationYear: 2024,
  platforms: ['LeetCode', 'GitHub'],
  rank: '~100,000',
  communityStats: { views: 1200, solutions: 15, discuss: 5, reputation: 50 },
  languages: [{ name: 'JavaScript', problemsSolved: 50 }, { name: 'Python', problemsSolved: 25 }],
  skills: [
    { level: 'Advanced', skills: [{ name: 'Dynamic Programming', count: 10 }] },
    { level: 'Intermediate', skills: [{ name: 'Trees', count: 15 }, { name: 'Graphs', count: 8 }] },
    { level: 'Fundamental', skills: [{ name: 'Arrays', count: 20 }, { name: 'Strings', count: 12 }] },
  ],
  easy: { solved: 40, total: 908 },
  medium: { solved: 30, total: 1936 },
  hard: { solved: 5, total: 877 },
  badges: 3,
  lockedBadge: 'November LeetCoding Challenge',
  submissions: [ { title: 'Two Sum', timestamp: '1 month ago' } ],
  totalActiveDays: 50,
  maxStreak: 15,
  heatmapData: [],
  learningPreferences: {
      dailyGoal: 5,
      difficultyMix: { easy: 40, medium: 40, hard: 20 },
      topicFocus: ['Arrays', 'Strings', 'Hash Table'],
      notifications: {
          dailyReminder: true,
          streakWarning: true,
          newTopics: true,
      }
  },
  privacySettings: {
      showActivityHeatmap: true,
      showSolvedProblems: true,
      showSkills: true,
      showBadges: true,
  },
  level: 15,
  xp: 3200,
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.AUTH_PAGE);
  const [userRole, setUserRole] = useState<UserRole>(UserRole.NORMAL);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<MockStudent | null>(null);
  const [selectedStudyGroup, setSelectedStudyGroup] = useState<StudyGroup | null>(null);

  const allNotifications = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    const reminderNotifications: Notification[] = mockTaskReminders
      .filter(reminder => reminder.date === today && !reminder.completed)
      .map((reminder, index) => ({
        id: 1000 + index, // Simple unique ID generation for mock data
        type: NotificationType.TASK_REMINDER,
        title: `Task Reminder: ${reminder.title}`,
        description: reminder.description,
        timestamp: 'Today',
        read: false,
      }));
    return [...reminderNotifications, ...mockNotifications];
  }, []);

  const [notifications, setNotifications] = useState<Notification[]>(allNotifications);
  
  const unreadNotificationsCount = useMemo(() => notifications.filter(n => !n.read).length, [notifications]);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);
  
  const handleMarkNotificationAsRead = useCallback((id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }, []);
  
  const handleMarkAllNotificationsAsRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, []);

  const handleLoginSuccess = useCallback((role: UserRole, isRegistration: boolean) => {
    setUserRole(role);
    if (role === UserRole.MASTER) {
        // Master users go directly to their dashboard.
        setCurrentPage(Page.MASTER_DASHBOARD);
    } else { // Normal User
        if (!isRegistration) {
            // This is an existing user logging in. Pre-load their profile to bypass setup.
            setUserProfile(existingUserProfile);
        }
        // Both new and existing normal users see the onboarding animation.
        setCurrentPage(Page.ONBOARDING);
    }
  }, []);

  const handleOnboardingComplete = useCallback(() => {
    // After onboarding, navigate to the student dashboard.
    // The render logic will automatically redirect to profile setup if no profile exists.
    setCurrentPage(Page.STUDENT_DASHBOARD);
  }, []);

  const handleProfileSetupComplete = useCallback((profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentPage(Page.STUDENT_DASHBOARD);
  }, []);
  
  const handleProfileUpdate = useCallback((updatedProfile: UserProfile) => {
    setUserProfile(updatedProfile);
    setCurrentPage(Page.PROFILE_PAGE);
  }, []);

  const handleLogout = useCallback(() => {
    setUserProfile(null);
    setUserRole(UserRole.NORMAL);
    setCurrentPage(Page.AUTH_PAGE);
  }, []);

  const handleViewStudentDetails = useCallback((student: MockStudent) => {
    setSelectedStudent(student);
    navigateTo(Page.USER_ACTIVITY_DASHBOARD);
  }, [navigateTo]);

  const handleBackToManagement = useCallback(() => {
      setSelectedStudent(null);
      navigateTo(Page.STUDENT_MANAGEMENT);
  }, [navigateTo]);

  const handleSelectStudyGroup = useCallback((group: StudyGroup) => {
    setSelectedStudyGroup(group);
    navigateTo(Page.STUDY_GROUP_DETAIL);
  }, [navigateTo]);

  const renderStudentPage = (pageComponent: React.ReactNode) => {
    // If the user tries to access a student page but has no profile,
    // redirect them to the profile setup page. This handles new user registration.
    if (!userProfile) {
        return <ProfileSetupPage onSetupComplete={handleProfileSetupComplete} />;
    }
    
    // If a profile exists, render the requested page within the standard student layout.
    return (
        <StudentLayout 
            userProfile={userProfile} 
            onLogout={handleLogout} 
            onNavigate={navigateTo} 
            unreadNotificationsCount={unreadNotificationsCount}
        >
            {pageComponent}
        </StudentLayout>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.AUTH_PAGE:
        return <AuthPage onLoginSuccess={handleLoginSuccess} />;
      case Page.ONBOARDING:
        return <OnboardingPage onOnboardingComplete={handleOnboardingComplete} />;
      case Page.PROFILE_SETUP:
         // This case is now primarily handled by the logic in `renderStudentPage`
        return <ProfileSetupPage onSetupComplete={handleProfileSetupComplete} />;
      case Page.STUDENT_DASHBOARD:
        return renderStudentPage(<StudentDashboard userProfile={userProfile!} onNavigate={navigateTo} />);
      case Page.PROFILE_PAGE:
        return renderStudentPage(<ProfilePage userProfile={userProfile!} onNavigate={navigateTo} />);
       case Page.SETTINGS_PAGE:
        return renderStudentPage(<SettingsPage userProfile={userProfile!} onSave={handleProfileUpdate} onCancel={() => navigateTo(Page.PROFILE_PAGE)} />);
       case Page.PUBLIC_PROFILE:
        return renderStudentPage(<PublicProfilePage userProfile={userProfile!} onNavigate={navigateTo} />);
      case Page.LEARNING_PATH:
        return renderStudentPage(<LearningPathPage onNavigate={navigateTo} />);
      case Page.PRACTICE_ARENA:
        return renderStudentPage(<PracticeArenaPage onNavigate={navigateTo} />);
      case Page.SOLVED_QUESTIONS:
        return renderStudentPage(<SolvedQuestionsPage onNavigate={navigateTo} />);
      case Page.PENDING_QUESTIONS:
        return renderStudentPage(<PendingQuestionsPage onNavigate={navigateTo} />);
      case Page.ANALYTICS_DASHBOARD:
        return renderStudentPage(<AnalyticsDashboardPage userProfile={userProfile!} onNavigate={navigateTo} />);
      case Page.VISUALIZATION_HUB:
        return renderStudentPage(<VisualizationHubPage onNavigate={navigateTo} />);
      case Page.STREAK_TRACKER:
        return renderStudentPage(<StreakTrackerPage userProfile={userProfile!} onNavigate={navigateTo} />);
       case Page.CONCEPT_VISUALIZER_3D:
        return <ConceptVisualizer3DPage onNavigate={navigateTo} />;
      case Page.ALGORITHM_ANIMATOR:
        return <AlgorithmAnimatorPage onNavigate={navigateTo} />;
      case Page.COMPLEXITY_ANALYZER:
        return <ComplexityAnalyzerPage onNavigate={navigateTo} />;
      case Page.CODE_EXECUTION_FLOW:
        return <CodeExecutionFlowPage onNavigate={navigateTo} />;
      case Page.GREEDY_VS_DIVIDE_AND_CONQUER:
        return renderStudentPage(<GreedyVsDivideAndConquerPage onNavigate={navigateTo} />);
      case Page.BIT_MANIPULATION:
        return renderStudentPage(<BitManipulationPage onNavigate={navigateTo} />);
      case Page.ACHIEVEMENTS:
        return renderStudentPage(<AchievementsPage userProfile={userProfile!} onNavigate={navigateTo} />);
      case Page.REWARDS:
        return renderStudentPage(<RewardsPage userProfile={userProfile!} onNavigate={navigateTo} />);
      case Page.LEADERBOARD:
        return renderStudentPage(<LeaderboardPage userProfile={userProfile!} onNavigate={navigateTo} />);
      case Page.NOTIFICATIONS:
        return renderStudentPage(
            <NotificationsPage
                notifications={notifications}
                onNavigate={navigateTo}
                onMarkAsRead={handleMarkNotificationAsRead}
                onMarkAllAsRead={handleMarkAllNotificationsAsRead}
            />
        );
      case Page.EXAM_DASHBOARD:
        return renderStudentPage(<ExamDashboardPage onNavigate={navigateTo} />);
      case Page.CODE_PLAYGROUND:
        return <CodePlaygroundPage onNavigate={navigateTo} />;
      case Page.VIRTUAL_CLASSROOM:
        return <VirtualClassroomPage onNavigate={navigateTo} />;
      case Page.RECORDED_CLASSES:
        return renderStudentPage(<RecordedClassesPage onNavigate={navigateTo} />);
      case Page.TASK_REMINDERS:
        return renderStudentPage(<TaskRemindersPage onNavigate={navigateTo} />);
      case Page.COMPETITION_ARENA:
        return renderStudentPage(<CompetitionArenaPage onNavigate={navigateTo} />);
      case Page.STUDY_GROUPS:
        return renderStudentPage(<StudyGroupsPage onNavigate={navigateTo} onSelectGroup={handleSelectStudyGroup} />);
      case Page.STUDY_GROUP_DETAIL:
        if (selectedStudyGroup && userProfile) {
          return <StudyGroupDetailPage 
                    group={selectedStudyGroup} 
                    userProfile={userProfile}
                    userRole={userRole}
                    onNavigate={navigateTo} 
                 />;
        }
        // Fallback if no group is selected
        return renderStudentPage(<StudyGroupsPage onNavigate={navigateTo} onSelectGroup={handleSelectStudyGroup} />);
      case Page.COMMUNITY_FORUM:
        return renderStudentPage(<CommunityForumPage onNavigate={navigateTo} />);
      case Page.SUPPORT_PAGE:
        return renderStudentPage(<SupportPage userProfile={userProfile!} onNavigate={navigateTo} />);
      case Page.MAINTENANCE_PAGE:
        return <MaintenancePage />;
      case Page.MASTER_DASHBOARD:
        if(userRole === UserRole.MASTER) {
            return (
              <MasterLayout activePage={Page.MASTER_DASHBOARD} onNavigate={navigateTo} onLogout={handleLogout}>
                <MasterDashboardPage />
              </MasterLayout>
            );
        }
        return <AuthPage onLoginSuccess={handleLoginSuccess} />;
       case Page.STUDENT_MANAGEMENT:
        if(userRole === UserRole.MASTER) {
            return (
              <MasterLayout activePage={Page.STUDENT_MANAGEMENT} onNavigate={navigateTo} onLogout={handleLogout}>
                <StudentManagementPage onViewDetails={handleViewStudentDetails} />
              </MasterLayout>
            );
        }
        return <AuthPage onLoginSuccess={handleLoginSuccess} />;
      case Page.USER_ACTIVITY_DASHBOARD:
        if(userRole === UserRole.MASTER && selectedStudent) {
             return (
              <MasterLayout activePage={Page.STUDENT_MANAGEMENT} onNavigate={navigateTo} onLogout={handleLogout}>
                <UserActivityDashboardPage student={selectedStudent} onBack={handleBackToManagement}/>
              </MasterLayout>
            );
        }
        return <AuthPage onLoginSuccess={handleLoginSuccess} />;
      case Page.ANALYTICS_CENTER:
        if(userRole === UserRole.MASTER) {
            return (
              <MasterLayout activePage={Page.ANALYTICS_CENTER} onNavigate={navigateTo} onLogout={handleLogout}>
                <AnalyticsCenterPage />
              </MasterLayout>
            );
        }
        return <AuthPage onLoginSuccess={handleLoginSuccess} />;
       case Page.CHAT:
        if (userRole === UserRole.MASTER) {
            return (
              <MasterLayout activePage={Page.CHAT} onNavigate={navigateTo} onLogout={handleLogout}>
                <ChatPage userRole={userRole} userProfile={userProfile} allStudents={mockStudentData} onNavigate={navigateTo}/>
              </MasterLayout>
            );
        }
        if (userProfile && userRole === UserRole.NORMAL) {
             return <ChatPage userRole={userRole} userProfile={userProfile} allStudents={mockStudentData} onNavigate={navigateTo}/>
        }
        return <AuthPage onLoginSuccess={handleLoginSuccess} />;
      case Page.TEST_BUILDER:
        if(userRole === UserRole.MASTER) {
            return (
              <MasterLayout activePage={Page.TEST_BUILDER} onNavigate={navigateTo} onLogout={handleLogout}>
                <TestBuilderPage />
              </MasterLayout>
            );
        }
        return <AuthPage onLoginSuccess={handleLoginSuccess} />;
      case Page.SYSTEM_ADMIN:
        if(userRole === UserRole.MASTER) {
            return (
              <MasterLayout activePage={Page.SYSTEM_ADMIN} onNavigate={navigateTo} onLogout={handleLogout}>
                <SystemAdminPage />
              </MasterLayout>
            );
        }
        return <AuthPage onLoginSuccess={handleLoginSuccess} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} userRole={userRole} />;
    }
  };

  return (
      <ThemeProvider>
       <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
  {renderPage()}
</div>
      </ThemeProvider>
    );
};

export default App;