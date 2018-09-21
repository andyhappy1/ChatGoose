<template>
        <md-list>
            <md-list-item to="/#">
                <md-icon></md-icon>
                <span class="md-list-item-text">Overall</span>
            </md-list-item>

            <md-list-item to="/#">
                <md-icon></md-icon>
                <span class="md-list-item-text">Company A</span>
            </md-list-item>

            <md-list-item to="/#">
                <md-icon></md-icon>
                <span class="md-list-item-text">Company B</span>
            </md-list-item>
            <md-divider class="md-inset"></md-divider>
            <md-list-item to="/#">
                <md-icon>add</md-icon>
                <span class="md-list-item-text">New Company</span>
            </md-list-item>
        </md-list>

</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'CompanyHierarchy',
        components: {
        }
    }
</script>


<style lang="scss" scoped>
    .md-app-drawer {
        margin: 35px;
        width: 250px;
    }
</style>
