"use strict";

var post = {
   id: '3',
   description: 'Just chill',
   createdAt: new Date('2020-03-15T03:28:00'),
   author: 'Полина Лелис',
   photoLink: 'https://blog.xarta.co.uk/wp-content/uploads/2017/02/Astronaut-Chilling-On-The-Moon-With-Beer-Wallpaper-1920x1200.jpg',
   hashTags: ['#world','#Exadel'],
   likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
};


const PostListModule = (function(){


var _posts = [

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
    description: 1,
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

class PostList{

  _postCollection = [];

  constructor(postCollection) {
    this._postCollection = postCollection;
  }

        static _validatePost(post){
          return ((Array.isArray(post.likes))&&
            (post.createdAt instanceof Date)&&
            (typeof post.id === 'string')&&
            (typeof post.description === 'string')&&
            (typeof post.author === 'string'));
        }

        _getPostIndexById(idElement) {
            return this._postCollection.findIndex((post) => post.id === idElement);
        }


        addPost(post){
          if (typeof post != 'object') {
              return false;
            }
          if(PostList._validatePost(post)){
              this._postCollection.push(post);
              return true;
            }
          else {
              return false;
            }
        }



        getPosts(skip, top, filterConfig) {
          let newPosts = this._postCollection.slice();
          if (typeof filterConfig.author === 'string') {
            newPosts = newPosts.filter(item => item.author === filterConfig.author);
          }
          
          if (filterConfig.createdAt instanceof Date) {
            newPosts = newPosts.filter(item => ((item.createdAt > filterConfig.createdAt - 1260601000)&&(item.createdAt < filterConfig.createdAt + 1260601000)));
          }
          if (Array.isArray(filterConfig.hashTags)) {
            let valid = true;
            for (let i of filterConfig.hashTags) {
              if (typeof i !== 'string') {
                valid = false;
                break;
              }
            }
            if (valid) {
              newPosts = newPosts.filter(item => item.hashTags.some(element => filterConfig.hashTags.includes(element)));
            }
          }
          newPosts.sort(function(a, b){
            return b.createdAt - a.createdAt; 
          })
          newPosts = newPosts.slice(skip, skip + top);
          return newPosts;
        }



        editPost(idElement, post) {
            var postIndex = this._getPostIndexById(idElement);
            if (postIndex === -1) {
              return false;
            } 
            var clone = Object.assign({}, this._postCollection[postIndex]);

            if (typeof post.description !== 'undefined') {
              clone.description = post.description;
            }
            if (typeof post.photoLink !== 'undefined') {
              clone.photoLink = post.photoLink;
            }    
            if (typeof post.hashTags !== 'undefined') {
              clone.hashTags = post.hashTags;
            }
            if (typeof post.likes !== 'undefined') {
              clone.likes = post.likes;
            }

            if (!PostList._validatePost(clone)) {
              return false;
            }
            this._postCollection[postIndex] = clone;
            return true;
        }


        removePost(idElement) {
          var postIndex = this._postCollection.findIndex((post) => post.id === idElement);
              if (postIndex === -1) {
                return false;
              }
              this._postCollection.splice(postIndex, 1);
              return true;
        }



        clear(){
          this._postCollection.splice(0, this._postCollection.length);
        }

        addAll(posts) {

          return posts.filter(item => !this.addPost(item));
        }
        


        validatePostTesting() {
          console.log("Is this post valid?");
          console.log("\n");
          console.log(PostList._validatePost(this._postCollection[0]));
          console.log("Invalid post");
          console.log(this._postCollection[0]);
          console.log("\n");  
          console.log(PostList._validatePost(this._postCollection[1]));
          console.log("valid post");
          console.log(this._postCollection[1]);
        }


        getPostIndexByIdTesting(){
          console.log("GetPost testing (with id)");
          console.log("\n");
          console.log("with valid id:");console.log(this._postCollection[this._getPostIndexById('5')]);
          console.log("\n");
          console.log("with invalid id:");
          console.log(this._postCollection[this._getPostIndexById(0)]);
          console.log("No such post with this id!");
          console.log("\n");

        }

          
        addPostTesting(){
          console.log("Add your post:");
          console.log("\n");
          console.log("with valid post:");
          console.log(this.addPost(post));
          console.log("Post added");
          console.log(post);
          console.log("\n");
          console.log("with invalid post:");
          console.log(this.addPost(0));
          console.log("Post not added");
          console.log("\n");
        }  

        editPostTesting(){
          console.log("Editing post:");
          console.log("\n");
          console.log("with valid post and ID:");
          console.log(this.editPost("2", post));
          console.log("Post edited");
          console.log("\n");
          console.log("with invalid post:");
          console.log(this.editPost("1", {description: 'Do not worry!'}));
          console.log("Post not edited");
          console.log("\n");
        }

          
        removePostTesting(){
          console.log("Removing post:");
          console.log("\n");
          console.log("with valid ID:");
          console.log(this.removePost("5"));
          console.log("Post removed");
          console.log("\n");
          console.log("with invalid ID:");
          console.log(this.removePost(100));
          console.log("Post not removed");
          console.log("\n");
          console.log("\n");
        }
          
        getPostsTesting(){
          console.log("Get your posts");
          console.log("\n");
          console.log(this.getPosts(0, 10, {author: 'Полина Лелис'}));
          console.log("\n");
          console.log("AND ");
          console.log(this.getPosts(0, 10, {author: 'Полина Лелис',
                           hashTags: ['#Exadel']}));
        }
          
        clearTesting(){
          console.log("\n");
          console.log("Clear your posts");
          this.clear();
          console.log("No posts");
        }

        addAllTesting() {
          console.log("addAllPost testing");
          console.log("\n");
          var postsToAdd = [
            {       
                     id: '21',
                     description: 150,
                     createdAt: new Date('2000-05-18T14:40:07'),
                     author: 'Kate ',
                     photoLink: 'https://blog.xarta.co.uk/wp-content/uploads/2017/02/Astronaut-Chilling-On-The-Moon-With-Beer-Wallpaper-1920x1200.jpg',
                     hashTags: ['#hashtag2', '#BSU'],
                     likes: ['Лера Конфетка']
                  },
                  {
                     id: '22',
                     description: 'Senorita ',
                     createdAt: new Date('2000-05-18T14:40:07'),
                     author: 'user12573',
                     photoLink: 'https://blog.xarta.co.uk/wp-content/uploads/2017/02/Astronaut-Chilling-On-The-Moon-With-Beer-Wallpaper-1920x1200.jpg',
                     hashTags: ['#hashtag2', '#sBSU'],
                     likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
                  },
                  {
                     id: 4,
                     description: 'side to side',
                     createdAt: new Date('2000-05-18T14:40:07'),
                     author: '0',
                     photoLink: 'https://blog.xarta.co.uk/wp-content/uploads/2017/02/Astronaut-Chilling-On-The-Moon-With-Beer-Wallpaper-1920x1200.jpg',
                     hashTags: ['#hashtag2', '#Exadel'],
                     likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
                  },

                  {
                     id: '24',
                     description: 'side to side',
                     createdAt: new Date('2000-05-18T14:40:07'),
                     author: 'run Forest run',
                     photoLink: 'https://blog.xarta.co.uk/wp-content/uploads/2017/02/Astronaut-Chilling-On-The-Moon-With-Beer-Wallpaper-1920x1200.jpg',
                     hashTags: ['#hashtag2', '#Exadel'],
                     likes: ['Лера Конфетка', 'Саша Привалов', 'Полина Филипович']
                  },
                ];
          console.log(this.addAll(postsToAdd));
        }
        

}




let Test = new PostList(_posts);

Test.validatePostTesting();
Test.getPostIndexByIdTesting();
Test.addPostTesting();
Test.editPostTesting();
Test.removePostTesting();
Test.getPostsTesting();
Test.addAllTesting();
Test.clearTesting();
})();



