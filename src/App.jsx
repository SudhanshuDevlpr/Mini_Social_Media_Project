import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import SideBar from './component/SideBar';
import CreatePost from './component/CreatePost';
import PostList from './component/PostList';
import { useState } from 'react';
import MyProvider from './Store/CreateContext';

function App() {
  const [sideValue, setSideValue] = useState("Home");

  return (
    
    <MyProvider>
    <div className='d-flex'>
      <SideBar sideValue={sideValue} setSideVlaue={setSideValue}/>
      <div style={
        {width:'100%'}
      }>
        <Header/>
        {sideValue === "Home" ? (
          <>
            <CreatePost />
          </>
        ) : (
          <PostList />
        )}
        <Footer />
      </div>
    </div>
    </MyProvider>

  );
}

export default App;
