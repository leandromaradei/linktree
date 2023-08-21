function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag image
  const img = document.querySelector("#profile img")

  // substituir a imagen
  if (html.classList.contains("light")) {
    // se estiver light mode, adicionar a imagem 'light'
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Mayk de óculos escuros")
  } else {
    // se não estiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do Mayk")
  }
}
