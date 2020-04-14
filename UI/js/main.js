"use strict";

var posts = [

 {
   id: '1',
   description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
   createdAt: new Date('2019-03-17T23:00:00'),
   //author: 'Иванов Иван',
   photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
   hashTags: ['#world', '#happiness', '#love', '#BSU'],
   likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },


  {

  id: '2',
  description: 'Всё будет ок',
  createdAt: new Date('2020-03-18T23:00:00'),
  author: 'Полина Лелис',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#happiness', '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '3',
  description: 'Не ходите в универ',
  createdAt: new Date('2020-03-18T16:00:00'),
  author: 'Полина Лелис',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#happiness','#Exadel' ,'#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '4',
  description: 'Вы должны всё знать!',
  createdAt: new Date('2020-11-18T09:00:00'),
  author: 'Полина Лелис',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world','#Exadel', '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },


  {

  id: '5',
  description: 'Музыка и танцы',
  createdAt: new Date('2020-03-19T23:00:00'),
  author: 'Кристина Бэнд',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#happiness','#Exadel', '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },


  {

  id: '6',
  description: 'Посмотрите на мое новые туфли и сумочку!',
  createdAt: new Date('2010-03-14T00:00:00'),
  author: 'Принцесса 007',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#happiness', '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },


  {

  id: '7',
  description: '57465256324163',
  createdAt: new Date('2020-03-18T23:00:00'),
  author: 'Полина Лелис',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world','#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },


  {

  id: '8',
  description: 'Курлык',
  createdAt: new Date('2020-03-13T17:00:00'),
  author: 'Голудь Генадий',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#happiness','#love'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },


  {

  id: '9',
  description: 'Будьте здоровы!',
  createdAt: new Date('2005-01-13T08:00:00'),
  author: 'Полина Лелис',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world','#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '10',
  description: 'Приезжайте к нам поснавать Хюгге',
  createdAt: new Date('2020-03-18T23:00:00'),
  author: 'Дания',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#happiness','#Exadel', '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },


  {

  id: '11',
  description: 'Только сегодня скидки на хлеб и ягоды!',
  createdAt: new Date('2050-03-18T23:00:00'),
  author: 'Евроопт',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#Exadel' ,'#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '12',
  description: 'Видели новую соседку? Совсем не умеет детей воспитывать..',
  createdAt: new Date('2020-03-21T23:00:00'),
  author: 'Бабушка у подъезда',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '13',
  description: 'Ты в танцах!!!!',
  createdAt: new Date('2020-10-21T20:00:00'),
  author: 'Полина Лелис',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world',  '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '14',
  description: 'Более 76 тыс. человек во всем мире ',
  createdAt: new Date('2020-03-20T23:00:00'),
  author: 'Полина Лелис',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#happiness', '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '15',
  description: 'Хочу сверлить и днём, и ночью',
  createdAt: new Date('2020-03-20T01:00:00'),
  author: 'Соседка сверху',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#happiness','#Exadel', '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '16',
  description: 'Иванов',
  createdAt: new Date('2017-03-18T23:00:00'),
  author: 'Полина Лелис',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#happiness','#Exadel', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '17',
  description: 'Не забывайте надевать тёплые вещи!',
  createdAt: new Date('2020-03-19T14:00:00'),
  author: 'Весна',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#happiness', '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '18',
  description: 'Хочу быть Петровой',
  createdAt: new Date('2020-06-19T03:00:00'),
  author: 'Иванова Мария',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world',  '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '19',
  description: 'спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
  createdAt: new Date('2030-03-14T22:00:00'),
  author: 'Полина Лелис',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world', '#happiness', '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

  {

  id: '20',
  description: 'Любите себя сейчас',
  createdAt: new Date('2001-03-15T03:00:00'),
  author: 'Полина Лелис',
  photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
  hashTags: ['#world',  '#love', '#BSU'],
  likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
  },

];





(function() {
  "use strict";
  var post = {
   id: '3',
   description: 'Just chill',
   createdAt: new Date('2020-03-15T03:28:00'),
   author: 'Полина Лелис',
   photoLink: 'https://blog.xarta.co.uk/wp-content/uploads/2017/02/Astronaut-Chilling-On-The-Moon-With-Beer-Wallpaper-1920x1200.jpg',
   hashTags: ['#world','#Exadel'],
   likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
} 


  function getPostIndexById(idElement) {
    for(var i = 0; i < posts.length; i++){
      if(idElement == posts[i].id){
        console.log (posts[i]);
          return i;
      }
    }
  }


  function validatePost(post){
    if ((typeof post.id !== 'string')||(typeof post.description !== 'string')||(typeof post.createdAt !== 'object')
      ||(typeof post.author !== 'string')||(typeof post.likes !== 'object')) {
          console.log("Invalid post");
          return false;
    }
    console.log("Valid post");
    return true;
  }


  function addPost(post){
     if(validatePost(post) == true){
        posts.push(post);
        console.log ("Post added");
        return true;
     }
     else {
      console.log ("Post not added");
      return false;
    }
  }

   
  

  function getPosts(skip, top, filterConfig) {
    let newposts = posts;

    if (typeof filterConfig.createdAt === 'object') {
      newposts = newposts.filter(item => item.createdAt === filterConfig.createdAt);
    }
    
    if (typeof filterConfig.author === 'string') {
      newposts = posts.filter(item => item.author === filterConfig.author);
    }

    if (typeof filterConfig.hashTags === 'object') {
          var valid = true;
      for (let i of filterConfig.hashTags) {
        if (typeof i !== 'string') {
          valid = false;
          break;
        }
      }
      if (valid === true) {
         newposts = newposts.filter(function(item){
          var answer = true;
          for (let i of filterConfig.hashTags) {
            if (item.hashTags.includes(i) === false) {
              answer = false;
              break;
            }
          }
          return answer;
        });
      }
    }

    newposts.sort(function(firstPost, secondPost){
      return secondPost.createdAt - firstPost.createdAt; 
    })

    newposts = newposts.slice(skip, skip + top);


    for(var i = 0; i < newposts.length; i ++){
      console.log(newposts[i]);
    }

    return newposts;
  }



  function editPost(idElement, post) {
      var postId = getPostIndexById(idElement);

      if (validatePost(posts[postId]) !== true) {
        console.log("Invalid post");
        return false;
      }

      if (typeof post.description === 'string') {
        posts[postId].description = post.description;
        console.log("description changed in post");
      }
      else if (typeof post.description !== 'undefined') {
        console.log("Invalid post edition! (description)");
        return false;
      }

      if (typeof post.photoLink === 'string') {
        posts[postId].photoLink = post.photoLink;
        console.log("photolink changed in post");
      }
      else if (typeof post.photoLink !== 'undefined') {
        console.log("Invalid post edition! (photolink)");
        return false;
      }
      if (typeof post.hashTags === 'object') {
      posts[postId].hashTags = post.hashTags;
      }

      else if (typeof post.hashTags !== 'undefined') {
        console.log("Invalid post edition! (hashTags)");
        return false;
      }

      if (typeof post.likes === 'object') {
        posts[postId].likes = post.likes;
      }
      else if (typeof post.likes !== 'undefined') {
        console.log("Invalid post edition! (likes)");
        return false;
      }


      return true;
    }

    function removePost(idElement) {
    for (var i = 0; i < posts.length; i++) {
      if (idElement === posts[i].id) {
        console.log("Post deleted");
        console.log(posts[i]);
        posts.splice(i, 1);
        return true;
      }
    }
    console.log("No such post");
    return false;
  }



  function editPost(idElement, post){
      if(validatePost(post) == true){
        for (var i = 0; i < posts.length; i++) {
          if(idElement == posts[i].id){
             posts[i].photoLink = post.photolink;
             console.log(posts[i]);
          }
        }

      }
  }


  console.log("Is this post valid?");
  console.log("\n");
  validatePost(posts[0]);
  console.log(posts[0]);
  console.log("\n");
  validatePost(posts[1]);
  console.log(posts[1]);
  console.log("\n");

  console.log("GetPost testing (with id)");
  console.log("\n");
  console.log("with valid id:");
  getPostIndexById('5');
  console.log("\n");
  console.log("with invalid id:");
  getPostIndexById(0);
  console.log("No such post with this id!");
  console.log("\n");

  console.log("Add your post:");
  console.log("\n");
  console.log("with valid post:");
  addPost(post);
  console.log(post);
  console.log("\n");
  console.log("with invalid post:");
  addPost(0);
  console.log("\n");

  console.log("Editing post:");
  console.log("\n");
  console.log("with valid post and ID:");
  editPost("1", post);
  console.log("\n");
  console.log("with invalid post:");
  editPost("1", {description: 'Do not worry!'});
  console.log("\n");

  console.log("Removing post:");
  console.log("\n");
  console.log("with valid ID:");
  removePost("5");
  console.log("\n");
  console.log("with invalid ID:");
  removePost(100);
  console.log("\n");
  console.log("\n");

  console.log("Get your posts");
  console.log("\n");
  getPosts(0, 10, {author: 'Полина Лелис'});
  console.log("\n");
  console.log("AND ");
  getPosts(0, 10, {author: 'Полина Лелис',
                   hashTags: ['#Exadel', '#love']});

}());