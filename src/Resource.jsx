
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResourceComponent from "./components/ResourceComponent";
//this is temporary , todo : needs to make custom resource component;

export default function Resource(){
    const resources=['https://w3schools.com/','https://www.freecodecamp.org/news/how-to-build-a-dropdown-menu-with-javascript/']
    return(
        <>
        <Navbar/>
        <h2>Resources</h2>
        {resources.map((i)=>{
           return <ResourceComponent props={i}/>
        })}
        <Footer margin="100%"/>
        </>
    );
}