REPLACECMENTS = [
    [/\$[^\$]*\\mathbb{R}[^\$]*\$/, '[[Real Numbers]]'],
    [/\$[^\$]*\\mathbb{R}\^{[\da-zA-Z]}[^\$]*\$/, '[[Real Coordinate Space]]'],
    [/\$[^\$]*\\mathbb{C}[^\$]*\$/, '[[Complex Numbers]]'],
    [/\$[^\$]*\\mathbb{C}\^{[\da-zA-Z]}[^\$]*\$/, '[[Complex Coordinate Space]]'],
    [[/\$[^\$]*\\mathbb{C}[^\$]*\$/, /\$[^\$]*\\overline{z}[^\$]*\$/], '[[Complex Conjugate]]'],
    [[/\$[^\$]*\\mathbb{C}[^\$]*\$/, /\$[^\$]*\\\|z\|[^\$]*\$/], '[[Complex Modulus]]'],
    [/\$[^\$]*\[\s*[^,\]]+\s*,\s*[^,\]]+\s*\][^\$]*\$/, '[[Closed Interval]]'], // This appears to broken, matches too easily
    [/\$[^\$]*\(\s*[^,\)]+\s*,\s*[^,\)]+\s*\)[^\$]*\$/, '[[Open Interval]]'], // This appears to broken, matches too easily
    [/\$[^\$]*L\(\s*[^,]+\s*,\s*[^,]+\s*,\s*[^,]+\s*\)[^\$]*\$/, '[[Lower Sum]]'],
    [/\$[^\$]*U\(\s*[^,]+\s*,\s*[^,]+\s*,\s*[^,]+\s*\)[^\$]*\$/, '[[Upper Sum]]'],
    [/\$[^\$]*R\(\s*[^,]+\s*,\s*[^,]+\s*,\s*[^,]+\s*,\s*[^,]+\s*\)[^\$]*\$/, '[[Riemann Sum]]'],
    [/\$[^\$]*\\sup\\limits[^\$]*\$/, '[[Supremum]]'],
    [/\$[^\$]*\\inf\\limits[^\$]*\$/, '[[Infimum]]'],
    [/\$[^\$]*[^:]+:.+\\to.+[^\$]*\$/, '[[Function]]'],
    [/\$[^\$]*\\underline{\\int\\limits_{.+}\^{.+}}\s*.+\s*d.+[^\$]*\$/, '[[Lower Integral]]'],
    [/\$[^\$]*\\overline{\\int\\limits_{.+}\^{.+}}\s*.+\s*d.+[^\$]*\$/, '[[Upper Integral]]'],
    [/\$[^\$]*.+\s*\\cap\s*.+\s*=\s*\\emptyset[^\$]*\$/, '[[Disjoint Sets]]'],
    [/\$[^\$]*\\emptyset[^\$]*\$/, '[[Empty Set]]'],
    [/\$[^\$]*\(.+_{(.+)}\)_{\1\=1}\^{\\infty}[^\$]*\$/, '[[Sequence]]'],
    [/\$[^\$]*\(.+_{(.+)}\)_{\1\s*\\in\s.*}[^\$]*\$/, '[[Net]]'],
];

function other_outlinks (tp) {
    var content = tp.file.content.split("# Other Outlinks")[0];
    var result = "# Other Outlinks";
    for (var replacements of REPLACECMENTS) {
        if (!(Array.isArray(replacements[0]))) {
            replacements = [[replacements[0],], replacements[1]]
        }
        var to_replace = replacements[1]
        if (replacements.length >= 3) {
            var parents = replacements[2]
        }
        var all_matched = true
        for (var replacement of replacements[0]) {
            console.log("Match for " + replacement + " is " + content.match(replacement));
            if ((!content.match(replacement)) || (content.includes(to_replace))) {
                all_matched = false
            }
        }
        if (all_matched) {
            result += "\n- " + to_replace;
        }
    }
    return result;
}
module.exports = other_outlinks;