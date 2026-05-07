import React from "react";

export default async function CatchAllRoutes({ params }) {
  const { catchAllRoutes } = await params;
  return (
    <div>
      <h1>Catch All Routes</h1>
      <p className="font-bold">custom page not found: {catchAllRoutes.join(" / ")}</p>
    </div>
  );
}
