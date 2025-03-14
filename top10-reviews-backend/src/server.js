const app = require("./app");

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  module.exports = server;
} else {
  module.exports = app; // Export for testing
}
