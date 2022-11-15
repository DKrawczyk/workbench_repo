import path from "path";
module.exports = {
    webpack: {
        alias: {
            '~components': path.resolve(__dirname, 'src/components'),
        }
    }
}
