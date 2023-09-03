import { apiUrl, filterData } from './data';
import Filter from './Component/Filter';
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import Spinner from './Component/Spinner';
const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const[category,setCategory]= useState(filterData[0].title);
  async function fetchData() {
    setLoading(true);
    try {
      let responce = await fetch(apiUrl);
      let output = await responce.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Network me dikkhat he");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex bg-bgDark2  flex-col'>
      <div >
        <Navbar />
      </div>
      <div className='bg-bgDark2 '>
        <div>
          <Filter 
          filterData={filterData}
          category={category}
          setCategory={setCategory}
           />
        </div>

        <div className='w-11/12 max-w-[1200px] flex-wrap mx-auto flex justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards 
              courses={courses}
              category={category}
               />)
          }
        </div>
      </div>

    </div>

  );
};

export default App;
