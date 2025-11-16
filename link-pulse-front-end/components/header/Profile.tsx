'use client'
import { useProfile } from "@/hooks/useProfile";
import { Loader } from "../UI/Loader";
import { NegativeButton, SecondaryButton } from "../UI/buttons";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export const Profile = () => {
    const { profile, isLoading } = useProfile();
    const router = useRouter();
    const {mutate} = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess: () => router.push('/auth')
    })

    return (
        <div className="flex items-center">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex gap-3 items-center">
                    <div className="text-right flex flex-col">
                        <h4
                            className=" font-bold text-(--color-tertiary) tracking-wider -mb-1"
                        >
                            {profile?.user.name || 'Гость'}
                        </h4>
                        <p className="font-orbitron text-sm text-white/60 tracking-wide">
                            {profile?.user.email}
                        </p>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center text-xl text-white bg-(--color-secondary) rounded-lg uppercase font-orbitron">
                        {profile?.user.name?.charAt(0) || 'A'}
                    </div>
                    <NegativeButton onClick={() => mutate()} className="min-w-24"><LogOut /></NegativeButton>
                </div>
            )}
        </div>
    )
}