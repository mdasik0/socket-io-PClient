// eslint-disable-next-line react/prop-types
const ChatTabCard = ({ openChat, _id }) => {
  return (
    <div
      onClick={() => {
        openChat(_id);
      }}
      className="bg-white hover:bg-zinc-800 hover:text-white duration-500 cursor-pointer rounded-lg ps-3 pe-2 py-2 flex justify-between"
    >
      <div>
        <h3 className="text-lg">@username</h3>
        <p className="text-gray-400 text-sm mt-3"> user@email.com</p>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="w-2 h-2 bg-green-500 rounded"></p>
        <p className="text-xs text-gray-400">1m ago</p>
      </div>
    </div>
  );
};

export default ChatTabCard;
