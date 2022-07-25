import logo from "./logo.svg";
import "./App.css";

import ProjectsPage from "./pages/ProjectsPage";
import GlobalCalendarPage from "./pages/GlobalCalendar";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProjectCards from "./pages/TasksPage";
import CalendarPage from "./pages/CalendarPage";
import DayCalendarPage from "./pages/DayCalendarPage"
import WeekCalendarPage from "./pages/WeekCalendarPage"

import PrivateRoute from './components/routes/PrivateRoute'; 
import AnonRoute from './components/routes/AnonRoute'; 
import UserList from "./pages/chat/userList";
import Chat from "./pages/chat/chat";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PrivateRoute><ProjectsPage /></PrivateRoute>} />
        <Route exact path="/global-calendar" element={<PrivateRoute><GlobalCalendarPage /></PrivateRoute>} />
        <Route exact path="/signup" element={<AnonRoute><SignupPage /></AnonRoute>} />
        <Route exact path="/login" element={<AnonRoute><LoginPage /></AnonRoute>} />
        <Route exact path="/user-list" element={<PrivateRoute><UserList /></PrivateRoute>} />
        <Route exact path="/:projectId/tasks" element={<PrivateRoute><ProjectCards /></PrivateRoute>} />
        <Route exact path="/chat/:chatId" element={<PrivateRoute><Chat /></PrivateRoute>} />
        <Route exact path="/monthCalendar" element={<PrivateRoute><CalendarPage /></PrivateRoute>} />
        <Route exact path="/dayCalendarPage" element={<PrivateRoute><DayCalendarPage /></PrivateRoute>} />
        <Route exact path="/weekCalendarPage" element={<PrivateRoute><WeekCalendarPage /></PrivateRoute>} />
      
      </Routes>
    </div>
  );
}

export default App;
