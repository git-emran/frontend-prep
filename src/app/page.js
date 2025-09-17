"use client";

import RecursiveFileTree from "@/components/RecursiveFileTree";
import data from "@/data/filetreeData";
import useTreeTraversal from "@/hooks/useTreeTraversal";
import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import TabComponent from "@/components/TabComponent";

export default function Home() {
  const [explorerData, setExplorerData] = useState(data);
  const { insertFolder } = useTreeTraversal();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finaleTree = insertFolder(explorerData, folderId, item, isFolder);
    setExplorerData(finaleTree);
  };

  return (
    <div className="main-container">
      <div style={{ marginTop: "20px" }}>
        <SearchFilter />
      </div>
      <div style={{ marginTop: "20px" }}>
        <h1>Recursive File Tree</h1>
        <RecursiveFileTree
          handleInsertNode={handleInsertNode}
          explorer={explorerData}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <h1>Tab Component</h1>
        <TabComponent />
      </div>
    </div>
  );
}
