document.getElementById("processBtn").onclick = async () => {
    const fileInput = document.getElementById("fileInput");
    if (!fileInput.files.length) return;
    const filePath = fileInput.files[0].path;
  
    // For now just show the selected file
    document.getElementById("status").innerText = "Selected file: " + filePath;
  };
  