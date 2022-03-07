function call(url, type, resolve, reject, data=null){
  $.ajax({
    url: url,
    method:type,
    data:data,
    beforeSend:()=>{},
    success:(rsp)=>{resolve(rsp)},
    error:(err)=>{reject(err)},
    complete:(rsp)=>{console.log(rsp)}
  });
}
