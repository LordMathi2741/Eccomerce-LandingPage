import User from './User'

function Users(){
    return(
       <div class=' grid grid-rows-4 gap-4 justify-center  py-24   lg:grid-cols-4 lg:gap-1 lg:h-96 xl:mx-28'>
          <User
            imagen="user1"
            name="LordMathi2741"
            quote="Lorem Ipsum is Lorem Ipsum but I dont think it's a good idea to use Lorem Ipsum in your app."
            />
           <User
            imagen="user1"
            name="LordMathi2741"
            quote="Lorem Ipsum is Lorem Ipsum but I dont think it's a good idea to use Lorem Ipsum in your app."
            />
             <User
            imagen="user1"
            name="LordMathi2741"
            quote="Lorem Ipsum is Lorem Ipsum but I dont think it's a good idea to use Lorem Ipsum in your app."
            />
             <User
            imagen="user1"
            name="LordMathi2741"
            quote="Lorem Ipsum is Lorem Ipsum but I dont think it's a good idea to use Lorem Ipsum in your app."
            />
       </div>
    )
}

export default Users;