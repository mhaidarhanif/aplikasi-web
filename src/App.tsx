import { Link } from "react-router-dom";

import youtubers from "./data/youtubers.json";

export default function App() {
  return (
    <>
      <h1>YouTubers</h1>
      <ul>
        {youtubers.map((youtuber) => {
          return (
            <li>
              <Link to={`/c/${youtuber.username}`}>
                <h2>{youtuber.name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
