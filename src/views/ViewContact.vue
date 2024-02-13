<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p></p>
                <p class="h3 text-primary fw-bold ">View Contact
                </p>
                <p></p>
                <p class="fst-italic">:)</p>
            </div>
        </div>
    </div>
    <div class="container" v-if="!loading && isDone()">
        <div class="row">
            <div class="col-md-4">
            <img src="https://cdn-icons-png.flaticon.com/256/1747/1747829.png" alt="" class="contact-img-big">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Name : <span class="fw-bold">{{ contact.name }}</span></li>
                    <li class="list-group-item">Address : <span class="fw-bold">{{ contact.address }}</span></li>
                    <li class="list-group-item">Email : <span class="fw-bold">{{ contact.phone }}</span></li>
                    <li class="list-group-item">Phone Number : <span class="fw-bold">{{ contact.email }}</span></li>
                    <li class="list-group-item">Category : <span class="fw-bold">{{ contact.category }}</span></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <p></p>
            <p></p>
            <div class="col">
                <router-link to="/" class="btn btn-primary"><i class="fa fa-arrow-alt-circle-left"></i>
                Back </router-link>
            </div>
        </div>
    </div>
    <pre>{{ contact }}</pre>
</template>

<script>
import {ContactService} from "../../services/ContactService";


export default {
    name: "ViewContact",
    data : function (){
        return {
            contactId : this.$route.params.contactId,
            loading : false,
            contact : {},
            errorMessage : null
        }
    },
    created : async function (){
        try {
            this.loading = true;
            let response = await ContactService.getContact(this.contactId);
            this.contact = response.data;
            this.loading = false;
        }
        catch (error){
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods : {
        isDone : function (){
            return Object.keys(this.contact).length > 0;
        }
    }
}
</script>

<style scoped>

</style>