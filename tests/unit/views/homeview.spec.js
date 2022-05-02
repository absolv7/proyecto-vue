import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView";

describe("Componente HomeView", () => {
  test("La clase debe ser HOME", () => {
    const wrapper = shallowMount(HomeView);

      // Capturo las clases del div: "cs", en la variable clases
    const clases = wrapper.find('[data-testid="cs"]').classes()

      // Espero que "clases" contenga "home"
    expect(clases).toContain("home")

  });
});
