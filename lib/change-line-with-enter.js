'use babel';

module.exports = {
  activate() {
    this.subscription = inkdrop.commands.add(document.body, {
      'change-line-with-enter:run': () => {

        const { cm } = inkdrop.getActiveEditor();
        cm.replaceSelection("</br>\n");
      }
    })
  },

  deactivate() {
    this.subscription.dispose();
  }
};
