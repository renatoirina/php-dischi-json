new Vue({
    el: '#app',
    data: {
        albums: []
    },
    created() {
        axios.get('api.php')
            .then(response => {
                this.albums = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }
});
