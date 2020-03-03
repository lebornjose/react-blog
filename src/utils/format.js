const format = {}


format.toDate = (date) => {
   let time = new Date(date*1000);
   let year = time.getFullYear();
   let m = time.getMonth() + 1;
   let d = time.getDate();
   let month = m < 10 ? '0' + m : m;
   let day = d < 10 ? '0' + d : d;
   return year + '-' + month + "-" + day;
}


export default format;