const MOCKURL = 'http://www.nefuer.com/'; // mock模拟地址
const SERVERURL = 'http://localhost:3000/'; //真实地址

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',
    registUser: SERVERURL + 'user/registUser', //表示后台有一个user控制器，控制器下有一个registUser方法
    loginUser: SERVERURL + 'user/loginUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getDetail: SERVERURL + 'product/getDetail',
    addCart: SERVERURL + 'cart/addCart',
    getCart: SERVERURL + 'cart/getCart'
};

export default URL;