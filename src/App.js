
import './App.css';
import Header from './header';
import Footer from './footer';
import Content from './content';
import { BrowserRouter } from 'react-router-dom';




export function App() {

  let mytitle="React is Big Headache";
  let items=["Home","Projects","Aboutus","Contectus",];
  return (
  <div>
    <Header title={mytitle} navitems={items}></Header>
    <Content></Content>
    <Footer></Footer>
  
  
    </div>
   //  <div className="App">
     //  <Header/>
    // <Switch>
//<Routes>
     // <Route exact path="/" element={<HomeComponent/>}/>

     //   <Route path= "home" element={<HomeComponent/>}/>
    
       // <Route path="projects" element={<ProjectsComponent/>}/>
      
      //  <Route  path="contectus" element={<ContectusComponent/>}/>
            
        // <Route  path="aboutus" element={<AboutusComponent/>}/>
        // </Routes> 
      // </Switch>
     //  <Footer/>
     //   </div>
        
  
  )}