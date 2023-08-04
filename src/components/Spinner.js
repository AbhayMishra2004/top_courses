import "./Spinner.css" ; 



const Spinner = () => {


    return (


            <div className="mt-40 flex flex-col gap-4 justify-center items-center">
                <div className="spinner"></div>
                <p className="text-white text-2xl" >Loading....</p>
            </div>


        
    )
}

export default Spinner ; 