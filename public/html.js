function makeHtml(title, stylesheetList, scriptList, content, user){
    return html = `
    <!doctype html>
    <html lang="ko">
      <head>
        ${title}
        <meta charset ="utf-8">
        <meta name="viewport" content="width=device-width, shrink-to-fit=no">
        
        ${stylesheetList}
        </head>
      <body>
        <header class="navbar navbar-expand-lg navbar-light bg-light row justify-content-center">
          <a href="/" class ="navbar-brand badge badge-light col"><h4>Project : Gardener</h4></a>
          <nav class="col-10">
            <ul class="navbar-nav">
              <li class="nav-item input-group">
                <input type="text" class="form-control" placeholder="Search anything~!">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">search</button>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">World</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Garden</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">${user.name}</a>
              </li>
            </ul>
          </nav>
        </header>
    
        <section class="carousel slide" data-ride="carousel">
          ${content}
        </section>
    
        <footer class="fixed-bottom badge badge-light">
          team Phoenix's Project : Gardener
        </footer>

        ${scriptList}
      </body>
    </html>
    `;
}






<title>Project : Gardener</title>
<!-- Bootsrap CSS -->
<link rel="stylesheet" 
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

<!-- for Bootstrap js -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" 
integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" 
integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" 
integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    