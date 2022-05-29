const plyerSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchPlyer(data.player[0]))
}

const searchPlyer = players => {
    console.log(players)
    const divContianer = document.getElementById('search-result');
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `   
    <div class="card h-100">
         <img src="${players.strCutout}" class="card-img-top" alt="...">
     <div class="card-body">
            <h5 class="card-title">${players.strBirthLocation}</h5>
          <p class="card-text">${players.strDescriptionEN.slice(0, 200)}</p>
     </div>
  </div>`;
    divContianer.appendChild(div);
}