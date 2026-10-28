import Header from "./components/Header";
import FavoriteSong from "./components/FavoriteSong";
import Story from "./components/Story";
import MovieCard from "./components/MovieCard";
import Ticket from "./components/Ticket";
import StudentCard from "./components/StudentCard";


function App() {
  return(
  <div>

    <MovieCard title="Inside Out 2" year="2024" genre="Animation" rating = "7.6/10" />
    <MovieCard title= "Spider-Man: Across the Spider-Verse" year = "2023" genre = "Animation" rating = "8.5/10"/>
    <MovieCard title = "Dune: Part Two" year = "2024" genre = "Sci-Fi" rating = "8.5/10"/>
  
    <Ticket movie = "Dune: Part Two" hall = "3" seat = "F12" price = {45} count = {2}/>
    //אם זה היה "45" זה יוצג כסטרינג ולא יעשה את החישוב

    <StudentCard name= "OrAloni" age= "18" class="12th grade"/>

    </div>);
};


export default App;


