<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p></p>
                <p class="h3 text-primary fw-bold ">Add Contact
                </p>
                <p></p>
                <p class="fst-italic">Add your contact here!</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitCreate()">
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
                        <input v-model="contact.category" type="text" class="form-control" placeholder="Category">
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-primary" value="Create">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="https://cdn-icons-png.flaticon.com/256/1747/1747829.png" alt="" class="contact-img">
            </div>
        </div>
    </div>
</template>

<script>
import {ContactService} from "../../services/ContactService";

export default {
    name: "AddContact",
    data : function (){
        return {
            contact : {
                name : '',
                address : '',
                phone : '',
                email : '',
                category : ''
            }
        }
    },
    methods : {
        submitCreate : async function (){
            try {
                let response = await ContactService.createContact(this.contact);
                if(response){
                    return this.$router.push('/');
                }
                else {
                    return this.$router.push('/contacts/add')
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