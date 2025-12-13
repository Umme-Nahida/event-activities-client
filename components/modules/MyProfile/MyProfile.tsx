"use client";

import { useState, useTransition } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Loader2, Save } from "lucide-react";
import { updateMyProfile } from "@/services/auth/auth.service";

// ---------------- DUMMY USER DATA ----------------
const dummyUser = {
  id: "3facc852-7160-4282-b270-7e66f2a961fa",
  name: "Fathiha Jahan",
  email: "fatihajahan@gmail.com",
  bio: "I love swimming, traveling and meeting new people.",
  image:
    "https://res.cloudinary.com/dwzrn00z3/image/upload/v1765629068/file-1765629066081-896289104.jpg",
  interests: ["Swimming", "Traveling", "Photography"],
  hobbies: ["Reading", "Cooking", "Hiking"],
  location: "Dhaka, Bangladesh",
  role: "HOST",
  userStatus: "ACTIVE",
};

export default function MyProfilePage({myInfo}:any) {

  const [preview, setPreview] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (formData: FormData) => {
   startTransition(async () => {
      const res = await updateMyProfile(formData);
      setMessage(res.message);

    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">Manage your personal information</p>
      </div>

      <form action={handleSubmit} className="grid gap-6 lg:grid-cols-3">
        {/* Profile Picture */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar className="h-32 w-32">
                <AvatarImage src={preview || myInfo.image} />
                <AvatarFallback>{myInfo.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <label className="absolute bottom-0 right-0 bg-primary p-2 rounded-full cursor-pointer">
                <Camera className="h-4 w-4 text-white" />
                <Input
                  type="file"
                  name="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <div className="text-center">
              <p className="font-semibold text-lg">{myInfo.name}</p>
              <p className="text-sm text-muted-foreground">{myInfo.email}</p>
              <p className="text-xs text-muted-foreground">{myInfo.role}</p>
            </div>
          </CardContent>
        </Card>

        {/* Profile Info */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {message && (
              <div className="bg-green-500/10 text-green-600 px-4 py-2 rounded">
                {message}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input name="name" defaultValue={myInfo?.name} required />
              </div>

              <div className="space-y-2">
                <Label>Email</Label>
                <Input value={myInfo?.email} disabled />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label>Bio</Label>
                <Textarea name="bio" defaultValue={myInfo?.bio} />
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <Input name="location" defaultValue={myInfo?.location} />
              </div>

              <div className="space-y-2">
                <Label>Interests (comma separated)</Label>
                <Input
                  name="interests"
                  defaultValue={myInfo?.interests.join(", ")}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label>Hobbies (comma separated)</Label>
                <Input
                  name="hobbies"
                  defaultValue={myInfo?.hobbies.join(", ")}
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
