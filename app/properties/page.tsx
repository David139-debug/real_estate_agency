import List from "../components/Dashboard/List";
import Properties from "../components/Dashboard/Properties";

const page = () => {
  return (
    <main className="bg-white p-8 flex">
      <List />
      <Properties />
    </main>
  );
};

export default page;
