// import Image from "next/image";

import { questions } from "./component/lib/data";
import QuestionCard from "../app/component/ul/QuestionCard";
import Posts from "./component/ul/Posts";

export default function Home() {
  interface User {
    id: number;
    date: string;
    img: string;
    author: string;
    likes: number;
    answer: number;
    ques: string;
  }

  return (
    <div className=" w-full ">
      <h1>Questions for you?</h1>
      <div className=" w-full ">
        <div className="flex flex-col gap-y-3 lg:flex-row  items-center justify-between w-full  my-4 ">
          {questions.map((ques) => (
            <QuestionCard
              key={ques.id}
              ques={ques.ques}
              img={ques.img}
              likes={ques.likes}
              answer={ques.answer}
              date={ques.date}
              author={ques.author}
            />
          ))}
        </div>
      </div>
      <Posts />
    </div>
  );
}
