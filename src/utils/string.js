export const decorateSkills = (skills) => {
  return (skills || '').split(',').map(skill => skill.trim()).join(' • ')
}