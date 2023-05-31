const allContacts = document.querySelector('#allcont');
const fav = document.querySelector('#fav');
const contactList = document.querySelector('.contactlist');
const favourites = document.querySelector('.favourites');


// FUNCTIONS FOR DISPLAYING THE CONTENT WHENEVER ANY ITEM IN THE NAV IS CLICKED 
function highlightContacts() {
allContacts.setAttribute('class', 'highlight');
fav.setAttribute('class', '');
favourites.style.display = 'none';
contactList.style.display = 'block';
}
function highlightFavourites() {
fav.setAttribute('class', 'highlight');
allContacts.setAttribute('class', '');
favourites.style.display = 'flex';
contactList.style.display = 'none';
}

allContacts.addEventListener('click',highlightContacts);
fav.addEventListener('click', highlightFavourites);


//CREATING A PAGE WHERE YOU CAN ADD CONTACT
const addContact = document.querySelector('.addContact');
const colorField = document.querySelector('.color');
const addContactPage = document.querySelector('.addContactPage');
const backButton = document.querySelector('.back');

let y;
function colGen() {
    addContactPage.style.display = 'block';
    addContact.style.display = 'none';
    let randomNumber = Math.ceil(Math.random() * 10);
    y = randomNumber;
    colorField.textContent = randomNumber;

    //ADDING AUTOMATIC BG-COLOR TO THE PROFILE PICTURE
    let profilePic = document.querySelector('.profilePic');
    if (y === 1) {
    profilePic.style.backgroundColor = 'red';
    }else if (y === 2) {
        profilePic.style.backgroundColor = 'blue';
    }else if (y === 3) {
        profilePic.style.backgroundColor = 'mediumseagreen';
    }else if (y === 4) {
        profilePic.style.backgroundColor = 'brown';
    }else if (y === 5) {
        profilePic.style.backgroundColor = 'violet';
    }else if (y === 6) {
        profilePic.style.backgroundColor = 'peru';
    }else if (y === 7) {
        profilePic.style.backgroundColor = 'purple';
    }else if (y === 8) {
        profilePic.style.backgroundColor = 'palevioletred';
    }else if (y === 9) {
        profilePic.style.backgroundColor = 'tomato';
    }else if (y === 10) {
        profilePic.style.backgroundColor = 'rgb(106, 106, 211)';
    }
}
addContact.addEventListener('click', colGen);


function closeContactPage() {
    addContactPage.style.display = 'none';
    addContact.style.display = 'block';
}
backButton.addEventListener('click', closeContactPage);

//CREATING THE FUNCTIONALITY TO SAVE THE VALUE IN THE CONTACT INPUT
const saveButton = document.querySelector('.submit');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const phone = document.querySelector('.phoneNo');

let contactArray = [];
let favArray = [];
let currentContact = '';
let starClicked = false;
let recentContact = null;

function saveContact() {
    let phoneNo = phone.value;
    if (fname.value !== '' && lname.value !== '' && phoneNo !== '') {
        let fullName = `${fname.value}:${lname.value}:${phoneNo}:${colorField.textContent}`;
        contactArray.push(fullName);
        fname.value = '';
        lname.value = '';
        phone.value = '';
        contactArray.sort();

        //TO PUSH IT TO LOCAL STORAGE
        //localStorage.setItem('contacts', contactArray);
        //TO FETCH IT LIVE FROM THE LOCAL STORAGE.
        //let store = localStorage.getItem('contacts');
        //liveStore.push(store.split(','));


        // Close the addContactPage.
        closeContactPage()
        // Call the function to update the contact list
    updateContactList();
    }else {
    // Handle empty fields
    }
}

