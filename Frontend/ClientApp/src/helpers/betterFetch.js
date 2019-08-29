const basePath = window && window.UseAdobeReactorEndpoint ? "/adobe_launch/proxy" : "/adobe_launch/proxy"; // "https://reactor.adobe.io"

export const http = (request) => {
    return new Promise((resolve, reject) => {
        let response;
        fetch(request)
            .then(res => {
                response = res;
                return res.json();
            })
            .then(body => {
                if (response.ok) {
                    response.parsedBody = body;
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch(err => {
                reject(err);
            });
    });
};

export const get = async (
    path,
    args = {method: "GET"}
) => {
    return await http(new Request(basePath + path, args));
};

export const post = async (
    path,
    body,
    args = {method: "POST", body: JSON.stringify(body)}
) => {
    return await http(new Request(basePath + path, args));
};

export const patch = async (
    path,
    body,
    args = {method: "PATCH", body: JSON.stringify(body)}
) => {
    return await http(new Request(basePath + path, args));
};

export const del = async (
    path,
    args = {method: "DELETE"}
) => {
    return await http(new Request(basePath + path, args));
};
