// function title(){
//   document.write('Welcome to Astronomy World');
// }
var lists = ["Main","태양 이야기","달 이야기","우주 이야기","재미있는 상대성 이론","신비한 이야기들"]

function subject(){
document.write('<div id="title"><a href="index.html">Astronomy World</a></div>');
}

function list1(){
  document.write('<div id="list"><a href="index.html">'+lists[0]+'</a></div>');
}

function list2(){
  document.write('<div id="list"><a href="list1.html">'+lists[1]+'</a></div>');
}

function list3(){
  document.write('<div id="list"><a href="list2.html">'+lists[2]+'</a></div>');
}

function list4(){
  document.write('<div id="list"><a href="list3.html">'+lists[3]+'</a></div>');
}

function list5(){
  document.write('<div id="list"><a href="list4.html">'+lists[4]+'</a></div>');
}

function list6(){
  document.write('<div id="list"><a href="list5.html">'+lists[5]+'</a></div>');
}
