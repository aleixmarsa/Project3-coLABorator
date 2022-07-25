import { useState, useEffect } from "react";
import Form from "./Form";
import { addNewProjectService } from "../../services/project.services";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";


const NewProjectForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [team, setTeam] = useState([]);
  const [isActive, setIsActive] = useState(true);

  const { user } = useContext(AuthContext);


  const handleSubmit = async (e) => {
    const teamIds = team.map((user) => user._id);
    console.log("IIIIIIIIIIIIIIIIIEEEEEEEEEEEEEEEEEEEEEEEES")
    e.preventDefault();
    const body = {
      title: title,
      description: description,
      admin: user._id,
      team: teamIds,
      active: isActive,
    };

    props.socket.emit("new_project", body);
    props.handleCancelAddSaveFormBtn();
    setTitle("");
    setDescription("");
    setTeam([]);

    // try {
    //   const response = await addNewProjectService(body);
    //   console.log("🚀 ~ file: NewProjectForm.js ~ line 24 ~ handleSubmit ~ response", response)

    //   props.getAllProjects();
    //   setTitle("");
    //   setDescription("");
    //   setTeam([]);
    //   props.handleCancelAddSaveFormBtn(e);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <Form
      formTitle="Create a new Project"
      onSubmit={handleSubmit}
      cancelBtntext="Cancel"
      cancelBtnAction={props.handleCancelAddSaveFormBtn}
      acceptBtnText="New Project"
      projectTitle={title}
      projectDescription={description}
      setTitle={setTitle}
      setDescription={setDescription}
      team={team}
      setTeam={setTeam}
    />
  );
};
export default NewProjectForm;
