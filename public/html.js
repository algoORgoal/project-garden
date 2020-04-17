module.exports = {
  init : function HTML(){
    this.title = "Project : Gardener";
    this.metaList = [`charset = "utf-8"`,
                    `name = "viewport" content="width=device-width, shrink-to-fit=no"`
                  ];
    this.stylesheestList = [`href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"`
    ];
    this.scriptList = [`src="https://code.jquery.com/jquery-3.4.1.slim.min.js" 
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"`,
      `src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" 
      crossorigin="anonymous"`,
      `src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" 
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"`
    ];

    this.getTitle = ()=>{
      return `<title>${this.title}</title>`;
    }
    this.getMetas = ()=>{
      let metas = ``;
      for(let i = 0; i< this.metaList.length ; i++)
        metas += `<meta ${this.metaList[i]}>`;
      return metas;
    }
    this.getStylesheets = ()=>{
      let stylesheets = ``;
      for(let i = 0; i< this.stylesheestList.length; i++)
        stylesheets += `<link rel="stylesheet" ${this.stylesheestList[i]}/>`;
      return stylesheets;
    }
    // need to rebuild
    this.getHeader = ()=>{
      return `
      <header class="navbar navbar-expand-lg navbar-light bg-light row justify-content-center">
        <a href="/" class="navbar-brand badge badge-light col">
          <h4>Project : Gardener</h4>
        </a>
        <nav class="col-10">
          <ul class="navbar-nav">
            <li class="nav-item input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search anything~!"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  search
                </button>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">World</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Garden</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">guest</a>
            </li>
          </ul>
        </nav>
      </header>
      `;
    }
    this.getContent =()=>{
      return `
        <section class="min-vw-100 min-vh-80">
          ${this.content}

          ${this.metaList[0]}
        </section>
      `;
    }
    this.getFooter = ()=>{
      return `
        <footer class="fixed-bottom badge badge-light">
          team Phoenix's Project : Gardener
        </footer>
      `;
    }
    this.getScripts = ()=>{
      let scripts = ``;
      for(let i = 0; this.scriptList.length; i++)
        scripts += `<script ${this.scriptList[i]} />`;
      return scripts;
    } 
    this.getHtml = ()=>{
      return `
        <!doctype html>
        <html lang="ko">
          <head>
            ${this.getTitle()}
            ${this.getMetas()}
            ${this.getStylesheets()}
          </head>
          <body>
            ${this.getHeader()}
            ${this.getContent()}
            ${this.getFooter()}
            ${this.getScripts()}
          </body>
        </html>
      `;
    };
  }
};