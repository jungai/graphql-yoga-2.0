import "dotenv/config";
import { app } from "apps";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${PORT}/graphql`
  );
});
