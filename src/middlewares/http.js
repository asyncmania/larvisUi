
export default class Http {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getData(url, token) {
   return fetch(`${this.baseUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(data => data.json())
  }

  postData(url, data, token) {
   return fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(data => data.json())
  }
}