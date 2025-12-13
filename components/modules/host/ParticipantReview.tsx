"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahim Uddin",
    avatar: "",
    rating: 5,
    comment: "Event ta onek bhalo chilo. Host khub cooperative chilo!",
    date: "12 Dec 2025",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    avatar: "",
    rating: 4,
    comment: "Overall experience bhalo, but time management aro better hole valo hoto.",
    date: "10 Dec 2025",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    avatar: "",
    rating: 5,
    comment: "Highly recommended! Abaro attend korbo.",
    date: "8 Dec 2025",
  },
];

export default function ParticipantReviews() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <Card key={review.id} className="rounded-2xl shadow-sm">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={review.avatar} />
                <AvatarFallback>{review.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </div>

            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <p className="text-sm text-muted-foreground">{review.comment}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
