import { ref } from '@vue/composition-api';

const filterChips = ref([
  {
    label: 'Outcomes',
    color: 'green'
  },
  {
    label: 'Participants',
    color: 'blue'
  },
  {
    label: 'Projects',
    color: 'red'
  }
]);
export default filterChips;
