let container = document.querySelector(`.albums`);
let filtr_form = document.querySelector(`.form-select`);
let input_bird = document.querySelector(`.form-control`);
for (let i = 0; i < albums.length; i++) {
  let album = albums[i];
  container.innerHTML += `
	<div class="col ">
        <a href="album.html?i=${i}" class="text-decoration-none">
          <div class="card card-kk">
            <img src="${album.img}" alt="" class="card-image-top ">
            <div class="div card-body card-text-body">
              <p class="card-text">${album.title}</p>
            </div>
          </div>
        </a>
      </div>
	`
}
input_bird.addEventListener(`input`, function () {
  let search_bird = input_bird.value.toLowerCase();
  container.innerHTML = ``;
  for (let i = 0; i < albums.length; i++) {
    let album = albums[i];
    let title = album.title.toLowerCase();
    if (title.includes(search_bird)) {


      container.innerHTML += `
    <div class="col ">
          <a href="album.html?i=${i}" class="text-decoration-none">
            <div class="card card-kk">
              <img src="${album.img}" alt="" class="card-image-top ">
              <div class="div card-body card-text-body">
                <p class="card-text">${album.title}</p>
              </div>
            </div>
          </a>
        </div>
    `
    }
  }

});




filtr_form.addEventListener(`input`, function () {
  option = filtr_form.value;
  if (option == 'Все') {
    container.innerHTML = ''
    for (let i = 0; i < albums.length; i++) {
      let album = albums[i];
      container.innerHTML += `
	      <div class="col ">
        <a href="album.html?i=${i}" class="text-decoration-none">
          <div class="card card-kk">
            <img src="${album.img}" alt="" class="card-image-top ">
            <div class="div card-body card-text-body">
              <p class="card-text">${album.title}</p>
            </div>
          </div>
        </a>
           </div>
	      `
    }
  } else if (option == 'Перелетный' || option == 'Зимующий') {
    container.innerHTML = ''
    for (let i = 0; i < albums.length; i++) {
      let album = albums[i];
      if (album.filtr == option) {
        container.innerHTML += `
	      <div class="col ">
        <a href="album.html?i=${i}" class="text-decoration-none">
          <div class="card card-kk">
            <img src="${album.img}" alt="" class="card-image-top ">
            <div class="div card-body card-text-body">
              <p class="card-text">${album.title}</p>
            </div>
          </div>
        </a>
           </div>
	      `
      }
    }
  } else if (option == 'Красная книга') {
    container.innerHTML = '';
    for (let i = 0; i < albums.length; i++) {
      let album = albums[i];
      if (album.red_book) {
        container.innerHTML += `
	      <div class="col ">
        <a href="album.html?i=${i}" class="text-decoration-none">
          <div class="card card-kk">
            <img src="${album.img}" alt="" class="card-image-top ">
            <div class="div card-body card-text-body">
              <p class="card-text">${album.title}</p>
            </div>
          </div>
        </a>
           </div>
	      `
      }
    }
  }
});