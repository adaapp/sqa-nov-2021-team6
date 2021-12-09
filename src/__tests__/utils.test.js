import { singleColorConverter } from "../components/utils.js";

test("singleColorConverter returns correct value", () => {
    expect(singleColorConverter("23")).toBe("17");
    expect(singleColorConverter("155")).toBe("9b");
  });

