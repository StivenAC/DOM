
const main = document.createElement('main');
main.className = 'profile';


const section1 = document.createElement('section');


const imgProfile = document.createElement('img');
imgProfile.src = 'https://pbs.twimg.com/media/F9yGxZLWsAAzRcM.jpg';
imgProfile.alt = 'Jessica Randall - Foto de perfil';
imgProfile.className = 'profile__avatar';
section1.appendChild(imgProfile);


const h1Name = document.createElement('h1');
h1Name.textContent = 'Como tan muchachos';
h1Name.className = 'profile__name';
section1.appendChild(h1Name);


const pCity = document.createElement('p');
pCity.textContent = 'The park, United States';
pCity.className = 'profile__city';
section1.appendChild(pCity);

const pDescription = document.createElement('p');
pDescription.textContent = '"park workers"';
pDescription.className = 'profile__description';
section1.appendChild(pDescription);


main.appendChild(section1);


const section2 = document.createElement('section');
section2.className = 'btns';


const aLink1 = document.createElement('a');
aLink1.href = 'https://youtu.be/dQw4w9WgXcQ';
aLink1.className = 'profile__btn';
aLink1.textContent = 'Rick';
section2.appendChild(aLink1);

const aLink2 = document.createElement('a');
aLink2.href = 'https://youtu.be/gAofsaOSppA';
aLink2.className = 'profile__btn';
aLink2.textContent = 'Como tan muchachos';
section2.appendChild(aLink2);

const aLink3 = document.createElement('a');
aLink3.href = 'https://www.youtube.com/watch?v=BoKQ6991WL8';
aLink3.className = 'profile__btn';
aLink3.textContent = 'Silvidito';
section2.appendChild(aLink3);

const buttonTwitter = document.createElement('button');
buttonTwitter.className = 'profile__btn';
buttonTwitter.textContent = 'Twitter';
section2.appendChild(buttonTwitter);

const buttonInstagram = document.createElement('button');
buttonInstagram.className = 'profile__btn';
buttonInstagram.textContent = 'Instagram';
section2.appendChild(buttonInstagram);

main.appendChild(section2);

document.body.appendChild(main);
