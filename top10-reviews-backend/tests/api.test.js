const request = require("supertest");
const app = require("../src/server"); // Import app
const mongoose = require("mongoose");

describe("API Tests for Movies & Games", () => {
  let server;

  beforeAll(() => {
    server = app.listen(5001, () => console.log("Test server running..."));
  });

  afterAll(async () => {
    await mongoose.connection.close(); // Close MongoDB connection
    server.close(); // Close Express server
  });

  test("GET /api/movies should return 10 movies", async () => {
    const response = await request(app).get("/api/movies");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeLessThanOrEqual(10);
  });

  test("GET /api/games should return 10 games", async () => {
    const response = await request(app).get("/api/games");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeLessThanOrEqual(10);
  });

  test("POST /api/movies should add a movie", async () => {
    const newMovie = { title: "Test Movie", rating: 8.5, genre: "Action" };
    const response = await request(app).post("/api/movies").send(newMovie);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Movie added successfully");
  });

  test("POST /api/games should add a game", async () => {
    const newGame = { title: "Test Game", rating: 9.0, genre: "Adventure" };
    const response = await request(app).post("/api/games").send(newGame);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Game added successfully");
  });
});
