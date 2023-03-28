export const instagramName = '@miguelmarchphoto';
export const instagramUrl = 'https://www.instagram.com/miguelmarchphoto/';

export const githubName = 'miguelMarchPiris';
export const githubUrl = 'https://github.com/miguelMarchPiris';

export const locationBcn = 'Barcelona, Spain';

const today = new Date();
const birthdate = new Date('1999-07-01');

let ageForComputing = today.getFullYear() - birthdate.getFullYear();
// If the birth month and day haven't passed yet this year, subtract one from the age
if (
  today.getMonth() < birthdate.getMonth() ||
  (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())
) {
  ageForComputing--;
}

export const age = ageForComputing;