function updateContactList() {
    // Clear all the existing contacts from the contact list
    clearContactList();
    
    for (let i = 0; i < contactArray.length; i++) {
        const meantimeMessage = document.querySelector('.meantimeMessage');
        meantimeMessage.style.display = 'none';
        const contact = contactArray[i];
        const [firstName, lastName, phoneNo, color] = contact.split(':');
        // const splittedContact = contact.split(':');
        const firstLetter = firstName.charAt(0).toUpperCase();
      
        // Create an <li> element for the contact
        const li = document.createElement('li');
      
        
        li.addEventListener('click', function() {
            currentContact = contact;
        });
        li.addEventListener('click', doc);

        //Find the corresponding contact block
        const mainBlock = firstName.charAt(0).toLowerCase();
        const divmainBlock = document.querySelector(`.${mainBlock}`);
        divmainBlock.style.display = 'flex';

        // Find the corresponding alphabetical section (ul) for the contact
        const ul = document.querySelector(`.${firstLetter}`);

        //CREATING THE CONTENT OF THE <li> TAG.
        const subPic = document.createElement('span');
        const nameHolder = document.createElement('p');
      
        //CONTENT OF THE SUBSTITUTE-PICTUR AND NAME-HOLDER
        nameHolder.textContent = `${firstName} ${lastName}`;
        subPic.textContent = `${firstLetter}`;
        //BG COLOR FOR subPic
        switch (`${color}`) {
            case '1':
            subPic.style.backgroundColor = 'red';
            break;

            case '2':
            subPic.style.backgroundColor = 'blue';
            break;

            case '3':
            subPic.style.backgroundColor = 'mediumseagreen';
            break;

            case '4':
            subPic.style.backgroundColor = 'brown';
            break;

            case '5':
            subPic.style.backgroundColor = 'violet';
            break;

            case '6':
            subPic.style.backgroundColor = 'peru';
            break;

            case '7':
            subPic.style.backgroundColor = 'purple';
            break;

            case '8':
            subPic.style.backgroundColor = 'palevioletred';
            break;

            case '9':
            subPic.style.backgroundColor = 'tomato';
            break;

            case '10':
            subPic.style.backgroundColor = 'rgb(106, 106, 211)';
            break;

            default:

        }

        //APPENDING THE CONTENT OF THE <li> TAG TO THE <li> ELEMENT.
        li.appendChild(subPic);
        li.appendChild(nameHolder);
        // Append the <li> element to the corresponding alphabetical section (ul)
        ul.appendChild(li);

        
    }       
      
    
    function clearContactList() {
    // Clear all the contacts from the contact list
    const ulList = document.querySelectorAll('.contactlist ul');
    ulList.forEach(ul => {
      ul.innerHTML = '';
    });
    }

    
}
saveButton.addEventListener('click', saveContact);

//FOR DISPLAYING THE DETAILS OF THE CONTACT
const aboutMe = document.querySelector('.aboutMe');
const aboutName = document.querySelector('.name');
const aboutPhoneNo = document.querySelector('.phoneNumber');
const removeCon = document.querySelector('.trash');

//VARIABLES FOR THE FAVOURITE BUTTON
const star = document.querySelector('.star');
star.innerHTML = '<i class="fa-sharp fa-regular fa-star"></i>';
//THE CODE FOR THE aboutMe

