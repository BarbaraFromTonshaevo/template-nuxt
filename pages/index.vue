<template>
    <h1>Home</h1>
    <ul class="list">
        <li class="item">1</li>
        <li class="item">2</li>
        <li class="item">3</li>
        <li class="item">4</li>
        <li class="item">5</li>
        <li class="item">6</li>

    </ul>
</template>

<style>
.list{
    display: flex;
    flex-direction: column;
    gap: 80px;
}
@media(max-width: 766px){
    .list{
        color: red;
    }
}
@media(max-width: 1024px){
    .list{
        color: blue;
        background-color: yellow;
    }
}
@media(max-width: 1024px){
    .list{
        gap: 30px;
    }
}
</style>