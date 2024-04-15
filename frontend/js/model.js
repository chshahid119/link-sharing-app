// Model of Link sharing App

//

//

// State of the app
export const state = {
  link1: [],
  link2: [],
};

export const fetchData = async function () {
  try {
    const res = await fetch("/api/v1/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
