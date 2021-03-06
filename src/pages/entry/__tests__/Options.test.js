import { render, screen } from "@testing-library/react";
import Options from "../Options";

describe("options component", () => {
  test("scoop images are rendered correctly", async () => {
    render(<Options optionType='scoops' />);

    const images = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(images).toHaveLength(2);

    const altText = images.map((elem) => elem.alt);
    expect(altText).toEqual(["Mint chip scoop", "Vanilla scoop"]);
  });

  test("topping images are rendered correctly", async () => {
    render(<Options optionType='toppings' />);

    const toppingImages = await screen.findAllByRole("img", {
      name: /topping/i,
    });
    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map((elem) => elem.alt);
    expect(altText).toEqual([
      "M&Ms topping",
      "Hot fudge topping",
      "Peanut butter cups topping",
    ]);
  });
});
