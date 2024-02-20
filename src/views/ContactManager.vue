<template>
    <div class="container mt3">
        <div class="row">
            <div class="col">
                <p></p>
                <p class="h3 text-primary fw-bold ">Web Developer Test
                    <router-link to ="/contacts/add" class="btn btn-primary btn-sm">
                        <i class="fa fa-plus-circle"></i> New
                    </router-link>
                </p>
                <p></p>
                <p class="fst-italic">Life and Science Department Web Developer</p>
            </div>
        </div>
    </div>

    <div v-if="!loading && errorMessage">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="h3 text-danger fw-bold">{{ errorMessage }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-3" v-if="contacts.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="contact of contacts" :key="contact">
                <div class="card my-2 list-group-item-success shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-ceneter">
                            <div class="col-sm-4">
                                <img src="data:image/png;base64,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" alt="" class="contact-img">
                            </div>
                            <div class="col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Name : <span class="fw-bold">{{contact.name}}</span></li>
                                    <li class="list-group-item">Email : <span class="fw-bold">{{contact.email}}</span></li>
                                    <li class="list-group-item">Mobile : <span class="fw-bold">{{contact.phone}}</span></li>
                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                                <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning my-1"><i class="fa fa-eye"></i>
                                </router-link>
                                <router-link :to="`/contacts/edit/${contact.id}`" class="btn btn-primary my-1">
                                <i class="fa fa-pen"></i>
                                </router-link>

                                <button class="btn btn-danger my-1" @click="clickDeleteContact(contact.id)"><i class="fa fa-trash">
                                </i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ContactService} from "../../services/ContactService";

export default {
    name: "ContactManager",
    data: function (){
        return {
            loading : false,
            contacts : [],
            errorMessage : null
        }
    },
    created : async function (){
        try {
            this.loading = true;
            let response = await ContactService.getAllContacts();
            this.contacts = response.data;
        }
        catch (error){
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods : {
        clickDeleteContact : async function(contactId) {
            try {
                this.loading = true;
                let response = await ContactService.deleteContact(contactId);
                if(response){
                    let response = await ContactService.getAllContacts();
                    this.contacts = response.data;
                    this.loading = false;
                }
            } catch (error) {
                this.errorMessage = error;
                this.loading = false;
            }

        }
    }
}
</script>

<style scoped>

</style>