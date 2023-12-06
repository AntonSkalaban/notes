export const findHashtags = (text: string) => {
  const regex = /(#\w+)/g;
  const hashtags = text.match(regex);
  return hashtags;
};

export const getHiglightText = (text: string) => {
  return text.replace(/#(\w+)/g, '<span style="color: blue;">#$1</span>');
};
