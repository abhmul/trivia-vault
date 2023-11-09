function title(tp) {
    return tp.file.title.replace(/\s{2,}/g, ' ');
}
module.exports = title;