const useTreeTraversal = () => {
  function insertFolder(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestFileTree = [];
    latestFileTree = tree.items.map((obj) => {
      return insertFolder(obj, folderId, item, isFolder);
    });

    return { ...tree, items: latestFileTree };
  }

  return { insertFolder };
};

export default useTreeTraversal;
