
let container = document.body
let firstdiv = document.createElement('div')
firstdiv.setAttribute("style","width:100%;height:auto;")
firstdiv.setAttribute("class","container")

let seconddiv = document.createElement("div")
seconddiv.setAttribute("class","container")
var h1 = document.createElement('h1')
h1.innerHTML = "THE PERTINENT TIMES"
h1.style.textAlign="center";
h1.style.fontFamily="Times New Roman"
firstdiv.appendChild(h1);
container.appendChild(firstdiv)
container.appendChild(seconddiv)

var nav_bar = document.createElement('nav')
nav_bar.setAttribute("class","navbar navbar-expand-lg navbar-light bg-light")
nav_bar. setAttribute("style","border-top:1px solid black;border-bottom:1px solid black;")

let navbar_button = document.createElement("button")
navbar_button.setAttribute("class","nav_toggler")
navbar_button.setAttribute("type","button")
navbar_button.setAttribute("data-toggle","collapse")
navbar_button.setAttribute("data-target","#navbar")
navbar_button.setAttribute("aria-controls","navbar")
nav_bar.appendChild(navbar_button)

let navbar_button_span1=document.createElement('span')
navbar_button_span1.setAttribute("class","navbar-toggle-icon")
navbar_button.appendChild(navbar_button_span1)


let nav_bar_div = document.createElement('div')
nav_bar_div.setAttribute("class","collapse navbar-collapse justify-content-center")
nav_bar_div.setAttribute("id","navbar")

let nav_ul = document.createElement('ul')
nav_ul.setAttribute("class","navbar-nav")

let li1 = document.createElement('li')
li1.setAttribute("class","nav-item")
var a1 = document.createElement('a')
a1.setAttribute("class","nav-link btn")
a1.innerHTML = "HOME"
a1.setAttribute("id","home")
a1.addEventListener("click", function () {
  displaydata("home")
})
a1.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li1.appendChild(a1)
nav_ul.appendChild(li1)

let li2 = document.createElement('li')
li2.setAttribute("class","nav-item")
var a2 = document.createElement('a')
a2.setAttribute("class","nav-link btn")
a2.innerHTML = "WORLD"
a2.setAttribute("id","world")
a2.addEventListener("click", function () {
  displaydata("world")
})
a2.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li2.appendChild(a2)
nav_ul.appendChild(li2)



let li3 = document.createElement('li')
li3.setAttribute("class","nav-item")
var a3 = document.createElement('a')
a3.setAttribute("class","nav-link btn")
a3.innerHTML = "POLITICS"
a3.setAttribute("id","politics")
a3.addEventListener("click", function () {
  displaydata("politics")
})
a3.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li3.appendChild(a3)
nav_ul.appendChild(li3)

let li4 = document.createElement('li')
li4.setAttribute("class","nav-item")
var a4 = document.createElement('a')
a4.setAttribute("class","nav-link btn")
a4.innerHTML = "MAGAZINE"
a4.setAttribute("id","magazine")
a4.addEventListener("click", function () {
  displaydata("magazine")
})
a4.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li4.appendChild(a4)
nav_ul.appendChild(li4)

let li5 = document.createElement('li')
li5.setAttribute("class","nav-item")
var a5 = document.createElement('a')
a5.setAttribute("class","nav-link btn")
a5.innerHTML = "TECHNOLOGY"
a5.setAttribute("id","technology")
a5.addEventListener("click", function () {
  displaydata("technology")
})
a5.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li5.appendChild(a5)
nav_ul.appendChild(li5)

let li6 = document.createElement('li')
li6.setAttribute("class","nav-item")
var a6 = document.createElement('a')
a6.setAttribute("class","nav-link btn")
a6.innerHTML = "SCIENCE"
a6.setAttribute("id","science")
a6.addEventListener("click", function () {
  displaydata("science")
})
a6.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li6.appendChild(a6)
nav_ul.appendChild(li6)

let li7 = document.createElement('li')
li7.setAttribute("class","nav-item")
var a7 = document.createElement('a')
a7.setAttribute("class","nav-link btn")
a7.innerHTML = "HEALTH"
a7.setAttribute("id","health")
a7.addEventListener("click", function () {
  displaydata("health")
})
a7.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li7.appendChild(a7)
nav_ul.appendChild(li7)

