/*function appendEle(data) {
    document.querySelector('.name').innerHTML = data.name.first;
    document.querySelector('img').src = data.picture.large;
    document.querySelector('.age').innerHTML = data.dob.age;
    document.querySelector('.gender').innerHTML = data.gender;
    document.querySelector('.city').innerHTML = data.location.city;

}*/

function templete(data) {
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    var context = {
        age: data.dob.age,
        name: data.name.first,
        gender: data.gender,
        city: data.location.city,
        image: data.picture.large
    };
    var html = template(context);
    var holder = document.createElement('div')
    holder.setAttribute('class', 'user')
    holder.innerHTML = html;
    document.querySelector('.results').appendChild(holder)
}
async function getUser() {
    var res = await fetch('https://randomuser.me/api/')
    var data = await res.json()
    templete(data.results[0])
}
getUser();




document.querySelector('button').addEventListener('click', () => {
    getUser()
})