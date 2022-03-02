function retrieve(params) {
  if(params === undefined) {
    return fetch("https://ll.thespacedevs.com/2.2.0/launch/?limit=10&offset=0", {
      method: "GET",
      headers: {
        Accept: "Application/json"
      }
    }).then((r)=> {
      return r.json();
    }).then((j)=> {
      console.log(j)
    
    }).catch((e)=> {
      console.log(e);
    })
  }
}

export default {
  retrieve
}
