function parentAPIService($resource) {
    const api = {
        parent: $resource('/api/parent/:id/',
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

export default parentAPIService;