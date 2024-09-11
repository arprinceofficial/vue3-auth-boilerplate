import axios from '@/plugins/axios-http.js';

/**
 * GET_USER_INFO
 */
export const GET_USER_INFO = async () => {
    let url = `api/users`;
    return await axios.get(url);
}

/**
 * POST_LOGIN
 */

export const POST_LOGIN = async (data) => {
    const url = 'login';
    return await axios.post(url, data);
}

/**
 * POST_SIGN_UP
 */

export const POST_SIGN_UP = async (data) => {
    const url = 'api/users';
    return await axios.post(url, data,{
        headers: {
        'Content-Type': 'multipart/form-data'
      }});

}

/**
 * DELETE_USER
 */
export const DELETE_USER = async (id) => {
    const url = `api/users/${id}`;
    return await axios.delete(url);
}

/**
 * GET_USER_INFO
 */
export const GET_GENDER_LIST = async () => {
    let url = `api/users/gender/list`;
    return await axios.get(url);
}

/**
 * POST_UPDATE_PASSWORD
 */

export const POST_UPDATE_PASSWORD = async (data) => {
    const url = 'api/users/update-password';
    return await axios.post(url, data);

}
/**
 * POST_SENT_RESET_PASSWORD_LiNK
 */

export const POST_SENT_RESET_PASSWORD_LiNK = async (data) => {
    const url = 'api/users/reset-Password';
    return await axios.post(url, data);

}

/**
 * GET_USER_INFO
 */
export const GET_PRODUCT_DETAILS = async () => {
    let url = `api/users/product/list`;
    return await axios.get(url);
}

/**
 * INSERT_UPDATE_PRODUCT
 */

export const INSERT_UPDATE_PRODUCT = async (data) => {
    const url = 'api/users/update-product';
    return await axios.post(url, data);
}

/**
 * DELETE_PRODUCT
 */
export const DELETE_PRODUCT = async (id) => {
    const url = `api/users/product/${id}`;
    return await axios.delete(url);
}

/**
 * GET_RESET_TOKEN
 */
export const GET_RESET_TOKEN = async (id) => {
    let url = `api/users/get-reset/token/${id}`;
    return await axios.get(url);
}
/**
 * GET_SENT_EMAIL_VERIFICATION_LINK
 */
export const GET_SENT_EMAIL_VERIFICATION_LINK = async (id) => {
    let url = `api/users/email-verification/${id}`;
    return await axios.get(url);
}
/**
 * GET_EMAIL_TOKEN
 */
export const GET_EMAIL_TOKEN = async (id) => {
    let url = `api/users/get-email-token/${id}`;
    return await axios.get(url);
}
/**
 * UPDATE_EMAIL_VERIFICATION
 */
export const UPDATE_EMAIL_VERIFICATION = async (id) => {
    let url = `api/users/update-email-verification/${id}`;
    return await axios.put(url);
}

/**
 * GET_PRODUCT_DETAILS_PAGINATION
 */
export const GET_PRODUCT_DETAILS_PAGINATION = async (data) => {
    let url = `api/users/product-list/pagination`;
    return await axios.post(url, data);
}