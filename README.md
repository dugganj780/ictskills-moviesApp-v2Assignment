# Assignment - ReactJS app.

Name: James Duggan

## Overview.

...... State the app concept and objectives. If it's the Movies Fan app extension, only state the additional objectives .........

Add the usability to see cast of a movie
Add function to see actor data
Add authentication so users must login to use functions such as favourites


...... A bullet-point list of user features. If it's the Movies Fan app extension, only list new/modified features...... 
 
 + Cast Item
 + Cast List
 + Cast Page
 + Actor Profile
 + Hard coded authentication
 + Login Page
 + Logout Page

## Setup requirements.

...... A brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

Once cloned, a number of dependencies needed to be installed to run the app locally, including Nodejs. Luckily, all that needed to be done was to run npm install and everything in package.json was installed.

The dependencies required were:

React
Material UI
Storybook

## API Data Model.

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

getCast

https://api.themoviedb.org/3/movie/181808/credits?api_key=c14b01a1ea5d798793126fccaa52af7d&language=en-US

(Json produced is quite long so I have included the link instead, this contains my API key, which is bad practice)


getCastImages

{
"id": 2,
"profiles": [
{
"aspect_ratio": 0.667,
"height": 1919,
"iso_639_1": null,
"file_path": "/zMQ93JTLW8KxusKhOlHFZhih3YQ.jpg",
"vote_average": 5.454,
"vote_count": 3,
"width": 1280
},
{
"aspect_ratio": 0.667,
"height": 2178,
"iso_639_1": null,
"file_path": "/9Wws35pCsT0KoZpiV4Gk5nbn9ZD.jpg",
"vote_average": 5.392,
"vote_count": 8,
"width": 1452
}
]
}


getActor

{
"adult": false,
"also_known_as": [
"Mark Hamil",
"Mark Richard Hamill",
"Марк Хэмилл",
"Μαρκ Χάμιλ",
"マーク・ハミル",
"마크 해밀",
"Patrick Williams",
"William M. Patrick"
],
"biography": "Mark Richard Hamill (born September 25, 1951) is an American actor, voice artist, producer, director, and writer. Hamill is best known for his role as Luke Skywalker in the original Star Wars trilogy and also well known for voice-acting characters such as the Joker in various animated series, animated films and video games, beginning with Batman: The Animated Series, the Skeleton king in Super Robot Monkey Team Hyperforce Go!, Fire Lord Ozai in Avatar: The Last Airbender, Master Eraqus in Kingdom Hearts: Birth by Sleep, Skips in Regular Show, and Senator Stampington on Metalocalypse.",
"birthday": "1951-09-25",
"deathday": null,
"gender": 2,
"homepage": null,
"id": 2,
"imdb_id": "nm0000434",
"known_for_department": "Acting",
"name": "Mark Hamill",
"place_of_birth": "Concord, California, USA",
"popularity": 7.079,
"profile_path": "/zMQ93JTLW8KxusKhOlHFZhih3YQ.jpg"
}

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![components](https://user-images.githubusercontent.com/59389023/130320226-a30eafc9-94b6-4237-a2ff-7568db32132c.PNG)


![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![01 Updated Homepage](https://user-images.githubusercontent.com/59389023/130320560-b595c0e6-508f-4f94-ae96-227cc71cae80.PNG)
> Homepage has been updated. The user can now browse through additional pages of movies using the arrows at the bottom of the page. This is also true for the Upcoming Movies page. Additionally, users must now be logged in for the ability to add to favourites or must watch movies. You can also see the additional options in the header menu.

![02 Login Page](https://user-images.githubusercontent.com/59389023/130320634-7b911757-5cd6-44a8-a8ac-c27c31c6aa46.PNG)
> This is the new Login page. Two user accounts are hard coded with an email and password.

![03 Must Watch Movies](https://user-images.githubusercontent.com/59389023/130320669-007b9770-6759-4dcf-b150-34cecb7788d4.PNG)
> A Must Watch Movies page has been added, this works the same way as the favourites page

![04 Updated Movie Page](https://user-images.githubusercontent.com/59389023/130320717-5151a2c0-e04e-4bd2-bbe2-7cf089c7e356.PNG)
> The movie page now has a link to a Cast Page

![05 Cast Page](https://user-images.githubusercontent.com/59389023/130320747-8066b9f5-a2e3-40ee-b53d-e6d916e4b916.PNG)
> The new Cast Page pulls the cast of the selected movie using an API call.

![06 Actor Page](https://user-images.githubusercontent.com/59389023/130320772-5701e210-b221-4b47-a7d7-e74122c2fa1d.PNG)
> The Actor Page uses two API calls. One to get the biography and date of birth of the actor, and the other to get images of the actor.

![07 Logout Page](https://user-images.githubusercontent.com/59389023/130320824-aa7872a4-ba2c-49db-bb0b-a5efb49a873b.PNG)
> The screen that displays when the user logs out

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /actor/:id - displays the Actor Profile Page (Public)
+ GET /movies/:id/castandcrew - displays Cast Page (Public)
+ GET /movies/favorites - displays Favourites Page (Protected)
+ GET /movies/mustwatch - displays Must Watch Movies Page (Protected)
+ GET /login - displays Login Page (Public)
+ GET /logout - displays Logout Page (Public)  

+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## Independent learning (If relevant).

The majority of technology and techniques that I used for the project were covered in the lectures. However, I did get some ideas on handling the authntication and design of the login form from the video below:

https://www.youtube.com/watch?v=91qEdc6dSUs&t=1260s

Thank you for taking the time to view my project.


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png
