import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Navbar/Navbar';
import Navbar from './Navbar/Navbar';//we have to give the same name as we have used the name exports
import Welcome from './Navbar/Welcome';
import Message from './Navbar/Message';
import Counter from './Navbar/Counter';
import FunctionClick from './Navbar/FunctionClick';
import ClassClick from './Navbar/ClassClick';
import EventBind from './Navbar/EventBind';
import ParentComponent from './Navbar/ParentComponent';
import NameList from './Navbar/NameList';
import StyleSheet from './Navbar/StyleSheet';
import Inline from './Navbar/Inline';
import './appstyles.css';
import styles from './appstyles.module.css'
import Form from './Navbar/Form';
import LifeCycleA from './Navbar/LifeCycleA';
import LifeCycleB from './Navbar/LifeCycleB';
import Table from './Navbar/Table';
import ParentComp from './Navbar/ParentComp';
import REfsDemo from './Navbar/REfsDemo';
import FocusInput from './Navbar/FocusInput';
import PortalDemo from './Navbar/PortalDemo';
import Hero from './Navbar/Hero';
import ErrorBoundary from './Navbar/ErrorBroundary';
import ClickCounter from './Navbar/ClickCounter';
import HoverCounter from './Navbar/HoverCounter';
import ClickCounterTwo from './Navbar/ClickCounterTwo';
import HoverCounter2 from './Navbar/HoverCounter2';
import UserNew from './Navbar/UserNew';
import Counterthree from './Navbar/Counterthree';
import ComponentC from './Navbar/ComponentC';
import {UserProvider} from './Navbar/UserContext';
import PostList from './Navbar/PostList';

function App() {
  return (
    <div className="App">
       {/* this is the component  */}
      <Navbar name="lakshita">
        {/* this is rendered becoz we have used the props.children in the component which takes the values inside the component tags. */}
        <p>Hello lakshita how are u?</p>
        </Navbar>  
      {/* //name is the attritute used in this */}
      <Navbar name="rachit" />
      <Navbar name="golu" />

      {/* for the class component we are defining the attritutes as */}
       <Welcome name="lakshita" heroName="Mukul" />


       <Message />

       <Counter />

       <FunctionClick />
       <ClassClick />
       <EventBind />
      <ParentComponent />
      <NameList />
      <StyleSheet primary={true}/>
      <Inline />

      {/* //these two are the module styling we cant use the modue styling classes in any other componnet */}
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Form />
      <LifeCycleA />
      <Table />
      <ParentComp />
      <REfsDemo />
      <FocusInput />
      <PortalDemo />
      <ErrorBoundary>
      <Hero className='batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero className='superman' />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero className='joker' />
      </ErrorBoundary>
    <ClickCounter />
      <HoverCounter />
      {/*<HoverCounter2 />
      <ClickCounterTwo />
      
      <UserNew name={(isLoggedIn)=> isLoggedIn ? 'lakshita': 'Guest'} />*/}
      {/*ths is the click method in which we have passed the render props which passes the props as well as function*/}
      {/*these are the render props which take the props value as the function*/}
      <ClickCounterTwo render={(count,incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} /> 
      <HoverCounter2 render={(count,incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount} />} /> 
      
      <UserProvider value='lakshita'>
      <ComponentC />
      </UserProvider>
      <PostList />
      </div>
  );
}

export default App;
   

