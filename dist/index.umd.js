!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self)["greek-utilities"]={})}(this,function(e){function t(e,t){return"string"==typeof e&&"string"==typeof t&&1===e.length&&!(t.length<1)&&t.indexOf(e)>=0}function n(e){return"string"==typeof e&&e.length>0}const r=(e,t)=>[].concat(...e.map(e=>t.map(t=>[].concat(e,t)))),i=function(e,t){return t?i(r(e,t),...[].slice.call(arguments,2)):e};function f(e){if(!n(e))return e;let r="";for(let n=0;n<e.length;n++)t(e[n],"άἀἁἂἃἄἅἆἇὰάᾀᾁᾂᾃᾄᾅᾆᾇᾰᾱᾲᾳᾴᾶᾷΆἈἉἊἋἌἍἎἏᾈᾉᾊᾋᾌᾍᾎᾏᾸᾹᾺΆᾼ")?r+="α":t(e[n],"έἐἑἒἓἔἕὲέΈἘἙἚἛἜἝ")?r+="ε":t(e[n],"ήἠἡἢἣἤἥἦἧῆὴῇΉἨἩἪἫἬἭἮἯ")?r+="η":t(e[n],"ίἰἱἲἳἴἵὶῖΊἶἷἸἹἺἻἼἽἾἿ")?r+="ι":t(e[n],"όὀὁὂὃὄὅὸΌὈὉὊὋὌὍ")?r+="ο":t(e[n],"ύὐὑὒὓὔὕὖὗΎὙὛὝὟ")?r+="υ":t(e[n],"ώὠὡὢὣὤὥὦὧῶΏὨὩὪὫὬὭὮὯ")?r+="ω":r+=e[n].toLowerCase();return r}const o={"αι":["ai","e"],"ει":["ei","i"],"οι":["oi","i"],"ου":["ou","oy","u"],"ευ":["eu","ef","ev","ey"],"αυ":["au","af","av","ay"],"μπ":["mp","b"],"γγ":["gg","g"],"γκ":["gk","g"],"ντ":["nt","d"]},l={"α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"th","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"x","ο":"o","π":"p","ρ":"r","σ":"s","ς":"s","τ":"t","υ":"u","φ":"f","χ":"x","ψ":"ps","ω":"w"},c={"β":["b","v"],"η":["h","i"],"θ":["th","8"],"ξ":["ks","x"],"υ":["y","u","i"],"φ":["f","ph"],"χ":["x","h","ch"],"ω":["w","o","v"]},a=f;e.getGreeklish=function(e){if(!n(e))return e;e=f(e);for(let t=0;t<e.length;t++){let n=l[e[t]];"string"==typeof n&&(e=e.replace(new RegExp(e[t],"g"),n))}return e},e.getGreeklishVariants=function(e){if(!n(e))return e;let t=[],r=[],a=f(e),g=a,p=[],u=[];for(let e in o){let t=a.indexOf(e),n=[];t>=0&&(o[e].forEach(t=>{n=[...n,{find:e,replace:t}]}),p=[...p,n],g=g.replace(new RegExp(e,"g"),""))}for(let e in c){let t=g.indexOf(e),n=[];t>=0&&(c[e].forEach(t=>{n=[...n,{find:e,replace:t}]}),u=[...u,n])}return r=i(...p,...u),r&&r.length>0&&(t=r.map(e=>{let t=a;return Array.isArray(e)?e.forEach(e=>t=t.replace(new RegExp(e.find,"g"),e.replace)):t=t.replace(new RegExp(e.find,"g"),e.replace),t})),0===t.length&&(t=[a]),t.map(e=>{for(let t=0;t<e.length;t++){let n=l[e[t]];"string"==typeof n&&(e=e.replace(new RegExp(e[t],"g"),n))}return e})},e.getSanitizedDiacritics=function(e){if(!n(e))return e;let r="";for(let n=0;n<e.length;n++)t(e[n],"άἀἁἂἃἄἅἆἇὰάᾀᾁᾂᾃᾄᾅᾆᾇᾰᾱᾲᾳᾴᾶᾷ")?r+="α":t(e[n],"ΆἈἉἊἋἌἍἎἏᾈᾉᾊᾋᾌᾍᾎᾏᾸᾹᾺΆᾼ")?r+="Α":t(e[n],"έἐἑἒἓἔἕὲέ")?r+="ε":t(e[n],"ΈἘἙἚἛἜἝ")?r+="Ε":t(e[n],"ήἠἡἢἣἤἥἦἧῆὴῇ")?r+="η":t(e[n],"ΉἨἩἪἫἬἭἮἯ")?r+="Η":t(e[n],"ίἰἱἲἳἴἵὶῖ")?r+="ι":t(e[n],"ΊἶἷἸἹἺἻἼἽἾἿ")?r+="Ι":t(e[n],"όὀὁὂὃὄὅὸ")?r+="ο":t(e[n],"ΌὈὉὊὋὌὍ")?r+="Ο":t(e[n],"ύὐὑὒὓὔὕὖὗ")?r+="υ":t(e[n],"ΎὙὛὝὟ")?r+="Υ":t(e[n],"ώὠὡὢὣὤὥὦὧῶ")?r+="ω":t(e[n],"ΏὨὩὪὫὬὭὮὯ")?r+="Ω":r+=e[n];return r},e.getSanitizedDiacriticsLowercase=a});
