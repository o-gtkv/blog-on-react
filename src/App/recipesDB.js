const recipesDB = [
    {
        id: 1,        
        image: '/img/home_diet_blog1-960x720.jpg',
        name: 'Phasellus sagittis eget',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 10,
        category: '',
        date: '2021-05-07',
        authorID: 1        
    },

    {
        id: 2,
        image: '/img/home_diet_blog1-960x720.jpg',
        name: 'Aenean dictum volutpat',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 12,
        category: '',
        date: '2021-05-07',
        authorID: 1
    },

    {
        id: 3,
        image: '/img/home_diet_blog2v.jpg',
        name: 'Quisque in neque quis',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 20,
        category: '',
        date: '2021-05-07',
        authorID: 1
    },

    {
        id: 4,
        image: '/img/home_diet_blog1-960x720.jpg',
        name: 'Nulla imperdiet sit',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 8,
        category: '',
        date: '2021-05-07',
        authorID: 1
    },

    {
        id: 5,
        image: '/img/home_diet_blog1-960x720.jpg',
        name: 'Curabitur et ligula',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 15,
        category: '',
        date: '2021-05-08',
        authorID: 1
    },

    {
        id: 6,
        image: '/img/home_diet_blog1-960x720.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 4,
        category: '',
        date: '2021-05-07',
        authorID: 1
    },    

    {
        id: 7,
        image: '/img/home_diet_blog7-960x720.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 24,
        category: 'breakfast',
        date: '2021-05-07',
        authorID: 1
    },    

    {
        id: 8,
        image: '/img/home_diet_blog8-960x720.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 5,
        category: 'breakfast',
        date: '2021-05-07',
        authorID: 1
    },    

    {
        id: 9,
        image: '/img/home_diet_blog9-960x720.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 7,
        category: 'breakfast',
        date: '2021-05-07',
        authorID: 1
    },    

    {
        id: 10,
        image: '/img/home_diet_blog10-960x720.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 40,
        category: 'breakfast',
        date: '2021-05-07',
        authorID: 1
    },        

    {
        id: 11,
        image: '/img/home_diet_blog10-960x720.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 40,
        category: 'breakfast',
        date: '2021-05-07',
        authorID: 1
    },        

]

export default recipesDB