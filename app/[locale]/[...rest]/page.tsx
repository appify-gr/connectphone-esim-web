import { notFound } from "next/navigation";

//-------------------------------------------------------------------------

//catch all undefined routes and redirect to not-found
export default function CatchAllPage() {
  notFound();
}
