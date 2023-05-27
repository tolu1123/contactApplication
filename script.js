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
favourites.style.display = 'block';
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
const favArray = [];


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
      
        //FOR DISPLAYING THE DETAILS OF THE CONTACT
        const aboutMe = document.querySelector('.aboutMe');
        const aboutName = document.querySelector('.name');
        const aboutPhoneNo = document.querySelector('.phoneNumber');


        //THE CODE FOR THE aboutMe
        function doc() {
            aboutMe.style.display = 'block';
            aboutName.textContent = `${firstName} ${lastName}`
            aboutPhoneNo.textContent = `${phoneNo}`;
            contactList.style.display = 'none';

           //FOR APPLYING COLOR TO THE RESPECTIVE PLACES IN .aboutMe
        const image = document.querySelector('.image');
        const call = document.querySelector('.call');
        const message = document.querySelector('.message');

        if (`${color}` === '1') {
            image.style.backgroundColor = 'red';
            call.style.color = 'red';
            message.style.color = 'red';
            }else if (`${color}` === '2') {
                image.style.backgroundColor = 'blue';
                call.style.color = 'blue';
                message.style.color = 'blue';
            }else if (`${color}` === '3') {
                image.style.backgroundColor = 'mediumseagreen';
                call.style.color = 'mediumseagreen';
                message.style.color = 'mediumseagreen';
            }else if (`${color}` === '4') {
                image.style.backgroundColor = 'brown';
                call.style.color = 'brown';
                message.style.color = 'brown';
            }else if (`${color}` === '5') {
                image.style.backgroundColor = 'violet';
                call.style.color = 'violet';
                message.style.color = 'violet';
            }else if (`${color}` === '6') {
                image.style.backgroundColor = 'peru';
                call.style.color = 'peru';
                message.style.color = 'peru';
            }else if (`${color}` === '7') {
                image.style.backgroundColor = 'purple';
                call.style.color = 'purple';
                message.style.color = 'purple';
            }else if (`${color}` === '8') {
                image.style.backgroundColor = 'palevioletred';
                call.style.color = 'palevioletred';
                message.style.color = 'palevioletred';
            }else if (`${color}` === '9') {
                image.style.backgroundColor = 'tomato';
                call.style.color = 'tomato';
                message.style.color = 'tomato';
            }else if (`${color}` === '10') {
                image.style.backgroundColor = 'rgb(106, 106, 211)';
                call.style.color = 'rgb(106, 106, 211)';
                message.style.color = 'rgba(106, 106, 211)';
            }

            // FOR CHANGING THE HREF ATTRIBUTE'S VALUE
            call.href = `tel:${phoneNo}`;

            // META CAPABILITIES TO ADD TO FAVOURITES; EDIT THE CONTACT; AND DELETE THE CONTACT
            const star = document.querySelector('.star');
            star.innerHTML = '<i class="fa-sharp fa-regular fa-star"></i>';
            // const edit = document.querySelector('.edit');
            // const removeCon = document.querySelector('.delete');
                
            function addStar() {
                if (star.innerHTML === '<i class="fa-sharp fa-regular fa-star"></i>') {
                    // If not starred, add star and push to the array
                    favArray.push(contactArray[i]);
                    star.innerHTML = '<i class="fa-solid fa-star"></i>';
                } else {
                    // If already starred, remove star and splice from the array
                    const index = favArray.indexOf(contactArray[i]);
                    if (index !== -1) {
                        favArray.splice(index, 1);
                        star.innerHTML = '<i class="fa-regular fa-star"></i>';
                    } else {
                        // Otherwise
                    }
                }
            }
                  
            star.addEventListener('click', addStar);

        }
        li.addEventListener('click', doc);

        //FOR REMOVING THE DETAILS OF THE CONTACT
        let closeAbout = document.querySelector('.closeAboutMe');
        function closeAboutMe() {
        aboutMe.style.display = 'none';
        contactList.style.display = 'block';
        }
        closeAbout.addEventListener('click', closeAboutMe);

        


        //Find the corresponding contact block
        const block = firstName.charAt(0).toLowerCase();        
        const divBlock = document.querySelector(`.${block}`);
        //MAKE THE BLOCK DISPLAY
        divBlock.style.display = 'flex';

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



