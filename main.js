/*
  Plugin Documentation
  https://adobexdplatform.com/plugin-docs/
*/


let panel;
const panelMarkup = () => {
  let html = `
    <div style="background: white; margin: 0px;">
      <div>
        <h1 style="margin-top: 30px; margin-bottom: 30px; font-size: 16px; text-align: center;">New Plugin 👋</h1>
      </div>
    </div>
  `;
  panel = document.createElement("div");
  panel.innerHTML = html;
  return panel;
};

const show = async event => {
  console.log('here')
  if (!panel) {
    await event.node.appendChild(panelMarkup());
  }
};

const hide = event => {
  console.log('hiding')
};

module.exports = {
  panels: {
    runPlugin: {
      show,
      hide
    }
  }
};
