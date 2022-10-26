let data = [
    {
      id: 1,
      name: 'p1'
    },
    {
      id: 3112,
      pid: 311,
      name: 'p3112'
    },
    {
      id: 11,
      pid: 1,
      name: 'p11'
    },
    {
      id: 2,
      name: 'p2'
    },
    {
      id: 22,
      pid: 2,
      name: 'p22'
    },
    {
      id: 3,
      name: 'p3'
    },
    {
      id: 311,
      pid: 31,
      name: 'p311'
    },
    {
      id: 12,
      pid: 1,
      name: 'p12'
    },
    {
      id: 21,
      pid: 2,
      name: 'p21'
    },
    {
      id: 23,
      pid: 2,
      name: 'p23'
    },
    {
      id: 31,
      pid: 3,
      name: 'p31'
    },
    {
      id: 312,
      pid: 31,
      name: 'p312'
    },
    {
      id: 3111,
      pid: 311,
      name: 'p3111'
    }
  ];

  let newArr = [];
  
  function getArr(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (!arr[i].pid) {
        let son = setArr(arr, arr[i]);
        newArr.push(son)
      }
    }
  }

  function setArr(arr, obj) {
    obj.children = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i].pid === obj.id) {
        obj.children.push(arr[i]);
        setArr(arr, arr[i]);
      }
    }
    return obj;
  }

  getArr(data);
  console.log(newArr);