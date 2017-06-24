import {TeamDetails} from './team-details';

describe('TeamDetails', () => {
  it('should create an instance', () => {
    expect(new TeamDetails()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let team = new TeamDetails({
      name: 'Barcelona',
      id: 123,
      exchanges: [{}]
    });
    expect(team.name).toEqual('Barcelona');
    expect(team.id).toEqual(123);
  });
});
