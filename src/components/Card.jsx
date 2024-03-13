function Card(props){
    return (
        <div class='flex items-center rounded-md shadow-2xl p-11 mx-1 min w-80 h-48 hover:scale-105 hover:cursor-pointer' >
          <img class=" w-auto rounded-xl h-28" src={require(`../img/${props.image}.png`)} alt={props.name}/>
          <div class="flex flex-col gap-2">
            <h1 class="text-center text-xs"> {props.name}</h1>
            <p class="text-justify text-xs"> {props.description}</p>
            <button class="text-xs bg-emerald-500 text-indigo-50 rounded-xl shadow-md  w-24 h-7 hover:bg-teal-600 mx-3"> Click here</button>
          </div>
        </div>
    )
}
export default Card