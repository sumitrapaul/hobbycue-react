import AddOwn from "../../components/AddOwn/AddOwn";
import Banner from "../../components/Banner/Banner";
import Explores from "../../components/Explores/Explores";
import Testimonials from "../../components/Testimonials/Testimonials";
// import Explores from "../../components/Explores/Explores";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Explores></Explores>
           <AddOwn></AddOwn>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;