import axios from "axios";

// Configure Axios with the base URL from the environment
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

const pendingForms = new WeakMap();
const ApiService = {
  _401interceptor: 0,

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  setHeader() {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  get(resource, config) {
    return axios.get(resource, config);
  },

  post(resource, data, config) {
    const previousController = pendingForms.get(data);
    if (previousController) {
      previousController.abort();
    }
    const innerData = !!data ? data : {};

    const controller = new AbortController();
    pendingForms.set(innerData, controller);

    return axios
      .post(resource, innerData, {
        signal: controller.signal,
        ...config,
      })
      .then((res) => {
        pendingForms.delete(innerData);
        return res;
      });
  },

  formData(resource, data) {
    return axios.post(resource, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  token(resource, data) {
    return axios.post(resource, data, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  print(resource, config) {
    return axios.get(resource, {
      responseType: "blob",
      ...config,
    });
  },

  printTemp(resource, data, config) {
    return axios.post(resource, data, {
      responseType: "blob",
      ...config,
    });
  },

  postfile(resource, data) {
    return axios.post(resource, data, {
      responseType: "blob",
    });
  },

  blobandjson(resource, data) {
    return axios.post(resource, data, {
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "blob",
    });
  },

  customRequest(dat) {
    return axios(data);
  },

  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.request.status === 403) {
          window.location.href = "/error/403";
        }

        if (error.request?.status === 500) {
          return;
        }
        throw error;
      }
    );
  },

  unmount401Interceptor() {
    axios.interceptors.response.eject(this._401interceptor);
  },
};

export default ApiService;
