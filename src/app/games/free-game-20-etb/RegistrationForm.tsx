"use client";

import { registerNewGameUser } from "@/actions/freeGameUser.action";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { GiSpeedBoat } from "react-icons/gi";
import PhoneInput from "react-phone-input-2";
import { toast } from "sonner";

function RegistrationForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? localStorage.getItem("isRegistered")
        : null;

    if (stored) {
      setIsRegistered(true);
    }
  }, []);

  useEffect(() => {
    if (isRegistered && typeof window !== "undefined") {
      localStorage.setItem("isRegistered", "true");
    }
  }, [isRegistered]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegistered) {
      toast.error("You have already registered");
      return;
    }

    if (!phoneNumber || phoneNumber.length !== 12) {
      toast.error("Please enter your real phone number");
      return;
    }

    try {
      setLoading(true);
      const response = await registerNewGameUser({ phone: phoneNumber });

      if (response.success) {
        setIsRegistered(true);
        toast.success(response.message);
        return;
      }

      if (response.error) {
        toast.error(response.message);
        return;
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return isRegistered ? (
    <div className="flex flex-col gap-5 h-screen w-full items-center justify-center p-3">
      <FaCheck size={45} className="text-green-500" />
      <b>Account registered</b>
    </div>
  ) : (
    <div className="flex w-full h-screen items-center justify-center p-3">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[300px] h-full max-h-fit p-4 shadow-md flex flex-col gap-3"
      >
        <Logo />
        <h3 className="text-2xl font-bold text-slate-500 text-center">
          Register and try your chance
        </h3>
        <p className="text-sm text-center">
          Your phone will not be visible except only for you
        </p>

        <PhoneInput
          country="et"
          value={phoneNumber}
          onChange={(phone) => setPhoneNumber(phone)}
          inputClass="max-w-full"
        />

        <p className="text-sm text-center">
          You will be paid with this phone number only on telebirr
        </p>

        <Button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center cursor-pointer"
        >
          {loading ? "Registering..." : "Register"}
          <GiSpeedBoat className="shrink-0" size={40} />
        </Button>
      </form>
    </div>
  );
}

export default RegistrationForm;
