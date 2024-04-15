// Model of Link sharing App

//

//

// State of the app
export const state = {
  link1: [],
  link2: [],
};

export const fetchData = async function () {
  const url = "http://localhost:3000/api/v1/data";
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
