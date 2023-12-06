export class Text {
  static findHashtags(text: string) {
    const regex = /(#\w+)/g;
    const hashtags = text.match(regex);
    return hashtags;
  }

  static higlightHashtags = (text: string) => {
    return text.replace(/#(\w+)/g, '<span style="color: blue;">#$1</span>');
  };
}
