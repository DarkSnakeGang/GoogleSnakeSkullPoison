if(window.snake)snake.skull_poison = function() {

  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    if(script.src === '' || script.src.includes('apis.google.com'))continue;
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      const code = this.responseText;
      if(code.indexOf('trophy') === -1)return;
    
    eval(
        code.replace(
          'v4/apple_"+((10>a?"0":"")+a)+"',
          `v12/trophy_10`
        )
      );
    eval(
        code.replace(
          'd=s_Uwd[a];s_BD(c,d.base,d.target,d.threshold);',
          ``
        )
      );
    };
    req.send();
  }
};
