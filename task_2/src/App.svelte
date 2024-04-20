<script lang="ts">
  import type { IData } from './inteface.ts'
  import { getRatio } from "./API/api";
  import Input from "./components/input.svelte";
  import Select from "./components/select.svelte";
  let data: IData = {}
  let isLoad = false
  let firstSelectData = ''
  let secondSelectData = ''
  let firstInput = 1
  let secondInput = 0
  onload = async () => {
    data = await getRatio('RUB')
    firstSelectData = Object.keys(data)[0]
    secondSelectData = 'USD'
    secondInput = firstInput * data[secondSelectData]
    isLoad = true
  }
  $: if(firstSelectData) {
    fetchData()
  }
  $: if (secondSelectData) {
    number('second')
  }
  $: if (secondInput) {
    number('first')
  }
  function number(numTitle = 'first') {
    if (numTitle === 'first') {
      firstInput = secondInput / data[secondSelectData]
    } else if (numTitle === 'second') {
      secondInput = firstInput * data[secondSelectData]
    }
  }
  async function fetchData() {
    data = await getRatio(firstSelectData)
    secondInput = firstInput * data[secondSelectData]
  }
</script>

<main>
  {#if !isLoad}
    <p>Loading...</p>
  {:else}
    <Input bind:value={firstInput} />
    <Select options={Object.keys(data)} bind:selectedOption={firstSelectData}/>
    <Input bind:value={secondInput} />
    <Select options={Object.keys(data)} bind:selectedOption={secondSelectData}/>
  {/if}
</main>
