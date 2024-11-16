import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import News from './pages/News'
import About from './pages/About'
import President from './pages/President'
import Goals from './pages/Goals'
import Activities from './pages/Activities'
import Contact from './pages/Contact'
import './i18n'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <Suspense fallback="Loading...">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/president" element={<President />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  )
}

export default App
