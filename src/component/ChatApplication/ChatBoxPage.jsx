import ChatTabCard from "./ChatTabCard";

const ChatBoxPage = () => {
  const openChat = (_id) => {
    alert("hello mr " + _id);
  };
  return (
    <div className=" h-screen w-screen">
      {/* chats short */}
      {/* tab */}
      <div className="bg-gray-300 border-2 border-gray-400 h-full p-3 rounded-xl w-1/5">
        <ChatTabCard openChat={openChat} _id={"habluMia420"} />
      </div>
      <div className="w-4/5">
      
      </div>
    </div>
  );
};

export default ChatBoxPage;
