import React,{useState} from 'react'
import { data } from "../data.js";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";
function Page3() {
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
           <h1 className='font-semibold'>Page 3: </h1>
           {index.length > 0 ? index.map((indexx) => (
        // console.log(indexx)
        <PostCard key={indexx} i={indexx} />
      )) : (<p className=''>No Search Found as per the Input</p>)}
      <div className="flex gap-1.5">
         <button className="bg-blue-500 rounded-full p-3 sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page2')}>Prev</button>
         <button className="bg-green-500 rounded-full p-3  sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page4')}>Next</button>
      </div>
    </div>
  ) : (
    <div className="flex gap-2 flex-col items-center overflow-auto">
           <h1 className='font-semibold'>Page 3: </h1>
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
      <PostCard i={27} />
      <PostCard i={28} />
      <PostCard i={29} />
      <PostCard i={30} />
      <PostCard i={31} />
      <PostCard i={32} />
      <PostCard i={33} />
      <PostCard i={34} />
      <PostCard i={35} />
      <div className="flex gap-1.5">
         <button className="bg-blue-500 rounded-full p-3 sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page2')}>Prev</button>
         <button className="bg-green-500 rounded-full p-3  sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page4')}>Next</button>
      </div>
    </div>
  );
}

export default Page3
