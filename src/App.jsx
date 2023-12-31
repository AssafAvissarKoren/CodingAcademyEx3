// import { Route, HashRouter as Router, Routes, Navigate } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { AboutUs } from './pages/AboutUs';
import { AppFooter } from './cmps/AppFooter';
import { AppHeader } from './cmps/AppHeader';
import { EmailIndex } from './cmps/EmailIndex';
import { EmailDetails } from './cmps/EmailDetails';
import { EmailCompose } from './cmps/EmailCompose';
import { EmailList } from './cmps/EmailList';
import { UserMsg } from './cmps/UserMsg';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.js';

export function App() {
    return (
        // <Provider store={store}>
            <Router>
                <section className='main-app'>
                    <AppHeader />
                    <main className='container'>
                        <Routes>
                            <Route path="/" element={<Navigate to="/dashboard" replace />} />
                            <Route path="/email" element={<Navigate to="/email/inbox" replace />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/aboutUs" element={<AboutUs />} />
                            <Route path="/email/:folder" element={<EmailIndex />}>
                                <Route index element={<EmailList />} />
                                <Route path=":emailId" element={<EmailDetails />} />
                                <Route path="compose" element={<EmailCompose />} />
                                <Route path="edit/:emailId" element={<EmailCompose />} />
                            </Route>
                        </Routes>
                    </main>
                    <UserMsg />
                    <AppFooter />
                </section>
            </Router>
        // </Provider>
    );
}
