<template>
    <div class="container my-5 bg-white p-4">
        <RouterLink to="/" class="text-decoration-none"> &lt; Contacts </RouterLink>
        <RouterLink :to="'/edit/' + $route.params.id" class="text-decoration-none float-end">Edit</RouterLink>
        <div class="mt-3">
            <h1 class="mt-5">{{ contact.firstName }} {{ contact.lastName }}</h1>
            <hr>
            <p>Email</p>
            <p>{{ contact.email }}</p>
            <hr>
            <p>Phone</p>
            <p>{{ contact.phone }}</p>
            <hr>
        </div>
        <button @click="deleteContact">Delete</button>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            contact: null
        };
    },
    created() {
        this.fetchContact();
    },
    methods: {
        fetchContact() {
            const storedContacts = localStorage.getItem("contacts");
            if (storedContacts) {
                const contacts = JSON.parse(storedContacts);
                const contactId = this.$route.params.id;
                this.contact = { ...contacts.find(contact => contact.id == contactId) };
                console.log({ ...this.contact })
            }
        },
        deleteContact() {
            const contactId = this.$route.params.id;
            let storedContacts = localStorage.getItem("contacts");
            if (storedContacts) {
                let contacts = JSON.parse(storedContacts);
                contacts = contacts.filter(contact => contact.id != contactId);
                localStorage.setItem("contacts", JSON.stringify(contacts));
                // Redirect to contacts page after deleting
                this.$router.push('/');
            }
        }
    },
    components: {
        RouterLink
    }
};
</script>
