const addbtn = document.getElementById("add-movie-btn");
const movies = [];

const renderMovieList = () => {
  const movieList = document.getElementById("movie-list");
  console.log(movieList);
  movieList.innerHTML = "";
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    movieEl.textContent = movie.info.title;
    movieList.append(movieEl);
  });
  console.log(movieList);
};

const addHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }
  const movie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(movie);
  renderMovieList();
  console.log(movies);
};

addbtn.addEventListener("click", addHandler);
