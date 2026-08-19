var contactData = {
    github: {
        title: 'GitHub',
        badgeColor: '#181717',
        icon: '<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>',
        fields: [
            { label: '用户：', value: 'Leadercns', strong: true },
            { label: '链接：', value: 'https://github.com/Leadercns', link: true }
        ]
    },
    gitee: {
        title: 'Gitee',
        badgeColor: '#C71D23',
        icon: '<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.48 7.98l-2.04 2.04-1.48-1.48 2.04-2.04 1.48 1.48zm-4.52 4.52l-2.04 2.04-1.48-1.48 2.04-2.04 1.48 1.48zm-4.52 4.52l-2.04 2.04-1.48-1.48 2.04-2.04 1.48 1.48zm-2.04-2.04l-1.48 1.48-2.04-2.04 1.48-1.48 2.04 2.04zm2.04-2.04l-1.48-1.48 2.04-2.04 1.48 1.48-2.04 2.04zm2.04-2.04l-1.48-1.48 2.04-2.04 1.48 1.48-2.04 2.04zm2.04-2.04l-1.48-1.48 2.04-2.04 1.48 1.48-2.04 2.04zm2.04 2.04l1.48 1.48-2.04 2.04-1.48-1.48 2.04-2.04zm-2.04 2.04l1.48 1.48-2.04 2.04-1.48-1.48 2.04-2.04z"/>',
        fields: [
            { label: '用户：', value: 'Leadercn', strong: true },
            { label: '链接：', value: 'https://gitee.com/Leadercn', link: true }
        ]
    },
    email: {
        title: 'Email',
        badgeColor: '#1A73E8',
        icon: '<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>',
        fields: [
            { label: '邮箱：', value: 'Leader@Levaer.cn', mailto: true }
        ]
    }
};

var modalOverlay = document.getElementById('contactModal');
var modalBadge = document.getElementById('modalBadge');
var modalIcon = document.getElementById('modalIcon');
var modalTitle = document.getElementById('modalTitle');
var modalBody = document.getElementById('modalBody');
var modalCloseBtn = document.getElementById('modalCloseBtn');
var modalCloseBtn2 = document.getElementById('modalCloseBtn2');

