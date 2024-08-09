import grapesjs from 'grapesjs';

const editor = grapesjs.init({
  container: '#gjs',
  fromElement: true,
  width: 'auto',
  height: '100vh',
  storageManager: true,
});

editor.addComponents('<h1>Hello World Component!</h1>');



