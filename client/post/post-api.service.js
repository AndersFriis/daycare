function postAPIService($resource) {
    const api = {
        post: $resource('/api/post/:id/',
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

export default postAPIService;