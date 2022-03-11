class Tags {
    constructor() {

    }

    selectFiltersTags() {
        let updatedFilters = document.querySelectorAll('.filter-list .filter-elem')

        updatedFilters.forEach(el => {
            el.addEventListener('click', e => {
                this.buildTag(el.innerHTML);
            })
        })
    }

    buildTag(selectedFilter) {
        this.tagsContainer = document.querySelector('.tags')
        const tag = `
             <li class="tag">
                <p class="tag__name">${selectedFilter}</p>
                <div class="tag__close-icon"></div>
             </li>
        `
        this.tagsContainer.innerHTML += tag
    }

    deleteTag() {
        const tag = document.querySelectorAll('.tag')
        tag.forEach(el => {
            el.querySelector('.tag__close-icon').addEventListener('click', () => {
                el.style.display = 'none'

            })
        })
    }
}