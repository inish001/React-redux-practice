// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import UserAdd from './Components/UserAdd';
import CakeContainer from './Components/CakeContainer';
// import CandyContainer from './Components/CandyContainer';
// // import HooksCakeContainer from './Components/HooksCakeContainer';
// import IceContainer from './Components/iceContainer';
// import ItemContainer from './Components/ItemContainer';
// import NewCakeContainer from './Components/NewCakeContainer';
// import NewCandyContainer from './Components/NewCandyContainer';
// import NewIceContainer from './Components/NewIceContainer';
import UsersContainer from './Components/UsersContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer/>
      {/* <HooksCakeContainer/> */}
      {/* <ItemContainer cake/>
      <ItemContainer iceCream/>
      <IceContainer/>
      <CandyContainer/>
      <NewCakeContainer/>
      <NewIceContainer/>
      <NewCandyContainer/> */}
      <UsersContainer/>
    <UserAdd/>
    </div>
    </Provider>
  );
}

export default App;
