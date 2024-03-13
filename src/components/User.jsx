function User(props){
    return(
        <div class='flex flex-col items-center w-64 h-52 shadow-2xl bg-sky-100 rounded-lg pb-10 '>
            
          <img src={ require(`../img/${props.imagen}.png`)} class=' w-20 h-16 rounded-full my-6 hover:scale-105 hover:cursor-pointer'/>
          <p class='text-center text-lg'> <strong> {props.name} </strong></p>
          <p class=' text-center text-xs mx-2 text-slate-500'> "{props.quote}" </p>
        </div>
    )
}
export default User;