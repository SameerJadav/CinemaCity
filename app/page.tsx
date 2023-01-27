interface Movie {
  id: number;
  title: string;
}

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);

  return (
    <main>
      {res.results.map((movie: Movie) => {
        return (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
          </div>
        );
      })}
    </main>
  );
}
