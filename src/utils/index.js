import http from './http';
import format from './format';

const util = {};

util.get = http.get;
util.post = http.post;
util.date = format.toDate;


export default util;