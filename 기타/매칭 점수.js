class PageParser {
    
    parse(html) {
        const
        text = html.replace(/<[^>]*>/g, ''),
        metaUrl = (html.match(/<meta[^>]*>/gm) || []).find(tag => tag.includes('og:url')),
        links = (html.match(/<a[^>]*>/gm) || []).map(a => this.stripAttr('href', a));

        return {
            url: this.stripAttr('content', metaUrl),
            text,
            links
        }
    }
    
    stripAttr(key, value = '') {
        let index = value.indexOf(key);
        if (index < 0) return;
        index = value.indexOf('"', index) + 1;

        return value.slice(index, value.indexOf('"', index));
    }
    
}

function solution(keyword, pages) {
    const parser = new PageParser(), validator = new RegExp('[A-z]');
    keyword = keyword.toLowerCase();
    
    pages = pages.map((page, index) => {
        const { url, text, links } = parser.parse(page);
        let baseScore = 0, tmp = '';
        
        for (const char of text) {
            if (validator.test(char)) tmp += char.toLowerCase();
            else {
                if (tmp === keyword) baseScore++;
                tmp = '';
            }
        }

        return {
            url,
            linkScore: baseScore / links.length,
            score: baseScore,
            index,
            links
        }
    });
    
    for (const page of pages) {
        for (const link of page.links) {
            const match = pages.find(p => p.url === link);
            if (match) match.score += page.linkScore;
        }
    }
    
    return pages.sort((a, b) => {
        if (a.score === b.score) return b.index - a.index;
        
        return a.score - b.score;
    }).pop().index;
}