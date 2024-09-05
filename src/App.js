import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home.page'
import { Adventure } from './components/Adventure.page';
import { Comedy } from './components/Comedy.page';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { Horror } from './components/Horror.page';
import { Historical } from './components/historical.page';
import { Drama } from './components/Drama.page';
import { Fantasy } from './components/Fantasy.page';
import { MovieDetail } from './components/MovieDetail.page';
import { ParallelQueries } from './components/ParallelQueries.page';
import { DynamicParallelPage } from './components/DynamicParallel.page';
import { DependentQueries } from './components/DependentQueries.page';

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
                        <li>
                            <Link to='/historical'>Historical</Link>
                        </li>
                        <li>
                            <Link to='/drama'>Drama</Link>
                        </li>
                        <li>
                            <Link to='/fantasy'>Fantasy</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/adventure' element={<Adventure/>}/>
                    <Route path='/comedy' element={<Comedy/>}/>
                    <Route path='/horror' element={<Horror/>}/>
                    <Route path='/historical' element={<Historical/>}/>
                    <Route path='/drama' element={<Drama/>}/>
                    <Route path='/fantasy' element={<Fantasy/>}/>
                    <Route path='/fantasy/:movieId' element={<MovieDetail/>}/>
                    <Route path='/parallel-queries' element={<ParallelQueries/>}/>
                    <Route path='/dynamic-parallel-querie'
                            element={<DynamicParallelPage movieIds={[5, 6, 7]}/>}
                    />
                    <Route path='/dependent-querie' element={<DependentQueries />}/>
                </Routes>
            </div>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </QueryClientProvider>
    );
}

export default App;
