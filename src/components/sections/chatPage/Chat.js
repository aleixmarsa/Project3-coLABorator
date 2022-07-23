import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { startChatService } from "../../../services/chat.services";
import { getAllUsersService } from "../../../services/user.services";

import ChatBox from "../../../pages/chat/ChatBox";

const Chat = () => {
  const [users, setUsers] = useState(null);
  const [showChat, setShowChat] =useState("")
  const [chatReceiver, setChatReceiver] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await getAllUsersService();
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e, user) => {
    e.preventDefault();
    console.log(`Trying to start chat with ${user.name}`);
    try {
      const response = await startChatService(user._id);
      setShowChat(response.data._id)
      setChatReceiver(user.name)
      
    //   navigate(`/chat/${response.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  if (!users) {
    return <h3>...Loading</h3>;
  }

  console.log(showChat)
  return (
    <div className="drop-shadow-md  h-5/6  mt-5">
      <div className=" flex flex-col p-6 pt-2 h-full bg-stone-50 xl:mx-5">
        <div className="grid grid-cols-5 h-full">
          <div className="border-r-2 h-full col-span-1 ">
            <h2 className="flex-1 text-lg border-b-2">CHATS</h2>
            <div>
              {users.map((user) => {
                return (
                  <div key={user._id} className="mt-3">
                    <p>
                      <b>Name:</b>
                      {user.name}
                    </p>
                    <button
                      className="bg-gray-500"
                      onClick={(e) => handleClick(e, user)}
                    >
                      Chat with {user.name}
                    </button>
                    <hr className="mt-3" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-4 flex flex-col bg-white rounded-md shadow-xl divide-y border list-none ml-2">
            <div className="bg-white h-full rounded-md shadow-xl divide-y border list-none m-2">
              {showChat &&
              <ChatBox chatId={showChat} chatReceiver = {chatReceiver} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
