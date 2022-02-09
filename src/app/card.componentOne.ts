import { Component } from "@angular/core";

@Component({
  selector: "card-comp-one",
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
        <td>{{id}}</td>
        <td>{{title}}</td>
        <td>{{author}}</td>
        <td>{{genre}}</td>
        <td style="width: 100px">{{description}}</td>
        <td><img src="{{image}}" style="width: 100px; height: 100px"></td>
        <td>{{published}}</td>
        <td>{{publisher}}</td>
    </table>
  `,
  styles: [`table, th, td {
    border:1px solid black;
  }`]

})

export class CardOne {
  id: number =  1;
  title: string = "In a little.";
  author: string = "Wyatt Connelly";
  genre: string = "Tempore";
  description: string = "Hatter, it woke up again as quickly as she went back to finish his story. CHAPTER IV. The Rabbit started violently, dropped the white kid gloves while she was considering in her head, and she jumped.";
  image: string = "http://placeimg.com/480/640/any";
  published: string = "2013-06-24";
  publisher: string = "Doloremque Amet";
}

