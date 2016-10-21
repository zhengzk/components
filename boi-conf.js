boi.use('boi-plugin-loader-vue',{
    style: {
        destDir: 'styles',
        useHash: false, //false, // true
        autoprefixer: true
    }
});
// 配置
boi.spec('basic', {
    appName: 'components',
    // 本地编译目录
    localPath: {
        src: './src/',
        dest: './dest/',
        thirdparty: './libs/'
    },
    // cdn url
    cdn: {
        server: 'static.daojia.com',
        path: '/components/'
    }
});

// 同名配置覆盖父级
boi.spec('js', {
    extType: 'js',
    srcType: ['es2015'],
    srcDir: 'js',
    destDir: 'js',
    useHash: false
});

boi.spec('style', {
    destDir: 'style',
    useHash: true
});

boi.spec('html', {
    extType: 'html',
    srcDir: 'views',
});

boi.spec('image', {
    extType: ['png', 'jpg'],
    destDir: 'image'
});
