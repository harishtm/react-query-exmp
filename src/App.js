import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home.page'
import { Adventure } from './components/Adventure.page';
import { Comedy } from './components/Comedy.page';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/adventure'>Adventure</Link>
                        </li>
                        <li>
                            <Link to='/comedy'>Comedy</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/adventure' element={<Adventure/>}/>
                    <Route path='/comedy' element={<Comedy/>}/>
                </Routes>
            </div>
        </QueryClientProvider>
    );
}

export default App;
