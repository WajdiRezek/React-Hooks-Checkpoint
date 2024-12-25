import CardMovie from "./CardMovie"
const ListMovie=({movies,search})=>{
    
    return(
        <div className="centerDiv">
            {
                movies.filter((el,i,t)=>el.title.toUpperCase().includes(search.toUpperCase())).map((el,i,t)=> <CardMovie el={el}/>)
            }


        </div>
    )

}

export default ListMovie