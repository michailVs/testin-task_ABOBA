<script lang="ts">
    export let options: string[] = []
    export let selectedOption: string | undefined
</script>

<select bind:value={selectedOption}>
    {#each options as option}
        <option value={option}>{option}</option>
    {/each}
</select>