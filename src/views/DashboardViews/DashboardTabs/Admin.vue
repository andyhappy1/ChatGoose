<template>
    <div class="dashboard">
        <div class="page-container">
            <md-app md-mode="flexible">

                <md-app-content>
                    <h1 class="title">Admin</h1>
                    <div class="md-layout">

                        <div class="md-layout-item">
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
                        </div>
                        <div class="md-layout-item">
                            <md-field :class="getValidationClass('email')">
                                <label for="email">Alternative Email (needed for Recovering Account)</label>
                                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                            </md-field>
                        </div>
                        <div class="md-layout-item">
                            <h1>Companies 5 Companies</h1>
                            <md-list>
                                <md-list-item>
                                    <span class="md-list-item-text">Company A</span>
                                    <md-icon>star_rate</md-icon>
                                </md-list-item>

                                <md-list-item>
                                    <span class="md-list-item-text">Company B</span>
                                </md-list-item>

                                <md-list-item>
                                    <span class="md-list-item-text">Company C</span>
                                    <md-icon>star_rate</md-icon>
                                </md-list-item>

                                <md-list-item>
                                    <span class="md-list-item-text">Company D</span>
                                    <md-icon>star_rate</md-icon>
                                </md-list-item>

                                <md-list-item>
                                    <span class="md-list-item-text">Company E</span>
                                </md-list-item>


                            </md-list>
                        </div>
                    </div>
                </md-app-content>
            </md-app>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import { validationMixin } from 'vuelidate'
    import {
        required,
        email,
        minLength
    } from 'vuelidate/lib/validators'

    export default {
        name: 'buy',
        components: {
        },
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
    .md-app {
        height: 100%;
        width: 100%;
        position: fixed;
        border: 1px solid rgba(#000, .12);
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
        margin: 100px;
        margin-left: 250px;
        font-size: 50px;
    }
    .md-layout-item {
        padding: 20px;
    }

</style>
