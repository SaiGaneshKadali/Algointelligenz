import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Loader from '../components/common/Loader';
import { CallModalProvider } from '../context/CallModalContext';

// Lazy loading pages for optimized bundle size & code splitting
const Home = lazy(() => import('../pages/Home'));
const Courses = lazy(() => import('../pages/Courses'));
// const Placements = lazy(() => import('../pages/Placements'));
// const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const CourseDetail = lazy(() => import('../pages/CourseDetail'));

export default function AppRoutes() {
  return (
    <CallModalProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Main Pages */}
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
            {/* <Route path="placements" element={<Placements />} />
            <Route path="about" element={<About />} /> */}
            <Route path="courses/:id" element={<CourseDetail />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Fallback for undefined routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </CallModalProvider>
  );
}
