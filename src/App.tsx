const youtubers = [
  {
    id: 1,
    username: "teknobarengpeter",
    name: "Peter Jack Kambey",
    bio: "Seorang programmer 1",
  },
  {
    id: 2,
    username: "webprogrammingunpas",
    name: "Sandhika Galih",
    bio: "Seorang programmer 2",
  },
  {
    id: 3,
    username: "resir014",
    name: "Resi Respati",
    bio: "Seorang programmer 3",
  },
  {
    id: 3,
    username: "zainf",
    name: "Zain Fathoni",
    bio: "Seorang programmer 4",
  },
];

function App() {
  return (
    <>
      <h1>YouTubers</h1>
      <ul>
        {youtubers.map((youtuber) => {
          return (
            <li>
              <h2>{youtuber.name}</h2>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
