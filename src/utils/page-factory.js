export function pageFactoryByTemplate(template, object) {
  const {path: templatePath, title: templateTitle, parent} = template;
  const path = formatByObjectAttributes(templatePath, object);
  const title = formatByObjectAttributes(templateTitle, object);

  return pageFactory(path, title, parent);
}

function formatByObjectAttributes(string, object) {
  return Object.keys(object).reduce(
    (newString, attribute) => {
      return newString.replace(`:${attribute}`, object[attribute]);
    },
    string
  );
}

export function pageFactory(path, title, parent) {
  return {path, title, parent};
}
