<template>
    <md-card>
        <md-card-header>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">Bot list</div>
                </md-card-header-text>
            </md-card-header>
            <div class="full-control">
                <md-list>

                    <md-list-item>
                        <span class="md-list-item-text">Welcome 1</span>
                        <span class="md-list-item-text">Telegram</span>
                        <span class="md-list-item-text">3 Channels</span>
                        <span class="md-list-item-text">Company A</span>
                        <md-switch  />
                        <md-icon>edit</md-icon>
                    </md-list-item>

                    <md-list-item>
                        <span class="md-list-item-text">Welcome 2</span>
                        <span class="md-list-item-text">Slack</span>
                        <span class="md-list-item-text">1 Channels</span>
                        <span class="md-list-item-text">Company A</span>
                        <md-switch  />
                        <md-icon>edit</md-icon>
                    </md-list-item>
                </md-list>
            </div>
        </md-card-header>

        <!--<md-card-actions style="margin-top: 90px;">-->
            <!--<md-button class="md-raised md-accent">Edit Bots</md-button>-->
        <!--</md-card-actions>-->
    </md-card>

</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'BotList',
        components: {
        }
    }
</script>


<style lang="scss" scoped>
    .md-card-header-text {
        text-align: left;
    }
    .md-button {
        width: 800px;
    }
    .md-card {
        height: 720px;
    }
</style>
