<template>
    <div class="container mt-5 bg-white p-4">
        <h1>Edit Contact</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" v-model="editedContact.firstName" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" v-model="editedContact.lastName" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="editedContact.email" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" v-model="editedContact.phone" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editedContact: {
                // unique id for the contacts
                id: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
            },
        };
    },
    created() {
        this.fetchContact();
    },
    methods: {
        fetchContact() {
            const contactId = this.$route.params.id;
            const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
            const foundContact = storedContacts.find(contact => contact.id == contactId);
            this.editedContact = { ...foundContact };
        },
        onSubmit() {
            const contactId = this.$route.params.id;
            const tempContact = {...this.editedContact};
            let storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
            const contactIndex = storedContacts.findIndex(contact => contact.id == contactId);
            
            if (contactIndex !== -1) {
                storedContacts[contactIndex] = { ...this.editedContact };
            } else {
                storedContacts.push({ ...this.editedContact });
            }
            localStorage.setItem("contacts", JSON.stringify(storedContacts));
            alert("Contact data updated successfully!");
            this.$router.push('/contact/' + tempContact.id);
        },
    },
};
</script>

<style scoped>
/* Add any specific styles for your form */
</style>