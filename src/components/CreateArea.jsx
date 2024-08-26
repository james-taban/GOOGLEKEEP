import React, {useState} from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);


    const [note, setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(event){
    const {name, value} = event.target;
    setNote((prevValue)=>{
        return{
                ...prevValue,
                [name]:value

        }
    });
    }

    function submitNote(event){

        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    function expand(){
        setExpanded(true)
    }


  return (
    <div>
      <form className="create-note">
       {isExpanded ? <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />: null}


        <textarea name="content" onClick = {expand} value={note.content} onChange={handleChange} placeholder="Take a note..." rows={isExpanded? "3": "1"} />
       
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddCircleIcon/></Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
