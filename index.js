function getFirstSelector(selector) {
 return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const ranks= document.querySelectorAll('.ranked-list')
  for (let i = 0; i < ranks.length; i++) {
    let children = ranks[i].children

      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }
  }

function deepestChild() {
  let div = document.getElementById('grand-node')
  let div1 = div.children[0]
  let div2 = div1.children[0]
  let div3 = div2.children[0]
  let div4 = div3.children[0]
  return div4

}
