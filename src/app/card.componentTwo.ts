import { Component } from "@angular/core";

@Component({
  selector: "card-comp-two",
  template: `
    <table>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>author</th>
        <th>genre</th>
        <th>description</th>
        <th>image</th>
        <th>published</th>
        <th>publisher</th>
      </tr>
      <tr>
        <td>{{id}}</td>
        <td>{{title}}</td>
        <td>{{author}}</td>
        <td>{{genre}}</td>
        <td style="width: 100px">{{description}}</td>
        <td><img src="{{image}}" style="width: 100px; height: 100px"></td>
        <td>{{published}}</td>
        <td>{{publisher}}</td>
      </tr>
  </table>
  `,
  styles: [`table, th, td {
    border:1px solid black;
  }`]

})

export class CardTwo {
  id: number = 2;
  title: string = "I used to say.";
  author: string = "Macey Braun";
  genre: string = "Quasi";
  description: string = "I am a Duchess, she said to herself That is quite enough--I hope I shant go, at any rate he might answer questions.How am I to get rather sleepy and went to the beginning of the treat."
  image: string = "http://placeimg.com/480/640/any";
  published: string ="2017-02-01";
  publisher: string ="Quia Laudantium";
}

