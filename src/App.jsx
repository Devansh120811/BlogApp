import { useState } from "react";
import "./App.css";
import { data } from "./data.js";
import PostCard from "./components/PostCard";
import { useNavigate } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()
  const [click, setClick] = useState(false);
  const [index, setindex] = useState([]);
  const handleSearch = () => {
    setClick(true);
    setindex([]);
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      // console.log(element.title)
      if (
        element.title === search ||
        element.author.name === search ||
        element.body === search
      ) {
        // console.log(i)
        setindex((prevIndex) => [...prevIndex, i]);
      }
    }
  };
  return click === true ? (
    <div className="flex flex-col gap-3 items-center">
           <h1 className='font-semibold'>Home Page: </h1>
           {index.length > 0 ? index.map((indexx) => (
        // console.log(indexx)
        <PostCard key={indexx} i={indexx} />
      )) : (<p className=''>No Search Found as per the Input</p>)}
      <div className="flex gap-1.5">
         <button className="bg-blue-500 rounded-full p-3 sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page5')}>Prev</button>
         <button className="bg-green-500 rounded-full p-3  sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page1')}>Next</button>
      </div>
    </div>
  ) : (
    <div className="flex gap-2 flex-col items-center overflow-auto">
           <h1 className='font-semibold'>Home Page: </h1>
      <div className="flex items-center gap-3">
        <button
          className="border-2 rounded-full p-2 w-auto cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
        <input
          type="text"
          className="rounded-full border-2 placeholder:text-center  w-auto text-center p-2"
          placeholder="Search Title,Description,AuthorName"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>   
      <PostCard i={0} />
      <PostCard i={1} />
      <PostCard i={2} />
      <PostCard i={3} />
      <PostCard i={4} />
      <PostCard i={5} />
      <PostCard i={6} />
      <PostCard i={7} />
      <PostCard i={8} />
      <div className="flex gap-1.5">
         <button className="bg-blue-500 rounded-full p-3 sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page5')}>Prev</button>
         <button className="bg-green-500 rounded-full p-3  sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page1')}>Next</button>
      </div>
    </div>
  );
}

export default App;
