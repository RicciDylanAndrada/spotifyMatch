function SongCard({proPic,name}) {
    
    return (
        
            <div className="p-4 w-full inline card shadow-xl  side bg-base-100">
            <img className=" rounded-full inline shadow w-12 h-12" src={proPic} ></img>

                <p className="inline p-2 ">{name}</p>
                
            </div>
    )
}

export default SongCard
