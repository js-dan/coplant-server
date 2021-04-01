import AppUser from '@models/AppUser'

test('it should be ok', () => {
  const appUser = new AppUser()

  appUser.name = 'Diego';

  expect(appUser.name).toEqual('Diego')
})
