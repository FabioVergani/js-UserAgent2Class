'use strict';
var dir=(function(o){return o.dir.bind(o);})(console);
//"author" content="Fabio Vergani"
//=====================================================================================
'use strict';
var information=(function(global){
 function j(t){return t.split(' ').join('_');}
 var w=global, o=w.Object.create(null), U=String(w.navigator.userAgent).toLowerCase(), RE=w.RegExp, q, z;
 for(var s,r,e,m=U.split(/\s*[()]\s*/),l=m.length+0,i=0,f=j;i<l;i++){
	e=m[i];
	if(i%2===0){
		r=e.match(/([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g);
		if(r!==null){for(var S,M,R=r,L=R.length+0,I=0,O=o;I<L;I++){M=R[I].split(/[\/\s]+/);S=M[0];if(S!=='mozilla'){O[f(S)]=M[1];};};};
	}else{//inside-parentesis
		r=m[i].split(';');//platforms
		for(var R=r,L=R.length+0,I=0,p=/\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,_=w.parseFloat,F=f,k,v,u,O=o,g=RE;I<L;I++){if(p.exec(r[i])!==null){k=F(g.$1);v=g.$2;u=O[k];if(!u||_(u)<_(v)){O[k]=v};};};
	};
 };

 if(/(\b(android|ipad|ipod|phone|ce|blackberry\w*|bb10|tablet|meego|webos|palm|symbian|j2me|docomo|pda|chtml|midp|cldc)\b|(\bwp|wp7\b)|\w*?mobile\w*?)/.exec(U)){
	o.mobile=RE.$1||false;
 }else{
 	if(/\b(xbox|playstation|nintendo)\b/.exec(U)){
		o.game=RE.$1||false;
 	}else{
 		if(/\b(windows|macintosh|linux|unix)\b/.exec(U)){
			o.desktop=RE.$1||false;
		};
 	};
 };


 q='cpu_os';
 z=o[q];
 if(z){ua.ios=j(z);delete o[q];};


 q='applewebkit';
 z=o[q];
 if(z){
	o.webkit=z;delete o[q];
	q='opr';
	z=o[q];
	if(z){o.opera=z;delete o[q];delete o.chrome;};
	q='safari';
	z=o[q];
	if(z){
		if(o.chrome||o.crios||o.opera||(o.mobile && !o.ios)){
			delete o[q];
			if(o.vivaldi){delete o.chrome;}
		};
	};
 };

 if('edge' in o){for(var p in {'safari':0,'chrome':0,'android':0}){delete o[p]};};

 return o;
})(window);
//================
dir(information);
