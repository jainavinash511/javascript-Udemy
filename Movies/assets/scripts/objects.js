const addbtn = document.getElementById("add-movie-btn");

const addHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  console.log(title, extraName, extraValue);
};

addbtn.addEventListener("click", addHandler);
