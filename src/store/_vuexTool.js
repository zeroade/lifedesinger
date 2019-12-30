import Vue from "vue";
/**
 * 只是把字串第一個字轉成小寫
 * @param type
 */
function uncaptalize(type) {
  return type.charAt(0).toLowerCase() + type.slice(1);
}

export const createTypes = (types) => {
  const typeGroup = {};
  types.forEach(typeString => {
    typeGroup[typeString] = typeString;
  });
  return typeGroup;
};

export const createGetters = (typeGroup) => {
  const getters = {};
  for (let type in typeGroup) {
    const replacedType = type.replace(/get|post|put|delete/, "");
    const camelCaseType = uncaptalize(replacedType);
    const camelCaseTypeRes = camelCaseType + "Res";
    getters[camelCaseTypeRes] = (state) => {
      return state[camelCaseTypeRes];
    };
  }
  return getters;
};

export const createMutations = (typeGroup) => {
  const mutations = {};
  for (let type in typeGroup) {
    const replacedType = type.replace(/get|post|put|delete/, "");
    const mutationName = "set" + replacedType + "Res";
    const camelCaseType = uncaptalize(replacedType);
    const attributeName = camelCaseType + "Res";
    mutations[mutationName] = (state, payload) => {
      Vue.set(state, attributeName, payload);
    };
  }
  return mutations;
};
