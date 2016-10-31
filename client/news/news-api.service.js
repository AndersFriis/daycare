function newsAPIService($resource) {
    const api = {
        news: $resource('/api/news/:id/',
            // maps a .id on our object to the url above
            { id: '@id' },
            {
                update: {
                    method: 'PUT', 
                },
            }),
    };

    return api;
}

export default newsAPIService;