let arr = [
    { name: 'Fast and Furious', desc: 'Thriller movies related to cars', genere: 'Action, Drama, Thriller' },
    { name: 'Kung fu panda 1', desc: 'Comedy movies for childrens', genere: 'Animated, Comedy' },
    { name: 'Kung fu panda 2', desc: 'Comedy movies for childrens', genere: 'Animated, Comedy' },
    { name: 'Kung fu panda 3', desc: 'Comedy movies for childrens', genere: 'Animated, Comedy' },
    { name: 'Golmal returns', desc: 'Comedy movies for adults', genere: 'Action, Comedy, Scifi' },
    { name: 'Golmal', desc: 'Comedy movies for adults', genere: 'Action, Comedy, Scifi' },
    { name: 'Transformers 1', desc: 'All Rounders', genere: 'Action, Adventure, Scifi' },
    { name: 'Transformers 2', desc: 'All Rounders', genere: 'Action, Adventure, Scifi' },
    { name: 'Transformers 3', desc: 'All Rounders', genere: 'Action, Adventure, Scifi' }
]
let newMovies = [...arr, ...arr];

const div = document.querySelector(".card")

let move = (myMovie) => {

    div.innerHTML = ""
    myMovie.forEach((move) => {
        div.innerHTML += ` 
             <div>
             <img src ="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
             <h3>${move.name}</h3>
             <p>${move.desc}</p>
             <h6>${move.genere}</h6>
             </div>
          `
    })
}


move(newMovies);

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    name1()
})

document.getElementById("input").addEventListener("keyup", name1)

function name1() {
    
    const val = document.getElementById("input").value.toLowerCase();
    let filterArr = newMovies.filter((movie) => {
        if (movie.name.toLowerCase().indexOf(val) != -1) {
            return true;
        }
        if (movie.desc.toLowerCase().indexOf(val) != -1) {
            return true;
        }
        if (movie.genere.toLowerCase().indexOf(val) != -1) {
            return true;
        }
        return false
    })
    move(filterArr);
}