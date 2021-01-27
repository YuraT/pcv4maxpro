describe('guide sequence', () => {
  it('has two elements');
});
describe('sequence modules', () => {
  it('Can go to the next page in the program guide');
  it('Can restrict access to unidentified users');
  it('Can track completion of the current page');
  it('Goes to the previous page by modifying the route params ');
  it('Goes to the next page by modifying route props');
});
/*
!! A SEQUENCE contains a MODULE(s) which holds a NODE(s)
  + Sequence always has (developer defined) two Modules
  + Modules can add nodes
  + Modules can remove nodes
  + Modules can re-order nodes
  + Modules point to next node
  + Modules point to previous node
  + Modules have a state
    + name
    + status
    + color
  + Nodes have a state
    + name
    + status
*/