function openContactModal(type) {
    var data = contactData[type];
    if (!data) return;
    modalBadge.style.background = data.badgeColor;
    modalIcon.innerHTML = data.icon;
    modalTitle.textContent = data.title;
    var html = '';
    for (var i = 0; i < data.fields.length; i++) {
        var field = data.fields[i];
        html += '<div class="row">';
        html += '<span class="label">' + field.label + '</span>';
        if (field.link) {
            html += '<a href="' + field.value + '" target="_blank" rel="noopener noreferrer">' + field.value + '</a>';
        } else if (field.mailto) {
            html += '<a href="mailto:' + field.value + '">' + field.value + '</a>';
        } else if (field.strong) {
            html += '<span class="value"><strong>' + field.value + '</strong></span>';
        } else {
            html += '<span class="value">' + field.value + '</span>';
        }
        html += '</div>';
    }
    modalBody.innerHTML = html;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// 联系方式卡片点击：github/gitee 直接跳转，email 弹窗
document.querySelectorAll('.contact-card').forEach(function(card) {
    card.addEventListener('click', function(e) {
        var type = this.getAttribute('data-contact');
        if (type === 'github') {
            window.open('https://github.com/Leadercns', '_blank');
        } else if (type === 'gitee') {
            window.open('https://gitee.com/Leadercn', '_blank');
        } else if (type === 'email') {
            openContactModal('email');
        }
    });
});

modalCloseBtn.addEventListener('click', closeContactModal);
modalCloseBtn2.addEventListener('click', closeContactModal);
modalOverlay.addEventListener('click', function(e) {
    if (e.target === this) closeContactModal();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeContactModal();
});

var thanksModal = document.getElementById('thanksModal');
var thanksNav = document.getElementById('thanksNav');
var thanksPanel = document.getElementById('thanksPanel');
var thanksModalCloseBtn = document.getElementById('thanksModalCloseBtn');
var thanksModalCloseBtn2 = document.getElementById('thanksModalCloseBtn2');

function openThanksModal() {
    thanksModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeThanksModal() {
    thanksModal.classList.remove('active');
    document.body.style.overflow = '';
}

if (thanksNav) thanksNav.addEventListener('click', openThanksModal);
if (thanksPanel) thanksPanel.addEventListener('click', openThanksModal);
thanksModalCloseBtn.addEventListener('click', closeThanksModal);
thanksModalCloseBtn2.addEventListener('click', closeThanksModal);
thanksModal.addEventListener('click', function(e) {
    if (e.target === this) closeThanksModal();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeThanksModal();
});

function getUserIP() {
    var ipEl = document.getElementById('ipDisplay');
    if (!ipEl) return;
    var url = 'https://api64.ipify.org?format=json';
    var controller = new AbortController();
    var timeoutId = setTimeout(function() { controller.abort(); }, 4000);
    fetch(url, { signal: controller.signal })
        .then(function(res) {
            clearTimeout(timeoutId);
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        })
        .then(function(data) {
            var ip = data.ip || data.address || data.origin;
            if (!ip) throw new Error('未获取到IP');
            ipEl.textContent = '你的IP: ' + ip;
            ipEl.className = 'ip-box';
        })
        .catch(function(err) {
            console.warn('IP获取失败:', err);
            ipEl.textContent = 'IP: 获取失败';
            ipEl.className = 'ip-box error';
        });
}

function loadProjects() {
    var gridContainer = document.getElementById('projectGrid');
    if (!gridContainer) return;
    gridContainer.innerHTML = '';
    var loadingEl = document.createElement('div');
    loadingEl.className = 'loading-placeholder';
    loadingEl.textContent = '加载项目中...';
    loadingEl.id = 'projectLoadingPlaceholder';
    gridContainer.appendChild(loadingEl);

    fetch('/project_list.json', { cache: 'no-cache', headers: { 'Accept': 'application/json' } })
        .then(function(response) {
            if (!response.ok) return null;
            return response.json();
        })
        .then(function(data) {
            var placeholder = document.getElementById('projectLoadingPlaceholder');
            if (placeholder) placeholder.remove();
            function hasValidProjects(projects) {
                if (!Array.isArray(projects) || projects.length === 0) return false;
                for (var i = 0; i < projects.length; i++) {
                    var p = projects[i];
                    if (p && (p.name || p.title)) return true;
                }
                return false;
            }
            if (data === null) {
                var errorEl = document.createElement('div');
                errorEl.className = 'error-placeholder';
                errorEl.textContent = '项目列表不存在';
                gridContainer.appendChild(errorEl);
                return;
            }
            if (!hasValidProjects(data)) {
                var emptyEl = document.createElement('div');
                emptyEl.className = 'empty-placeholder';
                emptyEl.textContent = '暂无项目';
                gridContainer.appendChild(emptyEl);
                return;
            }
            gridContainer.innerHTML = '';
            for (var idx = 0; idx < data.length; idx++) {
                var project = data[idx];
                if (!project.name && !project.title) continue;
                var projectName = project.name || project.title || '未命名项目';
                var projectLink = project.link || project.url || '#';
                var projectDesc = project.description || project.intro || '暂无简介';
                var imageUrl = null;
                if (project.hasOwnProperty('image') && typeof project.image === 'string' && project.image.trim()) {
                    imageUrl = project.image.trim();
                }
                var cardElement;
                if (projectLink && projectLink !== '#') {
                    cardElement = document.createElement('a');
                    cardElement.href = projectLink;
                    cardElement.target = '_blank';
                    cardElement.rel = 'noopener noreferrer';
                } else {
                    cardElement = document.createElement('div');
                    cardElement.style.cursor = 'default';
                }
                cardElement.className = 'card';
                if (imageUrl) {
                    var img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = projectName;
                    img.className = 'project-img';
                    img.onerror = function() { this.style.display = 'none'; };
                    cardElement.appendChild(img);
                }
                var titleDiv = document.createElement('div');
                titleDiv.className = 'card-title';
                var nameSpan = document.createElement('span');
                nameSpan.textContent = projectName;
                var arrowSpan = document.createElement('span');
                arrowSpan.className = 'card-arrow';
                arrowSpan.textContent = '→';
                titleDiv.appendChild(nameSpan);
                titleDiv.appendChild(arrowSpan);
                var descDiv = document.createElement('div');
                descDiv.className = 'card-desc';
                descDiv.textContent = projectDesc;
                cardElement.appendChild(titleDiv);
                cardElement.appendChild(descDiv);
                gridContainer.appendChild(cardElement);
            }
        })
        .catch(function(error) {
            var placeholder = document.getElementById('projectLoadingPlaceholder');
            if (placeholder) placeholder.remove();
            var errorEl = document.createElement('div');
            errorEl.className = 'error-placeholder';
            errorEl.textContent = '项目列表不存在';
            gridContainer.appendChild(errorEl);
            console.warn('项目列表加载失败:', error);
        });
}

function switchPage(targetId) {
    var sections = document.querySelectorAll('.page-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    var target = document.getElementById('page-' + targetId);
    if (target) {
        target.style.display = 'block';
        if (targetId === 'projects') {
            loadProjects();
        }
    }
    var footerExtra = document.querySelectorAll('.footer-extra');
    if (targetId === 'about') {
        footerExtra.forEach(function(el) {
            el.style.display = '';
        });
    } else {
        footerExtra.forEach(function(el) {
            el.style.display = 'none';
        });
    }
    document.querySelectorAll('.nav-link, .panel-btn').forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === targetId) {
            link.classList.add('active');
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initPanel() {
    var hamburger = document.getElementById('hamburger');
    var panel = document.getElementById('topPanel');
    var overlay = document.getElementById('menuOverlay');
    var panelBtns = panel.querySelectorAll('.panel-btn');

    function openPanel() {
        panel.classList.add('open');
        overlay.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePanel() {
        panel.classList.remove('open');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        if (panel.classList.contains('open')) {
            closePanel();
        } else {
            openPanel();
        }
    });

    overlay.addEventListener('click', closePanel);

    panelBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var target = this.getAttribute('data-target');
            if (target === 'thanks') {
                openThanksModal();
                closePanel();
                return;
            }
            if (target) {
                switchPage(target);
            }
            closePanel();
        });
    });
}

function init() {
    getUserIP();
    switchPage('about');
    initPanel();

    var desktopLinks = document.querySelectorAll('.nav-desktop-content .nav-link');
    desktopLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = this.getAttribute('data-target');
            if (target === 'thanks') {
                openThanksModal();
                return;
            }
            if (target) {
                switchPage(target);
            }
        });
    });

    document.querySelectorAll('.back-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            switchPage('about');
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
