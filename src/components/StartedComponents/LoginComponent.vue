<template>
    <div>
        <form novalidate @submit.prevent="validateUserLogin">
            <div class="centered-container">
                <md-content class="md-elevation-3">
                    <div class="title">
                        <img src="https://vuematerial.io/assets/logo-color.png">
                        <div class="md-title">LogIn</div>
                        <div class="md-body-1">Build beautiful bots with ChatGoose</div>
                    </div>

                    <md-card-content class="form">

                            <md-field :class="getValidationClass('email')">
                                <label for="email">Email</label>
                                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                            </md-field>

                            <md-field :class="getValidationClass('password')">
                                <label>Password</label>
                                <md-input v-model="form.password" type="password" name="password" :disabled="sending"></md-input>
                                <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
                                <span class="md-error" v-else-if="!$v.form.password.password">Invalid email</span>
                            </md-field>

                        </md-card-content>

                    <md-progress-bar md-mode="indeterminate" v-if="sending" />

                    <div class="actions md-layout md-alignment-center-space-between">
                        <md-button to="resetpassword">Forgot password</md-button>
                        <md-card-actions>
                            <md-button class="md-primary" to="register">Registration</md-button>
                            <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
                        </md-card-actions>
                    </div>
                </md-content>
            </div>
            <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
        </form>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import {
        required,
        email,
        minLength
    } from 'vuelidate/lib/validators'
    import { mapMutations } from 'vuex'
    import axios from "axios"

    export default {
        name: 'Login',
        mixins: [validationMixin],
        data: () => ({
            form: {
                password: null,
                email: null,
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
                password: {
                    required,
                    minLength: minLength(6)
                }
            }
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
                this.form.password = null
                this.form.email = null
            },
            saveUser () {
                this.sending = true

                const formData = new FormData();
                formData.append("email", this.form.email);
                formData.append("password", this.form.password)
                // Post to server
                axios.post("http://localhost:3128/login", formData).then(res => {
                    console.log(res)
                    if (res.data.status == true) {
                        // store the data in localStorage
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("user", JSON.stringify(res.data.user));
                        this.setCookie('user', JSON.stringify(res.data.user), 3600 * 24 * 7)
                        this.setIsUserAuthenticated(true)
                        this.lastUser = `${this.form.email}`
                        this.userSaved = true
                        this.sending = false
                        this.clearForm()
                        this.$router.push({name: 'dashboard'})
                        // now send the user to the next route
                        // this.$router.push({
                        //     name: "Dashboard"
                        // });
                    } else {
                        // this.status = res.data.message;
                    }
                })
            },
            validateUserLogin () {
                this.$v.$touch()

                if (!this.$v.$invalid) {
                    this.saveUser()
                }
            },
            setCookie (name, value, seconds) {
                const expires = seconds ? '; expires=' + new Date(new Date().getTime() + seconds * 1000).toGMTString() : ''
                document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/'
            },
            ...mapMutations({
                setIsUserAuthenticated: 'SET_IS_USER_AUTHENTICATED'
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
