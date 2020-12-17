
import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets'
function App() {
  return (
    <div className="app">
      <Sidebar />
   
      <Feed />

      <Widgets />


      {/* 
          < mesage Feeds  { 
             new message area
             mesg disp area
           }>
           <WIdgeetsNews feed etc >
     
     */}


    </div>
  );
}

export default App;
