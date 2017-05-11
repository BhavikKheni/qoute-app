import * as quote from '../controllers/quote';
function index(req, res, next) {
  res.render('index', { title: 'Demo' });
}
 
export default function (app) {
 app.post("/create-quote", quote.create);
  app.post("/quote-list", quote.list);
  // index page
  app.get('*', index);
};
