// scripts/topic-page.js
const TopicManager = {
    init(config) {
        this.topicName = config.topicName;
        this.apiUrl = `https://api.github.com/repos/alae-touba/software-engineering-notes/contents/${this.topicName}`;
        this.setPageTitle();
        this.loadFiles();
    },

    setPageTitle() {
        const titleElement = document.getElementById('mainTitle');
        if (titleElement) {
            titleElement.textContent = `${this.topicName.toUpperCase()} NOTES`;
        }
    },

    async loadFiles() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) throw new Error('Failed to fetch files');
            console.log(('response:', response));
            
            const files = await response.json();
            const markdownFiles = this.filterMarkdownFiles(files);
            this.renderFiles(markdownFiles);
            this.setupSearch(markdownFiles);
        } catch (error) {
            console.error('Error:', error);
            this.showError();
        }
    },

    filterMarkdownFiles(files) {
        return files
            .filter(file => 
                file.type === 'file' && 
                file.name.endsWith('.md') && 
                !file.name.toLowerCase().startsWith('readme')
            )
            .map(file => ({
                title: this.formatTitle(file.name),
                filename: file.name,
                // url: file.download_url
            }));
    },

    formatTitle(filename) {
        return filename
            .replace('.md', '')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase());
    },

    renderFiles(files) {
        const container = document.getElementById('fileList');
        if (!container) return;

        container.innerHTML = files.length > 0 
            ? files.map(file => `
                <div class="file-item">
                    <a href="${file.filename.replace('.md', '')}" target="_blank">${file.title}</a>
                </div>
            `).join('')
            : `<div class="no-results">No files found</div>`;
    },

    setupSearch(files) {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            const filtered = files.filter(file => 
                file.title.toLowerCase().includes(term) ||
                file.filename.toLowerCase().includes(term)
            );
            this.renderFiles(filtered);
        });
    },

    showError() {
        const container = document.getElementById('fileList');
        if (container) {
            container.innerHTML = `
                <div class="no-results">
                    Failed to load files. Refresh to try again.
                </div>
            `;
        }
    }
};