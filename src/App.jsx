import Header from "./components/Header";
import Places from "./components/Places";
import Fuji from "./assets/fuji.jpg"
import Christ from "./assets/christ.jpg"
import Us from "./assets/us.jpg"
import Placesinfo from "./components/Placesinfo";
import './index.css';
const placesElements = Placesinfo.map((spot)=>{
  return <Places src = {spot.img.source} alt = {spot.img.alt} place = {spot.place} map = {spot.map}
  destination = {spot.destination} date = {spot.date} description = {spot.description}/>
})


export default function App() {
  return (
    <>
      <Header />
      <main className="entries-container">
        {placesElements}
        
      </main>
    </>
  );
}
