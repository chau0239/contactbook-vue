<template>
    <div class="container my-5 bg-white p-4">
        <div class="row">
            <div class="col-md-6">
                <h2>Contacts</h2>
            </div>
            <div class="col-md-6">
                <RouterLink to="/add-new-contact" class="text-decoration-none">
                  <h5 class="text-end"> + Add new contact</h5>
                </RouterLink>
            </div>

        </div>
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        @input="handleSearch"
      />
      <div class="mt-3">
        <RouterLink
          v-for="(contact, index) in filteredContacts"
          :key="index"
          :to="'/contact/' + contact.id"
          class="text-decoration-none link-dark "
        >
          <div class="border p-3">
            <span>{{ contact.firstName }} {{ contact.lastName }}</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        contacts: [],
        searchQuery: '',
      };
    },
    async created() {
        // Fetch existing contacts from localstorage and parse the string to a JSON 
      const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
      console.log(parsedContacts)
      this.contacts = parsedContacts
    
    },
    computed: {
      sortedContacts() {
        const contactsArray = Array.isArray(this.contacts) ? this.contacts : [];
        const sortedArray = [...contactsArray];
        sortedArray.sort((a, b) => {
          const textA = a.lastName?.toUpperCase();
          const textB = b.lastName?.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        return sortedArray;
      },
      filteredContacts() {
        return this.sortedContacts.filter(
          (contact) =>
            contact.firstName?.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            contact.lastName?.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      handleSearch(e) {
        this.searchQuery = e.target.value;
      },
    },
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  