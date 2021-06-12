const recipesDB = [
    {
        id: 1,        
        image: '/img/recipes/1.jpg',
        name: 'Phasellus sagittis eget',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 10,
        category: 'breakfast',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ``,
            advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.'
        }        
    },

    {
        id: 2,
        image: '/img/recipes/2.jpg',
        name: 'Aenean dictum volutpat',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 12,
        category: 'breakfast',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },

    {
        id: 3,
        image: '/img/recipes/3.jpg',
        name: 'Quisque in neque quis',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 20,
        category: 'breakfast',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },

    {
        id: 4,
        image: '/img/recipes/4.jpg',
        name: 'Nulla imperdiet sit',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 8,
        category: 'breakfast',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },

    {
        id: 5,
        image: '/img/recipes/5.jpg',
        name: 'Curabitur et ligula',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 15,
        category: 'breakfast',
        date: '2021-05-08',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },

    {
        id: 6,
        image: '/img/recipes/6.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 4,
        category: 'breakfast',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },    

    {
        id: 7,
        image: '/img/recipes/7.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 24,
        category: 'lunch',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },    

    {
        id: 8,
        image: '/img/recipes/8.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 5,
        category: 'lunch',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },    

    {
        id: 9,
        image: '/img/recipes/9.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 7,
        category: 'lunch',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },    

    {
        id: 10,
        image: '/img/recipes/10.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 40,
        category: 'lunch',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },        

    {
        id: 11,
        image: '/img/recipes/3.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 40,
        category: 'lunch',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },        

    {
        id: 12,
        image: '/img/recipes/7.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 40,
        category: 'lunch',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },

    {
        id: 13,
        image: '/img/recipes/5.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 40,
        category: 'dinner',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },

    {
        id: 14,
        image: '/img/recipes/2.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 40,
        category: 'dinner',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },

    {
        id: 15,
        image: '/img/recipes/8.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 40,
        category: 'dinner',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },

    {
        id: 16,
        image: '/img/recipes/10.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 40,
        category: 'dinner',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },

    {
        id: 17,
        image: '/img/recipes/5.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 40,
        category: 'dinner',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },    

    {
        id: 18,
        image: '/img/recipes/3.jpg',
        name: 'Etiam ullamcorper',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 40,
        category: 'dinner',
        date: '2021-05-07',
        authorID: 1,
        fullDescription: {
            ingredients: `<ul className="ingredients-list">
                            <li>1 x lorem ipsum</li>
                            <li>200g sit amet</li>
                            <li>1,5l consectetur</li>
                            <li>1,5l consectetur</li>
                            <li>4 adipisicing</li>
                            <li>elit and tempor</li>
                          </ul>`,
            preparation: ''
        }
    },    
]

export default recipesDB