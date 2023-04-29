import RightBar from "../components/rightbar/RightBar";
import Layout from "../layout/Layout";
import ListFeel from "../modules/Home/ListFeel";
import ListStory from "../modules/Home/ListStory";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex  gap-x-10 max-w-[1000px] w-full py-10 mx-auto ml-auto ">
        <div className="w-full max-w-[630px]">
          <ListStory></ListStory>
          <ListFeel></ListFeel>
        </div>
        <RightBar></RightBar>
      </div>
    </Layout>
  );
};

export default HomePage;
