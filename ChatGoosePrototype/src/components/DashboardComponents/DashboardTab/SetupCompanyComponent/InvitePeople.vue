<template>
    <div class="invitePeople">
        <form novalidate @submit.prevent="validatePeople">
            <div class="md-layout">
                <div class="md-layout-item choiseUsers">
                    <md-field :class="getValidationClass('email')">
                        <label for="email">Invite People</label>
                        <md-input type="email" name="email" id="email" v-model="form.email" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                        <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                    </md-field>
                </div>
                <div class="md-layout-item md-size-20 choiseUsers">
                    <md-field :class="getValidationClass('role')">
                        <label for="role">Role</label>

                        <md-select v-model="form.role" name="role" id="role"  :disabled="sending">
                            <md-optgroup label="Roles">
                                <md-option value="user">
                                    User
                                </md-option>
                                <md-option value="admin">
                                    Admin
                                </md-option>
                            </md-optgroup>
                        </md-select>
                        <span class="md-error" v-if="!$v.form.role.required">The role is required</span>
                    </md-field>
                </div>
                <div class="md-layout-item md-size-20 choiseUsers">
                    <md-button class="md-primary md-raised" type="submit" :disabled="sending" style="margin-top: 10%;">Invite</md-button>
                </div>
            </div>
        </form>
        <div class="peopleInCompany">
            <h1 class="peopleInCompanyTitle">People in Company</h1>
            <div class="full-control">
                <md-list>
                    <md-list-item v-for="peopleInCompany in peoplesInCompany" :key="peopleInCompany.id">
                        <span class="md-list-item-text">{{peopleInCompany.email}}</span>
                        <span class="md-list-item-text">{{peopleInCompany.role}}</span>
                    </md-list-item>
                </md-list>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import { validationMixin } from 'vuelidate'
    import {
        required,
        email
    } from 'vuelidate/lib/validators'
    import axios from "axios"

    export default {
        name: 'invitePeople',
        components: {

        },
        mixins: [validationMixin],
        data: () => ({
            peoplesInCompany: [
            ],
            form: {
                email: null,
                role: null
            },
            userSaved: false,
            sending: false,
            lastUser: null
        }),
        validations: {
            form: {
                email: {
                    required,
                    email
                },
                role: {
                    required
                }
            }
        },
        beforeMount() {
            var user = JSON.parse(localStorage.getItem('user'))
            this.peoplesInCompany.push({
                email: user.email,
                role: "owner"
            })
        },
        methods: {
            getValidationClass (fieldName) {
                const field = this.$v.form[fieldName]

                if (field) {
                    return {
                        'md-invalid': field.$invalid && field.$dirty
                    }
                }
            },
            clearForm () {
                this.$v.$reset()
                this.form.email = null
                this.form.role = null
            },
            invitePeople () {
                this.sending = true

                const formData = new FormData();
                formData.append("email", this.form.email);
                formData.append("role", this.form.role)
                // Post to server
                // axios.post("http://localhost:3128/login", formData).then(res => {
                //     console.log(res)
                // })
            },
            validatePeople () {
                this.$v.$touch()

                if (!this.$v.$invalid) {
                    this.invitePeople()
                }
            },
            setCookie (name, value, seconds) {
                const expires = seconds ? '; expires=' + new Date(new Date().getTime() + seconds * 1000).toGMTString() : ''
                document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/'
            }
        }
    }
</script>


<style lang="scss" scoped>
    .md-app {
        height: 100%;
        width: 100%;
        position: fixed;
    }
    .md-app .md-content.md-theme-default {
        border: 0px;
    }
    .md-card {
        width: 420px;
        height: 205px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
    .md-app-drawer {
        margin: 35px;
        width: 250px;
    }
    .title {
        text-align: left;
        margin-top: 150px;
        font-size: 50px;
    }
    .md-layout-item {
        padding: 20px;
    }
    .md-app-content {
        width: 70%;
        margin: auto;
    }
    .choiseUsers {
        padding: 5px;
        padding-top: 0;
    }
    .peopleInCompanyTitle{
        text-align: left;
    }

</style>
