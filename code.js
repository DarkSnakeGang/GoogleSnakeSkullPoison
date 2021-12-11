if(window.snake)snake.skull_poison = function() {
  const a = new Image();
  a.src = 'https://www.google.com/logos/fnbx/snake_arcade/keys.svg';
  a.width = a.height = 25;
  a.style = 'position:relative;left:460px;top:11.5px;';

  window.________b = document.createElement('div');
  ________b.style = 'width:25px;position:relative;left:490px;top:-24px;font-size:20px;font-family:Roboto,Arial,sans-serif;'

  document.getElementsByClassName('sEOCsb')[0].appendChild(a);
  document.getElementsByClassName('sEOCsb')[0].appendChild(________b);

  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    if(script.src === '' || script.src.includes('apis.google.com'))continue;
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      const code = this.responseText;
      if(code.indexOf('trophy') === -1)return;

    eval(
        code.match(
          /[a-zA-Z0-9_$]new s_AD(/
        )[0].replace(
          'v4/apple_"+((10>a?"0":"")+a)+".png',
          `snake_arcade/v12/trophy_10.png
          `
        )
      );
      );
    };
    req.send();
  }
};