function doc() {
    let [firName, lasName, callNo, colour] = currentContact.split(':');
    aboutMe.style.display = 'block';
    aboutName.textContent = `${firName} ${lasName}`;
    aboutPhoneNo.textContent = `${callNo}`;
    contactList.style.display = 'none';

    //FOR APPLYING COLOR TO THE RESPECTIVE PLACES IN .aboutMe
    const image = document.querySelector('.image');
    const call = document.querySelector('.call');
    const message = document.querySelector('.message')
    if (`${colour}` === '1') {
        image.style.backgroundColor = 'red';
        call.style.color = 'red';
        message.style.color = 'red';
    }else if (`${colour}` === '2') {
        image.style.backgroundColor = 'blue';
        call.style.color = 'blue';
        message.style.color = 'blue';
    }else if (`${colour}` === '3') {
        image.style.backgroundColor = 'mediumseagreen';
        call.style.color = 'mediumseagreen';
        message.style.color = 'mediumseagreen';
    }else if (`${colour}` === '4') {
        image.style.backgroundColor = 'brown';
        call.style.color = 'brown';
        message.style.color = 'brown';
    }else if (`${colour}` === '5') {
        image.style.backgroundColor = 'violet';
        call.style.color = 'violet';
        message.style.color = 'violet';
    }else if (`${colour}` === '6') {
        image.style.backgroundColor = 'peru';
        call.style.color = 'peru';
        message.style.color = 'peru';
    }else if (`${colour}` === '7') {
        image.style.backgroundColor = 'purple';
        call.style.color = 'purple';
        message.style.color = 'purple';
    }else if (`${colour}` === '8') {
        image.style.backgroundColor = 'palevioletred';
        call.style.color = 'palevioletred';
        message.style.color = 'palevioletred';
    }else if (`${colour}` === '9') {
        image.style.backgroundColor = 'tomato';
        call.style.color = 'tomato';
        message.style.color = 'tomato';
    }else if (`${colour}` === '10') {
        image.style.backgroundColor = 'rgb(106, 106, 211)';
        call.style.color = 'rgb(106, 106, 211)';
        message.style.color = 'rgba(106, 106, 211)';
    }

    // FOR CHANGING THE HREF ATTRIBUTE'S VALUE
    call.href = `tel:${callNo}`;
    
   

    // removeCon.addEventListener('click', removeItem);
    star.addEventListener('click', addStar);
    if (favArray.includes(currentContact)) {
        star.innerHTML = '<i class="fa-solid fa-star"></i>';
    
    }
}
        //FOR REMOVING THE DETAILS OF THE CONTACT
 let closeAbout = document.querySelector('.closeAboutMe');
 function closeAboutMe() {
 aboutMe.style.display = 'none';
 contactList.style.display = 'block';
 currentContact = '';
 star.innerHTML = '<i class="fa-sharp fa-regular fa-star"></i>';
 }
 closeAbout.addEventListener('click', closeAboutMe);

 //FOR UPDATING THE FAVOURITES LIST
 function updateFavourites() {
    favourites.innerHTML = '';
    for (let i = 0; i < favArray.length; i++) {
        let favDiv = document.createElement('div');
        let innerFavDiv = document.createElement('div');
        let nameFavDiv = document.createElement('p');

        const [realName, surName, digits, col] = favArray[i].split(':');
        nameFavDiv.textContent = realName + ' ' + surName;
        innerFavDiv.textContent = realName.charAt(0).toUpperCase();
        // innerFavDiv.style.textAlign = 'center';

        switch (`${col}`) {
            case '1':
            favDiv.style.backgroundColor = 'red';
            break;

            case '2':
            favDiv.style.backgroundColor = 'blue';
            break;

            case '3':
            favDiv.style.backgroundColor = 'mediumseagreen';
            break;

            case '4':
            favDiv.style.backgroundColor = 'brown';
            break;

            case '5':
            favDiv.style.backgroundColor = 'violet';
            break;

            case '6':
            favDiv.style.backgroundColor = 'peru';
            break;

            case '7':
            favDiv.style.backgroundColor = 'purple';
            break;

            case '8':
            favDiv.style.backgroundColor = 'palevioletred';
            break;

            case '9':
            favDiv.style.backgroundColor = 'tomato';
            break;

            case '10':
            favDiv.style.backgroundColor = 'rgb(106, 106, 211)';
            break;

            default:

        }

        favourites.appendChild(favDiv);
        favDiv.appendChild(innerFavDiv);
        favDiv.appendChild(nameFavDiv);
    }
}
 // META CAPABILITIES TO ADD TO FAVOURITES; EDIT THE CONTACT; AND DELETE THE CONTACT
 
 const edit = document.querySelector('.edit');
 function addStar(){
    starClicked = true;
    if (star.innerHTML === '<i class="fa-sharp fa-regular fa-star"></i>') {
        favArray.push(currentContact);
        starClicked = false;
        star.innerHTML = '<i class="fa-solid fa-star"></i>';
    } else  if (favArray.includes(currentContact) && star.innerHTML === '<i class="fa-solid fa-star"></i>') {
        const index = favArray.indexOf(currentContact);
        favArray.splice(index, 1);
        star.innerHTML = '<i class="fa-regular fa-star"></i>';
    }
    updateFavourites();
}



        // function removeItem() {
        //     let location = contactArray.indexOf(currentContact);
        //     contactArray.splice(location, 1);
        //     updateContactList()
        //     closeAboutMe();
        //     // const startsWith = currentContact.charAt(0).toLowerCase();
        //     // const closeBlock = document.querySelector(`.${startsWith}`)
        //     // if (closeBlock.innerHTML === '') {
        //     //     closeBlock.style.display = 'none';
        //     // }
            
       
        // }

// Call updateFavoritesView initially to render the favorites list
updateFavourites();