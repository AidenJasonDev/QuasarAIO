<script>
export default {
    name: "Textbox"
}
</script>

<template>
    <div class="textbox">
        <input type="text" id="Wehbook" class="textbox__input" autocomplete="off" placeholder=" ">
        <label for="Webhook" class="textbox__label">Discord Webhook URL</label>
    </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.textbox {
  position: relative;
  width: 20rem;
  height: 3rem;
}
.textbox__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #424156;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    color: #666582;
    outline: none;
    padding: 1.25rem;
    background: none;
}
.textbox__input:hover {
    border-color: #7D7AAE;
}
.textbox__input:focus {
    border-color: #6A6FED;
}
.textbox__label {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    padding: 0 0.5rem;
    color: #666582;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
}
.textbox__input:focus ~ .textbox__label, .textbox_input:not(:placeholder-shown).textbox__input:not(:focus)~.textbox__label {
  top: -0.5rem;
  font-size: 0.8rem;
  left: 0.8rem;
}
</style>