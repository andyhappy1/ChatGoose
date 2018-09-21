<template>
    <md-card class="full_height">
        <md-card-header>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">Welcome Message Script (1 message)</div>
                </md-card-header-text>
            </md-card-header>
            <div class="full-control">
                <div class="scrypt_choising">
                <md-autocomplete
                        v-model="selectedEmployee"
                        :md-options="employees"
                        md-layout="box"
                        md-dense>
                    <label>Type Script Name or Choose existing</label>
                </md-autocomplete>
                <div class="save_button">
                    <md-button class="md-raised md-accent">Save</md-button>
                </div>
                </div>

                <md-card class="message">
                    <md-card-header>
                        <md-card-header-text>
                            <div class="md-title">Edit this box and add your own message</div>
                            <div class="md-subhead">SAMPLE:</div>
                        </md-card-header-text>

                        <md-menu md-size="big" md-direction="bottom-end">
                            <md-button class="md-icon-button" md-menu-trigger>
                                <md-icon>delete</md-icon>
                            </md-button>

                        </md-menu>
                    </md-card-header>

                    <md-card-content>
                        Welcome to PlayDFS
                        Please Register and get
                        free token . www.link.com
                    </md-card-content>

                </md-card>

                <md-button class="md-raised add_message">Add Message</md-button>


            </div>
        </md-card-header>

        <md-card-actions>
            <div class="md-toolbar-section-start">
                <md-button class="md-raised">Copy Blocks</md-button>
                <md-button class="md-raised">Paste Blocks</md-button>
            </div>

            <md-button class="md-raised md-accent">Save</md-button>
        </md-card-actions>
    </md-card>

</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'BotList',
        components: {
        },
        data: () => ({
            selectedEmployee: null,
            employees: [
                'Jim Halpert',
                'Dwight Schrute',
                'Michael Scott',
                'Pam Beesly',
                'Angela Martin',
                'Kelly Kapoor',
                'Ryan Howard',
                'Kevin Malone',
                'Creed Bratton',
                'Oscar Nunez',
                'Toby Flenderson',
                'Stanley Hudson',
                'Meredith Palmer',
                'Phyllis Lapin-Vance'
            ]
        })
    }
</script>


<style lang="scss" scoped>
    .md-card-header-text {
        text-align: left;
    }
    .md-card {
        margin: 20px 0 20px 20px;
        vertical-align: top;
    }
    .scrypt_choising {
        display: flex;
    }
    .save_button {
        padding: 5px 0 5px 0;
        .md-raised {
            height: 46px;
        }
    }
    .message {
        margin: 0px 0 20px 0px;
    }
    .add_message {
        width: 100%;
    }
    .md-card-header .md-button:last-child {
        margin-right: 0px;
    }
    .full_height {
        height: 100%;
    }
    .md-card-actions {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 15px;
    }
</style>
