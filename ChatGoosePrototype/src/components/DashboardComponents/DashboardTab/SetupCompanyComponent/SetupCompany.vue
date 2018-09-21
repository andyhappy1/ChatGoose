<template>
    <div class="setupCompany">
        <div class="page-container">
            <md-app md-mode="flexible">

                <md-app-content>
                    <form novalidate @submit.prevent="validateCompany">
                        <h1 class="title">New Company</h1>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                                <md-field :class="getValidationClass('name')">
                                    <label for="name">Company Name</label>
                                    <md-input type="text" name="companyName" id="name" v-model="form.name" :disabled="sending" />
                                    <span class="md-error" v-if="!$v.form.name.required">The company name is required</span>
                                </md-field>
                            </div>
                            <div class="md-layout-item">
                                <InvitePeople/>
                                <!--<div class="md-layout">-->
                                    <!--<div class="md-layout-item choiseUsers">-->
                                        <!--<md-field :class="getValidationClass('email')">-->
                                            <!--<label for="email">Invite People</label>-->
                                            <!--<md-input type="email" name="email" id="email" v-model="form.email" :disabled="sending" />-->
                                            <!--<span class="md-error" v-if="!$v.form.email.required">The company name is required</span>-->
                                        <!--</md-field>-->
                                    <!--</div>-->
                                    <!--<div class="md-layout-item md-size-20 choiseUsers">-->
                                        <!--<md-field>-->
                                            <!--<label for="role">Role</label>-->
                                            <!--<md-select v-model="role" name="role" id="role">-->
                                                <!--<md-option value="user">-->
                                                    <!--<h4>User</h4>-->
                                                    <!--<p>Can view Bot messages, Analytics</p>-->
                                                <!--</md-option>-->
                                                <!--<md-option value="admin">-->
                                                    <!--<h4>Admin</h4>-->
                                                    <!--<p>Full access to Bot messages, Analytics</p>-->
                                                <!--</md-option>-->
                                            <!--</md-select>-->
                                        <!--</md-field>-->
                                    <!--</div>-->
                                    <!--<div class="md-layout-item md-size-20 choiseUsers">-->
                                        <!--<md-button class="md-primary md-raised" type="submit" :disabled="sending" style="margin-top: 10%;">Invite</md-button>-->
                                    <!--</div>-->
                                <!--</div>-->
                            </div>
                        </div>
                    </form>
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
        email
    } from 'vuelidate/lib/validators'
    import axios from "axios"
    import InvitePeople from '@/components/DashboardComponents/DashboardTab/SetupCompanyComponent/InvitePeople.vue'

    export default {
        name: 'setupCompany',
        components: {
            InvitePeople
        },
        mixins: [validationMixin],
        data: () => ({
            form: {
                name: null
            },
            userSaved: false,
            sending: false,
            lastUser: null
        }),
        validations: {
            form: {
                name: {
                    required
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
                this.form.name = null
            },
            saveCompany () {
                this.sending = true

                const formData = new FormData();
                formData.append("email", this.form.email);
                formData.append("password", this.form.password)
                // Post to server
                axios.post("http://localhost:3128/login", formData).then(res => {
                    console.log(res)
                })
            },
            validateCompany () {
                this.$v.$touch()

                if (!this.$v.$invalid) {
                    this.saveCompany()
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

</style>
