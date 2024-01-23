export async function getCards() {
  const response = await fetch(
    "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/"
  );
  const data = await response.json();
  return data;
}

export async function addReading(reading) {
  const response = await fetch("http://localhost:8000/readings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      reading,
    }),
  });
  const data = await response.json();
  return data;
}
