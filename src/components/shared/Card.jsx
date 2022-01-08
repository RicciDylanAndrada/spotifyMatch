

function Card({id,proPic,followers,link}) {
    
    return (
        <div >
        
            <div className="p-4 card  shadow-xl compact side bg-base-100">
                <h1 className="flex justify-center mb-4 text-2xl font-bold "  > {id}</h1>
                <div className="flex justify-center">
                    <img  className="rounded-full flex justify-center shadow w-32 h-32" src={proPic} ></img>

                </div>
                <div className=" w-80 grid grid-cols-2 mx-auto">
                <div className="grid  justify-start">
                    <p className="text-lg font-bold">Followers</p>
                    <span className="justify-self-center">{followers}</span>
                </div>
                <div className="grid  justify-end w-full ">
                <p className="text-lg font-bold ">Visit Profile</p>
                <button href={link} className="btn btn-xs">
                <a href={link}>Here</a>
    
      
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 ml-1 stroke-current">  
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>                        
  </svg>
</button> 
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card
