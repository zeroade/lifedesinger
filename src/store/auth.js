import { createTypes, createGetters, createMutations } from "./_vuexTool";
import requestAsync from "./_vuexApi";

/**
 * TypeGroup作為module核心，創造了state, getter與mutation 
 */
const typeGroup = createTypes(["postLogin"]);

const state = {
  // 不用自己創造State的欄位 
};
const getters = {
  // 不用自己創造getters的欄位 
  ...createGetters(typeGroup)
};

const actions = {
  // Restful API - const static data
  login: async (store, data) => {
    await requestAsync(store, typeGroup.postLogin, {
      url: "/login",
      data
    });
  },
};

const mutations = {
  // 不用自己創造mutations的欄位 
  ...createMutations(typeGroup)
};

export { state, getters, actions, mutations };
