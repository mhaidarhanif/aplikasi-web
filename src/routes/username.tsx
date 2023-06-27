import { useParams } from "react-router-dom";

import youtubers from "../data/youtubers.json";

export default function Username() {
  const { username } = useParams();

  const youtuber = youtubers.find((youtuber) => {
    return youtuber.username === username;
  });

  if (!youtuber) {
    return <p>No YouTuber found</p>;
  }

  return (
    <>
      <h1>YouTuber Info</h1>
      <ul>
        <li>Name: {youtuber.name}</li>
        <li>Username: {youtuber.username}</li>
        <li>Bio: {youtuber.bio}</li>
      </ul>
    </>
  );
}
