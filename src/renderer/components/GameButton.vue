<template>
    <button class="btn">
        <slot></slot>
    </button>

</template>

<script>
    
</script>

<style scoped>
    .btn {
        background: none;
        font-size: 20px;
        color:white;
        margin-top: 10px;
        border: 3px solid #234f3a;
        border-radius: 10px;
        background: #234f3a;
        padding: 10px 25px;
        font-family: "Fira Sans", sans-serif;
        font-size: 26px;
    }
    .btn:hover {
        background-color: #86b099;
        color: #402e1a;
        border-color: #402e1a;
    }
</style>