let li8 = document.createElement('li')
li8.setAttribute("class","nav-item")
var a8 = document.createElement('a')
a8.setAttribute("class","nav-link btn")
a8.innerHTML = "SPORTS"
a8.setAttribute("id","sports")
a8.addEventListener("click", function () {
  displaydata("sports")
})
a8.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li8.appendChild(a8)
nav_ul.appendChild(li8)

let li9 = document.createElement('li')
li9.setAttribute("class","nav-item")
var a9 = document.createElement('a')
a9.setAttribute("class","nav-link btn")
a9.innerHTML = "ARTS"
a9.setAttribute("id","arts")
a9.addEventListener("click", function () {
  displaydata("arts")
})
a9.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li9.appendChild(a9)
nav_ul.appendChild(li9)

let li10 = document.createElement('li')
li10.setAttribute("class","nav-item")
var a10 = document.createElement('a')
a10.setAttribute("class","nav-link btn")
a10.innerHTML = "FASHION"
a10.setAttribute("id","fashion")
a10.addEventListener("click", function () {
  displaydata("fashion")
})
a10.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li10.appendChild(a10)
nav_ul.appendChild(li10)

let li11 = document.createElement('li')
li11.setAttribute("class","nav-item")
var a11 = document.createElement('a')
a11.setAttribute("class","nav-link btn")
a11.innerHTML = "FOOD"
a11.setAttribute("id","food")
a11.addEventListener("click", function () {
  displaydata("food")
})
a11.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li11.appendChild(a11)
nav_ul.appendChild(li11)

let li12 = document.createElement('li')
li12.setAttribute("class","nav-item")
var a12 = document.createElement('a')
a12.setAttribute("class","nav-link btn")
a12.innerHTML = "TRAVEL"
a12.setAttribute("id","travel")
a12.addEventListener("click", function () {
  displaydata("travel")
})
a12.setAttribute("style","display:inline-block;color:black;text-align:center;text-decoration:none;padding:14px;")
li12.appendChild(a12)
nav_ul.appendChild(li12)

nav_bar_div.appendChild(nav_ul)
nav_bar.appendChild(nav_bar_div)
firstdiv.appendChild(nav_bar)

let api_key = 'yydXBnrEe47mbvP2rylkBG7ZtjVHOTC0'

async function getdata(url) {
  let data = await fetch(url)
  let res = await data.json()
  return res
}

async function displaydata(section) {
  seconddiv.innerHTML = ""
  let data =  await getdata('https://api.nytimes.com/svc/topstories/v2/'+section+'.json?api-key=yydXBnrEe47mbvP2rylkBG7ZtjVHOTC0')
  result = data['results']
  console.log(result);
  for(i of result){
    var container1 = document.createElement('div')
    container1.setAttribute("class","container")
    container1.setAttribute("style","margin-top:30px;width:100%")
    var row =document.createElement('div')
    row.setAttribute("class","row")

    var card = document.createElement('div')
    card.setAttribute("class","card")
    card.setAttribute("style","width:100%;")

    var left = document.createElement('div')
    left.setAttribute("class","col-md-8")

    var sec_card = document.createElement('div')
    sec_card.setAttribute("class","sectioncard")
    sec_card.innerHTML=section.toUpperCase()

    var title_card = document.createElement('div')
    title_card.setAttribute("class","titlecard")
    title_card.innerHTML = i["title"]

    var date_card = document.createElement('div')
    date_card.setAttribute("class","datecard")
    date_card.innerHTML = i["published_date"]

    var abstract_card = document.createElement('div')
    abstract_card.setAttribute("class","abstractcard")
    abstract_card.innerHTML = i["abstract"]

    var continuereading = document.createElement('a')
    continuereading.setAttribute("class","continuereading")
    continuereading.setAttribute("href",`${i['url']}`)
    continuereading.innerHTML = "continuereading"

    left.append(sec_card,title_card,date_card,abstract_card,continuereading)
    var right = document.createElement('div')
    right.setAttribute("class","col-md-11")
    right.setAttribute("style","text-align:right;")
    var thumb_image = document.createElement('img')
    thumb_image.setAttribute("class","img-thumbnail")
    thumb_image.setAttribute("src",`${i["multimedia"][0]["url"]}`)
    thumb_image.setAttribute("style","width:300px;height:150px;")

    right.append(thumb_image)

    var innerrow = document.createElement('div')
    innerrow.setAttribute("class","row-card-body")
    innerrow.append(left,right)
    card.append(innerrow)
    row.append(card)
    seconddiv.append(row)

    container.append(seconddiv)




  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementById('home').click()


})
