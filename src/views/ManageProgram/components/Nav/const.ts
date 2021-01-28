import { ref } from '@vue/composition-api';

const items = ref([
  { title: 'Detail', color: 'purple' },
  { title: 'Setup', color: 'orange' },
  { title: 'Manage', color: 'blue' },
  { title: 'Participants', color: 'green' },
  { title: 'Stakeholders', color: 'red' }
]);

export default items;
