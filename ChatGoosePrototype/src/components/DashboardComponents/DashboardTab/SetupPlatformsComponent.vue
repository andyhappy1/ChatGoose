<template>
    <md-card class="tutorial">
        <md-card-header class="md-primary">
            <md-card-header-text class="md-primary" >
                <div class="md-title">Platforms</div>
                <div class="md-subhead">Complete all stages to add Platform and Create Bot</div>
            </md-card-header-text>

        </md-card-header>


        <md-app-content>
            <md-tabs>
                <md-tab id="tab-home" md-label="Telegram"></md-tab>
                <md-tab id="tab-pages" md-label="Twitter"></md-tab>
                <md-tab id="tab-posts" md-label="Slack"></md-tab>
            </md-tabs>

            <div class="full-control">
                <md-list>

                    <md-list-item>
                        <span class="">1. </span>
                        <span class="md-list-item-text">  Open up Telegram. Download here: https://desktop.telegram.org/</span>
                        <md-checkbox v-model="boolean" class="md-primary"></md-checkbox>
                    </md-list-item>

                    <md-list-item>
                        <span class="">2.</span>
                        <span class="md-list-item-text">Search for @BotFather or go to https://telegram.me/botfath</span>
                        <md-checkbox v-model="boolean" class="md-primary"></md-checkbox>
                    </md-list-item>

                    <md-list-item>
                        <span class="">3.</span>
                        <span class="md-list-item-text">Enter the following: /newbot. Select /newbot</span>
                        <md-checkbox v-model="boolean" class="md-primary"></md-checkbox>
                    </md-list-item>

                    <md-list-item>
                        <span class="">4. </span>
                        <span class="md-list-item-text"> “Alright a bot. How are we going to call it? Please choose a name for your bot.” Name of your bot</span>
                        <div class="md-list-item md-small-size-40">
                            <md-field >
                                <label for="bot-name">Bot Name</label>
                                <md-input name="first-name" id="bot-name" autocomplete="given-name"  :disabled="sending" />
                            </md-field>
                        </div>
                    </md-list-item>

                    <md-list-item>
                        <span class="">5.</span>
                        <span class="md-list-item-text">“Good.  Now let’s choose a username for your bot.  It must end in “bot”.<br/>  Like this for example:  TetrisBot
or tetris_bot.  Username for Bot It will be at t.me/name of bot (Has to end in bot)</span>
                        <div class="md-list-item md-small-size-40">
                            <md-field >
                                <label for="bot-id">Bot ID (ends with bot)</label>
                                <md-input name="first-name" id="bot-id" autocomplete="given-name"  :disabled="sending" />
                            </md-field>
                        </div>
                    </md-list-item>

                    <md-list-item>
                        <span class="">6.</span>
                        <span class="md-list-item-text">BotFather will give you a HTTP API token which follows a pattern like<br/>
123456789:AABBCCDD_abcdefghijklmnopqrstuvwxyz</span>
                        <div class="md-list-item md-small-size-40">
                            <md-field >
                                <label for="token-address">Token Address</label>
                                <md-input name="first-name" id="token-address" autocomplete="given-name"  :disabled="sending" />
                            </md-field>
                        </div>
                    </md-list-item>
                </md-list>
                <md-card-actions>
                    <md-button class="md-raised md-primary">Add Platform</md-button>
                </md-card-actions>
            </div>

        </md-app-content>
    </md-card>

</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'SetupPlatform',
        components: {
        }
    }
</script>


<style lang="scss" scoped>
    .md-card-header-text {
        text-align: left;
    }
</style>
