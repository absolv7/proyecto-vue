import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView";

describe("Componente HomeView", () => {

    test("Debe existir un div con la clase home", () => {
        const wrapper = shallowMount(HomeView);

        // Capturo las clases del div, en la variable clases
        const clases = wrapper.find('div').classes()

        // Espero que "clases" contenga "home"
        expect(clases).toContain("home")

    });
});
