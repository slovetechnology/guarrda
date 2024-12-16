import axios from 'axios'
import Cookies from 'js-cookie'
import { tokenName } from './utils';


export let url;
if (window.location.origin.includes('quickdirect.com.ng')) {
    url = `https://quickdirect.greenfordbank.com/`
}
if (window.location.origin.includes('quickdirect.netlify.app')) {
    url = `https://devapi.quickdirect.com.ng/`
}
if (window.location.origin.includes('localhost')) {
    url = 'http://localhost:8003/'
}

const admin_urls = {
    manage_currency: "admin/currency/manage",
    all_currency: "admin/currency/all",
    manage_wallet: "admin/wallet/manage",
    all_wallet: "admin/wallet/all",
    remove_wallet_rate: "admin/wallet/rate/remove",
    manage_earnings: "admin/earn/manage",
    all_earnings: "admin/earn/all",
}


export const Apis = {
    admin: admin_urls,
}

export const Posturl = async (endpoint, data) => {
    const res = await axios.post(`${url}${endpoint}`, data)
    return res.data
}

export const geturl = async (endpoint) => {
    const res = await axios.get(`${url}${endpoint}`)
    return res.data
}

// authenticated routes
export const Authposturl = async (endpoint, data) => {
    const res = await axios.post(`${url}${endpoint}`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get(tokenName)}`
        }
    })
    return res.data
}

export const Authputurl = async (endpoint, data) => {
    const res = await axios.put(`${url}${endpoint}`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get(tokenName)}`
        }
    })
    return res.data
}

export const Authgeturl = async (endpoint) => {
    const res = await axios.get(`${url}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get(tokenName)}`
        }
    })
    return res.data
}

export const AuthDelete = async (endpoint) => {
    const res = await axios.delete(`${url}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get(tokenName)}`
        }
    })
    return res.data
}


