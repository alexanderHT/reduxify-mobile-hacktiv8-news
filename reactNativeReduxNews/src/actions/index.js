export const search = (title) => {
  console.log(title);
  return {
    type: 'SEARCH_TITLE_NEWS',
    payload: title
  }
}
