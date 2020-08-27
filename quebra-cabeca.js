function orderPieces(numPieces, pieces) {
  const leftValueMap = {}

  // Cria map de valores da esquerda
  for (let i = 0; i < numPieces; i++) {
    const piece = pieces[i].split(' ')
    leftValueMap[piece[0]] = piece
  }

  let result = ''
  let currentPiece = 0
  // Montar quebra cabeças
  for (let i = 0; i < numPieces; i++) {
    const piece = leftValueMap[currentPiece]
    result += piece[1] // adiciona letra
    currentPiece = piece[piece.length - 1]
  }

  return result
}



let input = [
  "5 A 1",
  "0 T 7",
  "3 M 5",
  "7 E 3",
]

console.log(orderPieces(4, input))

input = [
  "197452 I 1",
  "0 O 39999",
  "39999 B 197452",
]

console.log(orderPieces(3, input))
