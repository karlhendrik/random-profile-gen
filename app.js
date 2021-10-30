const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            profileEmail: 'john@gmail.com',
            profileGender: 'male',
            profilePicture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api') // returns `results` array
            const { results } = await res.json() 
            console.log(results)
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.profileEmail = results[0].email,
            this.profileGender = results[0].gender,
            this.profilePicture = results[0].picture.large
        }   
    }
})

app.mount('#app')