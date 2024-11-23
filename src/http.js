export async function fetchUserPlaces() {
  var response = await fetch("http://localhost:3000/user-places");
  if (!response.ok) {
    const error = new Error("Failed to fetch user places data");
    throw error;
  }
  const resData = await response.json();
  return resData.places;
}

export async function fetchAvailablePlaces() {
  var response = await fetch("http://localhost:3000/places");
  if (!response.ok) {
    const error = new Error("Failed to fetch places data");
    throw error;
  }
  const resData = await response.json();
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }
  console.log(resData);
  return resData.message;
}
