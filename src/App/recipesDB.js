const recipesDB = [
    {
        id: 1,        
        authorID: 1,
        image: '/img/recipes/1.jpg',
        name: 'Phasellus sagittis eget',
        description: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.',
        likes: 10,
        category: 'breakfast',
        date: '2021-05-07',
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
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
        advice: 'Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi.', 
        stat: [
            {label: 'Aliquam erat ac', value: 50},
            {label: 'Quisque lorem tortor', value: 70},
            {label: 'Curabitur et ligula', value: 30}
        ],
        fullDescription: {
            content: '<p class="text">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.</p>',
            ingredients: 
                `<ul class="ingredients-list">
                    <li>1 x lorem ipsum</li>
                    <li>200g sit amet</li>
                    <li>1,5l consectetur</li>
                    <li>1,5l consectetur</li>
                    <li>4 adipisicing</li>
                    <li>elit and tempor</li>
                </ul>`,            
            preparation: {
                intro: '<p class="text">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>',
                steps: [
                    `<img src="/img/preparation/step1.jpg" alt="" />
                     <h4 class="text-color-primary">Step 1</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step2.jpg" alt="" />
                     <h4 class="text-color-primary">Step 2</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step3.jpg" alt="" />
                     <h4 class="text-color-primary">Step 3</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`,

                     `<img src="/img/preparation/step4.jpg" alt="" />
                     <h4 class="text-color-primary">Step 4</h4>
                     <p class="text">Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit</p>`
                ]            
            }
        }        
    },    
]

export default recipesDB