export default {
    data: {
        expanded: [false, false, false],
        longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    
    onInit() {
    },

    toggleMenu(index) {
        this.expanded[index] = !this.expanded[index]
    }
};
