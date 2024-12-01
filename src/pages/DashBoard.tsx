import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AxiosClient } from "../utils/axios";
import PlaceholderLoading from "react-placeholder-loading";

const DashBoard = () => {
  type Data = {
    input: string;
    _id: string;
  };

  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await AxiosClient.get("/history");
      const data = await res.data;
      setData(data);
    } catch (error: any) {
      console.log("Questions fetching error: " + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="p-1 flex flex-col justify-center items-center">
        <h1 className="flex-col text-blue-900 text-3xl md:text-5xl font-extrabold">Welcome to Code Mate 👋</h1>
        <h4 className=" md:px-6 pt-1 text-xl font-semibold">
          Get your code snippets & answers here !
        </h4>
        <div className=" flex justify-center items-center md:py-10 py-5">
          <p className="text-slate-900 font-semibold text-xl pr-2 ">Have a Question - </p>
          <Link to={'/code'}>
            <button className="px-6 py-2 font-semibold transform transition-transform duration-300 hover:scale-110 hover:shadow-lg text-xl bg-black rounded-full text-white">Ask Now!</button>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold py-5 ">Previous searched queries </h1>
        <div className="flex flex-col  gap-y-4 md:px-5 px-1">
          {loading ? (
            <div>
              <PlaceholderLoading shape="rect" width={1000} height={30} />
              <br />
              <PlaceholderLoading shape="rect" width={1000} height={30} />
              <br />
              <PlaceholderLoading shape="rect" width={1000} height={30} />
              <br />
              <PlaceholderLoading shape="rect" width={1000} height={30} />
              <br />
              <PlaceholderLoading shape="rect" width={1000} height={30} />
              <br />
              <PlaceholderLoading shape="rect" width={1000} height={30} />
              <br />
              <PlaceholderLoading shape="rect" width={1000} height={30} />
              <br />
              <PlaceholderLoading shape="rect" width={1000} height={30} />
              <br />
            </div>
          ) : (
            data &&
            data.length > 0 &&
            data
              .slice()
              .reverse()
              .map((item, key) => {
                return (
                  <Link
                    to={`/code/${item._id}`}
                    key={key}
                    className="justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-500 px-4 py-3 w-full border rounded-lg flex items-center"
                  >
                    <h1 className="font-bold">{item.input}</h1>
                    <button className="outline-none flex gap-x-2 items-center text-blue-600">
                      Read <FaArrowRight />
                    </button>
                  </Link>
                );
              })
          )}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
