import { render, screen, waitFor } from "@testing-library/react";
import Entry from "../Entry";
import { rest } from "msw";
import { server } from "../../../mocks/server";

test("display alert on request error", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Entry />);
  await waitFor(async () => {
    const alerts = await screen.findAllByRole("role");

    expect(alerts).toHaveLength(2);
  });
});
