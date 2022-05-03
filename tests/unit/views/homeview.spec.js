import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView";

describe("Componente HomeView", () => {
  test("La clase debe ser HOME", () => {
    const wrapper = shallowMount(HomeView);

      // Capturo las clases del div, en la variable clases
    const clases = wrapper.find('div').classes()

      // Espero que "clases" contenga "home"
    expect(clases).toContain("home")


  });
});
