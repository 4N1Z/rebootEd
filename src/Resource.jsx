import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
//this is temporary , todo : needs to make custom resource component;
export default function Resource(){
    return(
        <>
        <Navbar/>
        <Questions/>
        <Footer/>
        </>
    );
}