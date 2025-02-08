// constants
const ARTICLES_URL = 'https://api.github.com/repos/alae-touba/software-engineering-notes/contents/articles';
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour


// Cache management
const getCachedArticles = () => {
    const cached = localStorage.getItem('cachedArticles');
    if (!cached) {
        return null;
    }
    
    const { timestamp, data } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION) {
        localStorage.removeItem('cachedArticles');
        return null;
    }
    return data;
};

const cacheArticles = (articles) => {
    localStorage.setItem('cachedArticles', JSON.stringify({
        timestamp: Date.now(),
        data: articles
    }));
};

// data processing
const filterMarkdownFiles = (files) => {
    return files
        .filter(file => 
            file.type === 'file' && 
            file.name.endsWith('.md') && 
            !file.name.toLowerCase().startsWith('readme')
        );
}

const getArticlesInfo = (markdownfiles) => {
    return markdownfiles
        .map(file => ({
            title: formatTitle(file.name),
            filename: file.name,
            url: file.path.replace('.md', '')
        })); 
}

const formatTitle = (filename) => {
    return filename
        .replace('.md', '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}

// UI
const setPageTitle = () => {
    const titleElement = document.getElementById('mainTitle');   
}

const renderArticles = (articles) => {
    const container = document.getElementById('articlesList');
    if (!container) {
        return;
    }

    container.innerHTML = articles?.length > 0 
        ? articles.map(article => `
            <div class="file-item">
                <a href="${article.url}" target="_blank">${article.title}</a>
            </div>
        `).join('')
        : `<div class="no-results">No files found</div>`;
}

const setupSearch = (articles) => {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) {
        return;
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        const filtered = articles.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.filename.toLowerCase().includes(searchTerm)
        );
        renderArticles(filtered);
    });
}

const showError = () => {
    const container = document.getElementById('articlesList');
    if (!container) {
        return;
    }

    container.innerHTML = `
        <div class="no-results">
            Failed to load files. Refresh to try again.
        </div>
    `;
}

const setCurrentYear = () => {
    const yearElement = document.getElementById('currentYear');
    if (!yearElement) {
        return;
    }
    yearElement.textContent = new Date().getFullYear();
}

const renderLoading = () => {
    const container = document.getElementById('articlesList');
    if (!container) return;
    container.innerHTML = '<div class="loading">Loading articles...</div>';
};

// logic
const initBlog = async (url) => {
    try {
        renderLoading();

        setCurrentYear();

        const cachedArticles = getCachedArticles();
        if (cachedArticles) {
            renderArticles(cachedArticles);
            setupSearch(cachedArticles);
            return;
        }

        const response = await fetch(url);
        if (!response.ok)  {
            throw new Error('Failed to fetch files');
        }

        const files = await response.json()
        const markdownFiles = filterMarkdownFiles(files);
        const articles = getArticlesInfo(markdownFiles);
        
        cacheArticles(articles);
        renderArticles(articles);
        setupSearch(articles);
    } catch (error) {
        console.error('Error:', error);
        showError();
    }
}

// init
// loadFiles(ARTICLES_URL);
document.addEventListener('DOMContentLoaded', () => initBlog(ARTICLES_URL));
