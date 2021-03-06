import React, {Fragment} from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './header/header';
import Footer from './footer/footer';

import { SignIn } from './pages/AuthPages/signIn';
import { SignUp } from './pages/AuthPages/signUp';
import  HomePage from './pages/homePage/homePage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';
import { RecoveryPassword } from './pages/AuthPages/recoveryPassword';
import { PrivacyPolicy } from './pages/privacyPolicy/privacyPolicy';
import { TermsAndConditions } from './pages/termsAndConditions/termsAndConditions';
import CurrentMovie from './pages/currentMovie/currentMovie';


function App() {
    return (
      <Fragment>
        <body>
          <header>
            <Header/>
          </header>

          <main>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/signIn' element={<SignIn />}/>
              <Route path='/registration' element={<SignUp />}/>
              <Route path='/recoveryPassword' element={<RecoveryPassword />}/>
              <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
              <Route path='/terms-and-conditions' element={<TermsAndConditions />}/>
              <Route path='/movies/:id' element={< CurrentMovie />}/>

              <Route path='*' element={<NotFoundPage />}/>
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>
        </body>
      </Fragment>
    )
}

export default App;