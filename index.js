
let content = document.querySelector('.js-generated.content')

let dogName = document.createElement('h1');
dogName.textContent = 'Rizzo';
dogName.setAttribute('class', 'dog-name');
content.append(dogName);

let dogContent = document.createElement('div');
dogContent.setAttribute('class', 'dog-content');
content.append(dogContent);

let dogImage = document.createElement('img');
dogImage.setAttribute('class', 'dog-image');
dogImage.setAttribute('src', './assets/rizzo.jpg');
dogContent.append(dogImage);

let dogDetails = document.createElement('div');
dogDetails.setAttribute('class', 'dog-details');
dogContent.append(dogDetails);

let h3 = document.createElement('h3');
h3.textContent = 'Description:';
dogDetails.append(h3);

let para = document.createElement('p');
para.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.";
dogDetails.append(para);

let feeding = document.createElement('h3');
feeding.textContent = 'Feeding Times:';
dogDetails.append(feeding);

let list = document.createElement('ul');
dogDetails.append(list);

let item1 = document.createElement('li');
item1.textContent = '9:00 am';
list.append(item1);

let item2 = document.createElement('li');
item2.textContent = '12:00 pm';
list.append(item2);

let item3 = document.createElement('li');
item3.textContent = '5:00 pm';
list.append(item3);