module.exports = abbrev;

function subStrings(str){
  response = [];
  for (var i = str.length;i > 0; i--){
    response.push(str.substr(0,i));
  }
  return response;
}


function abbrev(){

  var submap = {};
  var dups = {};
  var arglist = [];

  for(var i = 0;i< arguments.length; i++ ){

    arglist.push(arguments[i]);
    var subs = subStrings(arguments[i]);

    for(var j = 0; j<subs.length; j++ ){
      if(submap[subs[j]] ){
        dups[subs[j]] = true;
      }else{
        submap[subs[j]] = arguments[i];
      }
    }
  }

  Object.keys(dups).map(function(x){
    var pos = arglist.indexOf(x);

     if( !(pos > -1) ) {
       delete submap[x];
     };
  })

  return submap;
}
