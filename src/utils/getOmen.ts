export const getOmen = (question: string) => {
  const refinedQuestion = question.split('').reduce((prev, cur) => prev += cur.charCodeAt(0),0);
  const elixer = 2;
  return (refinedQuestion % elixer); 
}
