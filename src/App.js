import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home.page'
import { Adventure } from './components/Adventure.page';
import { Comedy } from './components/Comedy.page';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { Horror } from './components/Horror.page';

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
                        <li>
                            <Link to='/horror'>Horror</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/adventure' element={<Adventure/>}/>
                    <Route path='/comedy' element={<Comedy/>}/>
                    <Route path='/horror' element={<Horror/>}/>
                </Routes>
            </div>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </QueryClientProvider>
    );
}

export default App;
