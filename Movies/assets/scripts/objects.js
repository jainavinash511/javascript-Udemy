const addbtn = document.getElementById("add-movie-btn");
const searchbtn = document.getElementById("search-btn");
const movies = [];

const renderMovieList = (filterTerm = "") => {
  const movieList = document.getElementById("movie-list");
  console.log(filterTerm);
  movieList.innerHTML = "";
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  const filterdMovies = !filterTerm
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filterTerm));
  filterdMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title;
    for (key in movie.info) {
      if (key !== "title") text += ` ${key} : ${movie.info[key]}`;
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
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

function searchHandler() {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovieList(filterTerm);
}

addbtn.addEventListener("click", addHandler);
searchbtn.addEventListener("click", searchHandler);
