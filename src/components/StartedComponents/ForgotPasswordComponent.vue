<template>
    <div>
        <form novalidate @submit.prevent="validateUser">
            <div class="centered-container">
                <md-content class="md-elevation-3">
                    <div class="title">
                        <img src="https://vuematerial.io/assets/logo-color.png">
                        <div class="md-title">Forgot password</div>
                        <div class="md-body-1">Enter Email to recover Password</div>
                    </div>

                    <md-card-content class="form">

                            <md-field :class="getValidationClass('email')">
                                <label for="email">Email</label>
                                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                            </md-field>

                    </md-card-content>

                    <md-card-actions md-alignment="space-between">
                        <md-button type="submit" class="md-raised" :disabled="sending">Recover password</md-button>
                    </md-card-actions>

                    <div class="title forgotEmail">
                        <div class="md-title">Forgot Email</div>
                        <div class="md-body-1">Recover Link will be sent to yous second Email address you entered in Settings: altrnativemail@mail.com</div>
                    </div>

                    <md-card-actions md-alignment="space-between">
                        <md-button type="submit" class="md-raised" :disabled="sending">Recover email</md-button>
                    </md-card-actions>

                    <md-progress-bar md-mode="indeterminate" v-if="sending" />

                    <md-card-actions>
                        <md-button type="submit" class="md-primary" to="login">Login</md-button>
                    </md-card-actions>
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

    export default {
        name: 'Register',
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
                    minLength: minLength(3)
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

                // Instead of this timeout, here you can call your API
                window.setTimeout(() => {
                    this.lastUser = `${this.form.email}`
                    this.userSaved = true
                    this.sending = false
                    this.clearForm()
                }, 1500)
            },
            validateUserLogin () {
                this.$v.$touch()

                if (!this.$v.$invalid) {
                    this.saveUser()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.forgotEmail {
    padding-top: 20px;
}
</style>
