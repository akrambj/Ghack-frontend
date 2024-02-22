import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:9000/users");
      console.log(res, "res");
      const data = await res.data;
      console.log(data, "data");
    };

    getData();
  }, []);

  return <div>Home</div>;
};

export default Home;
