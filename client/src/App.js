
import './App.css';
import Messenger from './components/Messenger';
// import { AppBar, Toolbar } from '@material-ui/core';
import AccountProvider from './context/AccountProvider';
import TemplateProvider from './theme/TemplateProvider';
import UserProvider from './context/UserProvider'

function App() {
  return (
    <div className="App">
      <TemplateProvider>
        <UserProvider>
          <AccountProvider>
            <Messenger />
          </AccountProvider>
        </UserProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
