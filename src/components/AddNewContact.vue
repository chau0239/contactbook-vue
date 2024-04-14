<template>
    <div class="container mt-5 bg-white p-4">
        <RouterLink to="/" class="text-decoration-none mb-3"> &lt; Contacts </RouterLink>
        <h1>Add New Contact</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" v-model="newContact.firstName" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" v-model="newContact.lastName" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="newContact.email" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" v-model="newContact.phone" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary mt-3">Add Contact</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newContact: {
                // unique id for the contacts
                id: new Date().getTime(),
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
            },
        };
    },
    methods: {
        onSubmit() {
            const tempContact = {...this.newContact};
            const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
            contacts.push(tempContact);
            localStorage.setItem("contacts", JSON.stringify(contacts));
            const uniqueId = new Date().getTime();
            this.newContact = {
                id: uniqueId,
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
            };
            alert("Contact added successfully!");
            // Redirect to contacts page after creating
            this.$router.push('/contact/' + tempContact.id);
        },
    },
};
</script>

<style scoped>
/* Add any specific styles for your form */
</style>