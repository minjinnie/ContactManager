<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p></p>
                <p class="h3 text-primary fw-bold ">Edit Contact
                </p>
                <p></p>
                <p class="fst-italic">Edit your contact here!</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="updateSubmit">
                    <div class="mb-2">
                        <input v-model="contact.name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.address" type="text" class="form-control" placeholder="Address">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.phone" type="number" class="form-control" placeholder="Phone number">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.category" type="category" class="form-control" placeholder="Category">
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-primary" value="Update">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="https://cdn-icons-png.flaticon.com/256/1747/1747829.png" alt="" class="contact-img">
            </div>
        </div>
    </div>
    <pre>{{ contact }}</pre>
</template>

<script>
import {ContactService} from "../../services/ContactService";

export default {
    name: "EditContact",
    data : function (){
        return {
            contactId : this.$route.params.contactId,
            loading : false,
            contact : {
                name : '',
                address : '',
                phone : '',
                email : '',
                category : ''
            },
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
        updateSubmit : async function (){
            try {
                let response = await ContactService.updateContact(this.contact, this.contactId);
                if(response){
                    return this.$router.push('/');
                }
                else {
                    return this.$router.push(`/contacts/edit/${this.contactId}`)
                }
            }
            catch (error){
                console.log(error)
            }
        }
    }
}

</script>

<style scoped>

</style>