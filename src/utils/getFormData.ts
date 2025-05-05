export default (form: HTMLFormElement) => {
  const formData = new FormData(form)

  return Object.fromEntries(formData.entries())
} 
