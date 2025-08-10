<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
// Load markdown and render into sections
async function loadMarkdown() {
    const response = await fetch('markdown/index.md');
    const text = await response.text();
    const sections = text.split(/---/g).map(s => s.trim()).filter(s => s);
    const contentDiv = document.getElementById('content');
    sections.forEach(section => {
        const secElem = document.createElement('section');
        secElem.innerHTML = marked.parse(section);
        contentDiv.appendChild(secElem);
    });
}

loadMarkdown();
