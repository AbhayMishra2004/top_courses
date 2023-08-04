import React from "react";
import Navbar from  "./components/Navbar";
import Cards from "./components/Cards" ; 
import Filter from "./components/Filter" ;
import { apiUrl , filterData } from "./data";
import { useState,useEffect } from "react";
import {toast} from "react-toastify";
import Spinner from "./components/Spinner" ;



function App() {


  // COUSES KO STAR MAI NULL SE ET KARA HAI . 
  const [courses, setCourse] = useState(null);

  // CATEGORY FILTERING KE LIE 
  const [category , setCategory] = useState(filterData[0].title) ; 


  // USE EFFECT HOOK KA USE KARKE API CALL 
  useEffect(() => {

      const fetchData = async () => {


      // API CALL AND CONVERT IN JSON FORMAT . 
      try {
        const response = await fetch(apiUrl);
        const output = await response.json();

        // OUTPUT KA DATA HI COURSE HAI 
        setCourse(output.data);

        // console.log(courses);
      }

      // API CALL NA KAR PAYE TO ERROR AA JAYEGI . 
      catch (error) {
        toast.error("Network mai dikkat hai");
      }
    };

    fetchData();
  }, []);



  return (

    <div className="min-h-screen flex flex-col bg-bgDark2">

      {/* NAVBAR COMPONENT  */}
      <Navbar />

      {/* FILTER COMPONENT */}
      <Filter filterData={filterData} category={category} setCategory={setCategory} />


      {/* CARDS COMPONENT */}
      {courses ? <Cards courses={courses} category={category} /> : <Spinner />}

    </div>



  );


}

export default App;
