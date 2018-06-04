$(document).ready(() => {
  
  const $aboutUs = $('.aboutus');
  const $contacts = $('.contacts');
  const $tree = $('.tree');
  const $chiSiamo = $('.chisiamo');
  const $contatti = $('.contatti');
  const $albero = $('.albero');
  const $menumob = $('.menumob');
  const $barramenu = $('.barramenu');
  
  
$aboutUs.on('click',()=>{
 $chiSiamo.toggle();
 $contatti.hide();
 $albero.hide();
 $barramenu.hide();
 $menumob.show();
 })

$contacts.on('click',()=>{
 $contatti.toggle();
 $chiSiamo.hide();
 $albero.hide();
 $barramenu.hide();
 $menumob.show();
})  

$tree.on('click',()=>{
 $albero.toggle();
 $chiSiamo.hide();
 $contatti.hide();
 $barramenu.hide();
 $menumob.show();
})

$menumob.on('click',()=>{
 $barramenu.toggle();
}) 




 
})//chiudetutto