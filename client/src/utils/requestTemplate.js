import axios from 'axios';

/**
 * 
 * @description General template to request to the server.
 * @param {String} method of request
 * @param {String} path od EP
 * @returns 
 */
const handleRequest = async (method, path) => {
    const response = await axios({
        method: method,
        url: `/api/items${path}`
    })
    return response;
}

export default handleRequest;