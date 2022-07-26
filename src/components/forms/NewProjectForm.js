import { useState, useEffect } from "react";
import Form from "./Form";
import { addNewProjectService } from "../../services/project.services";
import { addNewActivityService } from "../../services/activity.services";
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
    e.preventDefault();
    const body = {
      title: title,
      description: description,
      admin: user._id,
      team: teamIds,
      active: isActive,
    };

    const activity = {
      title: "Project created",
      project: null,
      user: user._id,
    };

    // props.socket.emit("new_project", body);
    // props.handleCancelAddSaveFormBtn();
    // setTitle("");
    // setDescription("");
    // setTeam([]);

    try {
      const responseProject = await addNewProjectService(body);
      activity.project = responseProject.data._id;
      await addNewActivityService(activity);

      props.socket.emit("new_project", body);

      setTitle("");
      setDescription("");
      setTeam([]);
      props.handleCancelAddSaveFormBtn(e);
    } catch (err) {
      console.log(err);
    }
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
