const FILTER_TYPES: {
  sx: {
      data: string[];
      dataPY: string[];
  };
} = {
  sx: {
    data: ['水瓶座', '雙魚座', '白羊座', '金牛座', '雙子座', '巨蟹座', '獅子座', '處女座', '天枰座', '天蠍座', '射手座', '摩羯座'],
    dataPY: ['shu', 'niu', 'hu', 'tu', 'long', 'she', 'ma', 'yang', 'hou', 'ji', 'gou', 'zhu'],

  },
}

const randomSX = function (counts: number | undefined) {
  let list = [].concat(FILTER_TYPES.sx.data)
  list.sort(() => {
    return Math.random() > 0.5 ? -1 : 1
  })
  return list.splice(0, counts)
}






export { FILTER_TYPES, randomSX }
