 let comparaComThis = function(param) {
     console.log(this === param)
 }

 comparaComThis(global)

 const obj = {}
 comparaComThis = comparaComThis.bind(obj)
 comparaComThis(global)
 comparaComThis(obj)

 let comparaComThisArrow = param => console.log(this === param)
 comparaComThisArrow(global)
 comparaComThisArrow(module.exorts)

 comparaComThisArrow = comparaComThisArrow.bind(obj)
 comparaComThisArrow(obj)
 comparaComThisArrow(module.exorts)

 //o this na qual o contexto foi determinadonão tem variação nenhuma, mesmo com o bind