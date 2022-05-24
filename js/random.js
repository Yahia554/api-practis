// load random data
const loadRandomData = () => {
    fetch('https://randomuser.me/api/?exc=login')
        .then(res => res.json())
        .then(data => displyRamdomData(data.results[0]))
}
// call website random data
loadRandomData()
// display random data
const displyRamdomData = random => {
    // html daynamic
    const divContainer = document.getElementById('random')
    console.log(random.location.timezone)
    const div = document.createElement('div')
    div.innerHTML = `<h4>Name: ${random.name.title} ${random.name.first} ${random.name.last}</h4>
    <div><img src="${random.picture.thumbnail}" alt="" srcset=""></div>
     <p>Sity: ${random.location.city} </p>
     <p>State: ${random.location.state}</p>
     <p>Country:  ${random.location.country}<p/>
     <p>Postcode: ${random.location.postcode}<p>
     <p>Timexone${random.location.timezone.offset}</p>
     `;
    divContainer.appendChild(div)
}
// task 6 complite random data show and img,location proprty then name 