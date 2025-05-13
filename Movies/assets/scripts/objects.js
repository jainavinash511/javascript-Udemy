const addbtn = document.getElementById("add-movie-btn");

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
  console.log(movie);
};

addbtn.addEventListener("click", addHandler);
