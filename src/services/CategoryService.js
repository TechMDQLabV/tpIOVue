import axios from 'axios';
var url="http://operativa-stock-app.herokuapp.com";
export default {
  retrieveAll() {
    //return axios.get("http://localhost:25101/category")
    return axios.get(url+"/category")
      .then((response)=>{
       return  response.data;
      }).catch((error)=>{
        console.log(error);
      });
      
  },
  retrieve(id) {
    console.log(id);
      //return axios.get("http://localhost:25101/category/",{
        return axios.get(url+"/category",{
        params: { id: id }})
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  create(category) {
      //return axios.post("http://localhost:25101/category/create",category)
      return axios.post(url+"/category/create",category)
      .then((response)=>{
       return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  remove(id) {
    console.log(id);
     //return  axios.delete("http://localhost:25101/category/",{
      return  axios.delete(url+"/category/",{
      params: { id: id }
    })
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  update(category) {
     //return  axios.put("http://localhost:25101/category/edit",category)
     return  axios.put(url+"/category/edit",category)
      .then((response)=>{
        return response.data
      }).catch((error)=>{
        console.log(error);
      });
  }
}