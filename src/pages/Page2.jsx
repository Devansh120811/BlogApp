import React,{useState} from 'react'
import { data } from "../data.js";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";
function Page2() {
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
           <h1 className='font-semibold'>Page 2: </h1>
           {index.length > 0 ? index.map((indexx) => (
        // console.log(indexx)
        <PostCard key={indexx} i={indexx} />
      )) : (<p className=''>No Search Found as per the Input</p>)}
      <div className="flex gap-1.5">
         <button className="bg-blue-500 rounded-full p-3 sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page1')}>Prev</button>
         <button className="bg-green-500 rounded-full p-3  sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page3')}>Next</button>
      </div>
    </div>
  ) : (
    <div className="flex gap-2 flex-col items-center overflow-auto">
           <h1 className='font-semibold'>Page 2: </h1>
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
      <PostCard i={18} />
      <PostCard i={19} />
      <PostCard i={20} />
      <PostCard i={21} />
      <PostCard i={22} />
      <PostCard i={23} />
      <PostCard i={24} />
      <PostCard i={25} />
      <PostCard i={26} />
      <div className="flex gap-1.5">
         <button className="bg-blue-500 rounded-full p-3 sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page1')}>Prev</button>
         <button className="bg-green-500 rounded-full p-3  sm:w-[20vw] w-[25vw] text-center cursor-pointer transition-all duration-100" onClick={()=>navigate('/page3')}>Next</button>
      </div>
    </div>
  );
}

export default Page2
