import './App.css';
import MovieIcon from '@mui/icons-material/Movie';
import MyRoutes from './routers/routes';

const App = () => {
  return (
    <div>
      <header>
        <h1 className='title'><MovieIcon /> Films</h1>
      </header>
      <MyRoutes />
    </div>
  )
}

export default App
