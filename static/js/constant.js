exports.listMock = [
  '刘德华',
  '张学友',
  '黎明',
  '周杰伦',
  '林俊杰',
  '雍和',
  '格式化',
  '方文山',
  '郭敬明',
  '龙脏',
  '骑士',
  '圣骑士',
];

exports.getUserList = () => {
  let userList = []
  try {
    const historical = parent.parent.clientVars.collab_client_vars.historicalAuthorData;
    for (const [, {name}] of Object.entries(historical)) {
      name && userList.push(name)
    }
  } catch (error) {
    userList = []
  }
  return userList
}
