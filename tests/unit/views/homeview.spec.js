import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView";


describe("Componente HomeView", () => {
  test("Debe hacer match con el snapshot", () => {

    // Monto el componente HomeView
    const wrapper = shallowMount(HomeView);

    //Espero que el html sea identico al snapshot.
    expect(wrapper.html()).toMatchSnapshot();
  });
});
