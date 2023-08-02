<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">
                    Contact Manager<router-link to="/contacts/add" class="btn btn-success btn-sm"><i
                            class="fa fa-plus-circle"></i>New</router-link>
                </p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum sapiente maxime
                    ex, quod quam quo
                    eaque, dolorem nisi laudantium inventore iure nihil quaerat tenetur ea a mollitia eveniet repudiandae.
                </p>
                <form>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Search Name" name="">
                                </div>
                                <div class="col">
                                    <input type="submit" class="btn btn-outline-dark" value="Submit">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- spinner -->
    <div v-if="loading">
        <div class="container">
            <div class="row">
                <div class="col">
                    <Spinner />
                </div>
            </div>
        </div>
    </div>

    <!-- error message -->
    <div v-if="!loading && errorMessage">
        <div class="container">
            <div class="row">
                <div class="col text-center mt-3">
                    <p class="h4 text-danger fw-bold">{{ errorMessage }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-3" v-if="contacts.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="contact of contacts" :key="contact">
                <div class="card list-group-item-success shadow-lg my-2">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <img class="contact-img" alt="" :src="contact.photo">
                            </div>
                            <div class="col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Name: <span class="fw-bold">{{ contact.name }}</span></li>
                                    <li class="list-group-item">Email: <span class="fw-bold">{{ contact.email }}</span></li>
                                    <li class="list-group-item">Mobile: <span class="fw-bold">{{ contact.mobile }}</span>
                                    </li>
                                </ul>
                            </div>
                            <div
                                class="col-sm-1 d-flex flex-column justify-content-center align-items-center                       ">
                                <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning my-1"><i
                                        class="fa fa-eye"></i></router-link>
                                <router-link :to="`/contacts/edit/${contact.id}`" class="btn btn-primary my-1"><i
                                        class="fa fa-pen"></i></router-link>
                                <button class="btn btn-danger my-1"><i class="fa fa-trash"
                                        @click="clickDeleteContact(contact.id)"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import { ContactService } from '@/services/ContactService'
import Spinner from '@/components/Spinner.vue';

export default {
    name: 'ContactManager',
    components: {
        Spinner
    },
    data: function () {
        return {
            loading: false,
            contacts: [],
            errorMessage: null
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getAllContacts();
            this.contacts = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        clickDeleteContact: async function (contactId) {
            try {
                this.loading = true;
                let response = await ContactService.deleteContacts(contactId);
                if (response) {
                    let response = await ContactService.getAllContacts();
                    this.contacts = response.data;
                    this.loading = false;
                } else {

                }
            } catch (error) {
                this.errorMessage = error;
                this.loading = false;
            }
        }
    }
}
</script>
    
<style></style>