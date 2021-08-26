const theme = "bubble";

const bindings = {
  // This will overwrite the default binding also named 'tab'
  indent: {
    key: 9,
    format: ["list"],
    handler: function storeEditor(range, context) {
    },
  },

  tab: {
    key: 9,
    handler: function storeEditor(range) {
    },
  },
};

const modules = {
  toolbar: false,
  keyboard: {
    bindings: bindings,
  },
};

const quillConfig = {
  theme,
  modules
}
export default quillConfig;