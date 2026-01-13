import { Section } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import TripForm from "../../components/trips/TripForm";

const AddTripPage = () => {
  return (
    <section>
      <Card className="">
        <CardHeader>
          <CardTitle>Add your Trip</CardTitle>
          <CardDescription>Full information of your trip.</CardDescription>
        </CardHeader>
        <CardContent>
          <TripForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default AddTripPage;
