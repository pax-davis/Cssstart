const BASE_URL = "https://your-api.com";

export const login = async (username, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const getScores = async () => {
  const response = await fetch(`${BASE_URL}/scores`);
  return response.json();
};

export const getQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");
  return response.json();
};
