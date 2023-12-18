

export function getRandomColor(): string {

  let result: string = '#'
  // #123456
  const hexaArr: string[] = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6'];

  for (let i = 0; i < 6; i++) {
    const rand = hexaArr[Math.floor(Math.random() * hexaArr.length)]
    result = result + rand
  }



  return result

}
