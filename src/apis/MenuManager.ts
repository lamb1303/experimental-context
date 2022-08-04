const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3005";

const entryApi = (
    endpoint: string,
    body: any,
    method?: any,
    customHeaders?: any,
    customConfig?: any
) => {
    const config: RequestInit = {
        headers: {
            "Content-Type": "application/json",
            ...customHeaders
        },
        ...(body && { body: JSON.stringify(body) }),
        method: !method ? "POST" : method,
        credentials: "same-origin",
        mode: "cors",
        ...customConfig
    };

    return window
        .fetch(`${baseUrl}/${endpoint}`, config)
        .then(async (response) => {
            const data = await response.json();
            if (response.ok) {
                return data;
            } else {
                return Promise.reject(data);
            }
        });
};

export { baseUrl, entryApi };
