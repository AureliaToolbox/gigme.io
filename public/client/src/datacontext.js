import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

var client = new HttpClient()
  .configure(x => {
    x.withHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
  });

class DataContext {
  getNewsItems(){
    return client.get('/news_items.json')
  }
  likeCard(card){
    return client.createRequest('/news_items/like.json')
      .asPost()
      .withHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      .withHeader('Content-Type', 'application/json')
      .withContent(card)
      .send();
  }
}
export {
  DataContext
}
