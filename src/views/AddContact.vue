<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Add Contact</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sit consectetur sunt
                    recusandae ipsum officia dignissimos soluta fuga, sed consequuntur tempora dicta voluptatibus corrupti
                    labore a dolorum iusto ea dolorem!</p>
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

    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitCreate()">
                    <div class="mb-2">
                        <input required v-model="contact.name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.photo" type="text" class="form-control" placeholder="Photo URL">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.mobile" type="number" class="form-control" placeholder="Mobile">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.company" type="text" class="form-control" placeholder="Company">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.title" type="text" class="form-control" placeholder="Title">
                    </div>
                    <div class="mb-2">
                        <select required v-model="contact.groupId" v-if="groups.length > 0" class="form-control">
                            <option value="">Select Group</option>
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Create">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img class="contact-img shadow-lg" :src="contact.photo">
            </div>
        </div>
    </div>
</template>
    
<script>
import { ContactService } from '@/services/ContactService';
import Spinner from '@/components/Spinner.vue';

export default {
    name: 'AddContact',
    components: {
        Spinner
    },
    data: function () {
        return {
            contact: {
                name: "",
                photo: "",
                email: "",
                mobile: "",
                company: "",
                title: "",
                groupId: ""
            },
            groups: [],
        }
    },
    created: async function () {
        try {
            let response = await ContactService.getAllGroups();
            this.groups = response.data;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        submitCreate: async function () {
            try {
                let response = await ContactService.createContacts(this.contact);
                if (response) {
                    return this.$router.push('/');
                } else {
                    return this.$router.push('/contacts/add');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
    
<style></style>