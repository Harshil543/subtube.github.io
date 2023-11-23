import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  origin: "*", // Replace '*' with the allowed origin or list of origins
});

// Helper method to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default function middleware(handler) {
  return async (req, res) => {
    // Run the CORS middleware
    try {
      await runMiddleware(req, res, cors);
    } catch (error) {
      console.error("Error in CORS middleware:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Call the handler (API route logic) after applying the middleware
    return handler(req, res);
  };
}
