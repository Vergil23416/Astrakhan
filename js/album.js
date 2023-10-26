let container = document.querySelector(`.album`);
let search = new URLSearchParams(window.location.search);
let titles = document.querySelector('title');
let i = search.get(`i`);
let card_bird = document.querySelector('.card-bird');
let invisible= `invisible`
// готово! i это нужное нам число
let album = albums[i];
if (!album) {
  container.innerHTML = `ОШИБКА`;
} else {
  titles.innerHTML = album.title

  container.innerHTML = `
	<div class="card mb-3 ">
          <div class="row">
            <div class="image-card-right">
              <img src="${album.img}" alt="" class="img-fluid rounded-start object-fit-cover">
            </div>
            
          </div>
        </div>
`
  if (album.red_book) {
    invisible=``
  }
  card_bird.innerHTML = `
  <div class="card mb-3">
          <div class="card-body">
            <div class="row row-heig">
              <h5 class="card-title col-6">${album.title}</h5>
              <div class="alert alert-danger col-6 ${invisible}" role="alert">
                В красной книге
              </div>
            </div>
            <hr>

            <p class="card-text">Отряд: ${album.squad}
            </p>
            <p class="card-text">Семейство: ${album.family}
            </p>
            <p class="card-text">Род: ${album.genus}
            </p>
            <p class="card-text">Более подробная информация: <a href="${album.wiki_url}" target="_blank">${album.title}</a>
            </p>
            <p class="card-text"><small class="text-muted">${album.filtr}</small></p>

          </div>
        </div>
  
  
  
  
  
  `

}



