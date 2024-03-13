
import Form from '../components/Form.jsx'
function Contact(){
    return(
     <div class='py-10  grid items-center grid-rows-3 gap-2  lg:gap-4 '>
         <Form
        tipo='text'
        target='Ingrese su nombre'
      />
      <Form
        tipo='text'
        target='Ingrese su apellido'
      />
      <Form
       tipo='email'
       target='Ingrese su email'
      />
       <textarea id='subject' name='subject' class='shadow-xl border border-slate-500 h-52 lg:w-96 '> </textarea>
       <input type="submit" value="Submit" class=' bg-emerald-600 w-36 rounded-md h-10 text-sky-100 font-bold hover:bg-green-900
       hover:cursor-pointer'></input>

     </div>
    )
}

export default Contact