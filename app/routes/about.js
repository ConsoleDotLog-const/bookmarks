import Route from "@ember/routing/route";

let bookmarks = [
  {
    id: 1,
    title: "Microsoft",
    link: "https://www.microsoft.com/",
    about: "intro about Microsoft"
  },
  {
    id: 2,
    title: "Wikipedia",
    link: "https://en.wikipedia.org/wiki/Main_Page",
    about: "The Free Encyclopedia"
  },
  {
    id: 3,
    title: "Google",
    link: "https://www.google.com",
    about: null
  }
];



export default class AboutRoute extends Route {
    model (){
        return bookmarks
    }
}
