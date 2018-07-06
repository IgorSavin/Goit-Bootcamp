const jumbotron = document.querySelector('.jumbotron');

const spanArr = ['SOME YEAR', 'SOME OTHER YEAR', 'SOME OTHER DIFERENT YEAR', 'YET ANOTHER YEAR', 'YESTERDAY?', 'NO...', 'WHO CARES?', 'DUNNO', 'MEEH', '????', '@$%^#'];

const liArr = ['- BORN IN CANADA AS WADE WILSON.', '- HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.', '- WADE BEGAN HIS MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.', '- IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.', '- LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.', '- IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM', '- HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE', '- DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.', '- IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD', '- FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL', '- WHY DO YOU KEEP READING, THIS IS SO BORING...'];




// create
const titleContainer = document.createElement('div');
const h1 = document.createElement('h1');
const deadpoolSpan = document.createElement('span');
const deadpoolP = document.createElement('p');
const deadpoolSpan2 = document.createElement('span');
const imgContainer = document.createElement('div');
const mainImg = document.createElement('img');
const subTitleContainer = document.createElement('div');
const rowListContainer = document.createElement('div');
const ul = document.createElement('ul');
const frag = document.createDocumentFragment();
for (let i=0; i<liArr.length;i++){

    let li = document.createElement('li');
    let span = document.createElement('span');

    li.classList.add('list-item');
    span.classList.add('red-text')

    li.textContent = liArr[i];
    span.textContent = spanArr[i];

    frag.append(li);
    li.prepend(span);
};
const mainImgContainer = document.createElement('div');
const mainImg2 = document.createElement('img');
const rowContainer = document.createElement('div');
const colRowContainer = document.createElement('div');
const blockquote = document.createElement('blockquote');
const blockquoteP = document.createElement('p');
const footer = document.createElement('footer');
const cite = document.createElement('cite');
const footerContainer =document.createElement('div');
const col1 = document.createElement('div');
const col2 = document.createElement('div');
const smallTextP = document.createElement('p');

const liArr2 =['Made as a <a href="https://www.freecodecamp.com/" target="_blank">CodeCamp</a> project','<a href="http://www.foxmovies.com/movies/deadpool" target="_blank">Assets and idea</a>','<a href="http://marvel.com/universe/Deadpool_(Wade_Wilson)" target="_blank">Info</a>','<a href="https://twitter.com/deadpoolmovie" target="_blank">The best twitter ever</a>'];


const frag2 = document.createDocumentFragment();
for (let i =0; i<liArr2.length; i++){
    let li2 = document.createElement('li');
    li2.innerHTML = liArr2[i];
    frag2.append(li2);
};



/// add class
titleContainer.classList.add('row', 'title-container');
h1.classList.add('text-center');
deadpoolSpan.classList.add('red-text');
deadpoolP.classList.add('text-center');
deadpoolSpan2.classList.add('red-text');
imgContainer.classList.add('row');
mainImg.classList.add('img-responsive','inside-shadow')
subTitleContainer.classList.add('row', 'sub-title-container');
rowListContainer.classList.add('row', 'list-container');
mainImgContainer.classList.add('row');
mainImg2.classList.add('img-responsive','inside-shadow');
rowContainer.classList.add('row');
colRowContainer.classList.add('col-ls-6','col-ls-offset-3','col-md-6','col-md-offset-3');
blockquote.classList.add('blockquote-reverse');
footerContainer.classList.add('row','footer');
col1.classList.add('col-md-6');
col2.classList.add('col-md-6');
smallTextP.classList.add('small-text');



///add attr
imgContainer.setAttribute('id','main-image-container');
mainImg.setAttribute('src','http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg');
mainImg.setAttribute('alt','picture');
mainImgContainer.setAttribute('id','main-image-container');
mainImg2.setAttribute('src','http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg');
mainImg2.setAttribute('alt','picture');
cite.setAttribute('title','Source Title');


/// Clone
const cloneH1 = h1.cloneNode(false);
const cloneUl = ul.cloneNode(false);

/// add text
h1.textContent = ' TRIBUTE PAGE';
deadpoolSpan.textContent = 'DEADPOOL';
deadpoolP.textContent ='WITH GREAT POWER COMES GREAT';
deadpoolSpan2.textContent = ' IRRESPONSIBILITY';
cloneH1.textContent = 'TIMELINE';
blockquoteP.textContent = 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.';
cite.textContent= 'Someone with a great ass';
smallTextP.textContent = 'All rights and lefts reserved.';


/// paste
jumbotron.append(titleContainer);
titleContainer.append(h1);
h1.prepend(deadpoolSpan);
titleContainer.append(deadpoolP);
deadpoolP.append(deadpoolSpan2);
jumbotron.append(imgContainer);
imgContainer.append(mainImg);
jumbotron.append(subTitleContainer);
subTitleContainer.append(cloneH1);
jumbotron.append(rowListContainer);
rowListContainer.append(ul);
ul.append(frag);
jumbotron.append(mainImgContainer);
mainImgContainer.append(mainImg2);
const cloneSubTitleContainer = subTitleContainer.cloneNode(true);
cloneSubTitleContainer.children[0].textContent = 'QUOTE';
jumbotron.append(cloneSubTitleContainer);
jumbotron.append(rowContainer);
rowContainer.append(colRowContainer);
colRowContainer.append(blockquote);
blockquote.append(blockquoteP);
blockquote.append(footer);
footer.append(cite);
jumbotron.append(footerContainer);
footerContainer.append(col1);
footerContainer.append(col2);
col1.append(smallTextP);
col2.append(cloneUl);
cloneUl.append(frag2);



console.log(cloneSubTitleContainer.children);





