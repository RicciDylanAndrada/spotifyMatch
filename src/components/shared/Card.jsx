


function Card({id,proPic,followers}) {
    
    return (
        <div >
        
            <div className="p-4 card  shadow-xl compact side bg-base-100">
                <h2 className="flex justify-center mb-4"  > {id}</h2>
                <div className="flex justify-center">
                    <img  className="rounded-full flex justify-center shadow w-32 h-32" src={proPic} ></img>

                </div>
                <div className=" w-48 grid grid-cols-2 mx-auto">
                <div className="block  justify-start">
                    <p className="">Followers</p>
                    <span className="">{followers}</span>
                </div>
                <div className="flex justify-end">
                    hello
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card
