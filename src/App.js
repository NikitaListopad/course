import './App.css';
import {Card} from "./components/http-request/Card";
import './shared/styles/styles.scss';
import {StateComponent} from "./components/state-block/StateComponent";
import {Forms} from "./components/forms/Forms";
import {RegistrationForm} from "./components/forms/RegistrationForm";
import {LifeCycle} from "./components/lifecycle/LifeCycle";
import {ErrorBoundary} from "./components/ErrorBoundary";
import {RickMortyMain} from "./components/http-request/RickMortyMain";
import {HooksLesson} from "./components/hooksLesson/HooksLesson";
import {HooksLessonTwo} from "./components/hooksLesson/HooksLessonTwo";
import {createContext, useState} from "react";
import {Outlet, Route, Routes} from "react-router-dom";
import {Main} from "./components/layout/Main";
import {Homepage} from "./components/pages/Homepage";

export const CustomContext = createContext(null);

function App() {

    const [count, setCount] = useState(0);


  return (

      <div className="App">
        {/*<Card isCardHovered={true}/>*/}
        {/*<StateComponent*/}
        {/*    title='React JS'*/}
        {/*/>*/}
        {/*  <Forms />*/}
        {/*  <RegistrationForm />*/}
        <ErrorBoundary>
          {/*<LifeCycle />*/}
          {/*  <RickMortyMain />*/}
          {/*  <HooksLesson />*/}
            <CustomContext.Provider value={{
                count: count,
                setCount: setCount,
                currentUser: {
                    id: 1,
                    name: 'test'
                }
            }}>

                <Routes>

                    <Route path='/' element={<Homepage />}>
                        <Route path='cards' element={<HooksLessonTwo />}/>
                        <Route path='cards/:cardId' element={<Card />}/>
                    </Route>

                    <Route path='*' element={<h1> NOT FOUND </h1>} />
                </Routes>
            </CustomContext.Provider>
        </ErrorBoundary>
      </div>
  );
}

export default App;
