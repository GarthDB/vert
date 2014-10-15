var links = Sizzle('#tags a strong');
for(var i = 0; i < links.length; i++){
  var tag = links[i].innerHTML;
  if (tag == 'vertical'){
    var main = Sizzle('#main')[0];
    main.classList.add('vert');
    break;
  }
}
