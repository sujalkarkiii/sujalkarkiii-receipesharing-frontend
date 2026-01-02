import User_page from "../components/List_ofuser";
import Feed from "../components/Feed";

const Home_page = () => {
  return (
    <div className="flex w-full min-h-screen ">
      {/* User list on left side of the big and medium screen and hidden on small screens */}


      <div className="hidden md:block md:w-1/4">
        <User_page />
      </div>

      {/* Feed in center of the screeen in md ,sm and bg screen  */}
      <div className="w-full md:w-3/4 flex justify-center">
        <div className="w-full max-w-3xl lg:max-w-5xl mx-auto">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Home_page;
