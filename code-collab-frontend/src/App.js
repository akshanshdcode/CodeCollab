import Home from './pages/Home';
import EditorPage from './pages/EditorPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <div>
        <Toaster
        position='top-right'
        toastOptions={{
          success: {
            theme: {
              primary: "#4299e1",
            }
          }
        }}></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/editor/:roomId' element={<EditorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
