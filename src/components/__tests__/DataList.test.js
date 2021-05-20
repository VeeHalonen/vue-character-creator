import { shallowMount } from "@vue/test-utils";
import DataList from "../DataList";

describe("DataList.vue", function () {
  const data = [{ name: "human" }, { name: "not human" }];
  const title = "I'm a title";

  it("has title in <h3>", function () {
    const wrapper = shallowMount(DataList, {
      propsData: { title, data },
    });

    const h3 = wrapper.find("h3");
    expect(h3.text()).toBe(title);
  });

  it("has data in list", function () {
    const wrapper = shallowMount(DataList, {
      propsData: { title, data },
    });

    expect(wrapper.findAll("li")).toHaveLength(data.length);
  });

  // it("renders Loading if no data", function () {
  //   const dataEmpty = [];
  //   const wrapper = shallowMount(DataList, {
  //     propsData: { title, dataEmpty },
  //   });

  //   const p = wrapper.find("p");

  //   expect(p.text()).toEqual(expect.stringContaining("Loading"));
  // });
});
