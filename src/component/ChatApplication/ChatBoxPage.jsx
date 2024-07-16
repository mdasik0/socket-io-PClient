import { useRef, useState } from "react";
import ChatTabCard from "./ChatTabCard";

const ChatBoxPage = () => {
  const [searchText, setSearchText] = useState("");
  const openChat = (_id) => {
    alert("hello mr " + _id);
  };
  const searchInp = useRef("");
  const handleSearchText = () => {
    console.log(searchText);

    searchInp.current.value = "";
  };
  return (
    <div className=" h-screen w-screen flex">
      {/* chats short */}
      {/* tab */}
      <div className="bg-gray-300 border-2 border-gray-400 h-full p-3 rounded-xl w-1/5">
        <div>
          <input
            ref={searchInp}
            className="px-2 py-1 mb-4 rounded mr-3"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="search user or group"
            type="text"
            name="search"
            id="search"
          />
          <button
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-400 duration-500"
            onClick={handleSearchText}
          >
            Add chat
          </button>
        </div>
        <ChatTabCard openChat={openChat} _id={"habluMia420"} />
      </div>
      <div className="w-4/5 relative">
        {/* chat header */}
        <div>
          <div className="bg-gray-200 px-6 py-4">
            <h4 className="text-lg">userName</h4>
            <p className="text-gray-500">email@email.com</p>
          </div>

          {/* chat input */}
          <div className="flex m-3 absolute bottom-0 left-0 right-0">
            <input
              className="w-full border-gray-200 border-2 rounded-lg mr-3 px-3 py-1.5"
              type="text"
              name="message"
              id="message"
              placeholder="enter your message"
            />
            <button className="bg-green-500 hover:bg-green-400 duration-300 text-sm px-4 py-2 rounded text-white">
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxPage;
