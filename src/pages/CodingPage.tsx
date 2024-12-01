import { useState } from "react";
import { HiArrowCircleUp } from "react-icons/hi";
import { IoPauseSharp } from "react-icons/io5";
import MarkdownMessage from "../components/MarkdownMessage";
import { AxiosClient } from "../utils/axios";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const CodingPage = () => {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState({
    input: "",
    output: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      const req = await AxiosClient.post("/generate", { input: prompt });
      const data = await req.data;
      console.log("Form Submitted with prompt :" + prompt);

      setPrompt("");
      setData({
        input: data.input,
        output: data.output,
      });
    } catch (error: any) {
      console.log("Error", error.message);
    } finally {
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="px-1 md:px-8">
        <div className="flex items-center gap-2 pb-2">
          <Link to={"/"}>
            <p className="text-3xl">
              <FaArrowCircleLeft />
            </p>
          </Link>
          <p className="font-bold text-xl flex items-center">Go back</p>
        </div>
        <textarea
          onChange={(e) => setPrompt(e.target.value)}
          className="py-4 px-4 border w-full rounded-lg"
          placeholder="Ask whatever..."
          value={prompt}
          rows={4}
        />
        <button
          disabled={loading}
          className="rounded-full hover:bg-yellow-200 hover:shadow-[0_0_10px_3px_rgba(255,255,0,1)]"
        >
          {loading ? (
            <IoPauseSharp className="text-5xl" />
          ) : (
            <HiArrowCircleUp className=" text-5xl " />
          )}
        </button>
      </form>
      <MarkdownMessage {...data} isLoading={loading} />
    </>
  );
};

export default CodingPage;
