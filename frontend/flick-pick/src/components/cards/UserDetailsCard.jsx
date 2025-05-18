import React from "react";
import CharAvatar from "./CharAvatar";

const StatsInfo = ({ label, value }) => {
  return (
    <div className="text-center">
      <p className="font-medium text-gray-950">{value}</p>
      <p className="text-xs text-slate-700/80 mt-[2px]">{label}</p>
    </div>
  );
};

const UserDetailsCard = ({
  profileImageUrl,
  fullname,
  username,
  totalPollsVotes,
  totalPollsCreated,
  totalPollsBookmarked,
}) => {
  return (
    <div className="bg-slate-100/50 rounded-lg mt-16 overflow-hidden">
      
      {/* Header with yellow background */}
      <div className="w-full h-32 bg-profile-bg--img bg-cover flex justify-center bg-[#fec51a] relative">
        <div className="absolute -bottom-10 rounded-full overflow-hidden border-2 border-[#fec51a]">
          {profileImageUrl ? (
            <img
              src={profileImageUrl || ""}
              alt="Profile Image"
              className="w-20 h-20 rounded-full"
              style={{ backgroundColor: "#fec51a" }}
            />
          ) : (
            <CharAvatar
              fullName={fullname}
              width="w-20"
              height="h-20"
              style="text-xl bg-[#fec51a] text-black"
            />
          )}
        </div>
      </div>

      {/* User Info */}
      <div className="mt-12 px-5">
        <div className="text-center pt-1">
          <h5 className="text-lg text-gray-950 font-medium leading-6">
            {fullname}
          </h5>
          <span className="text-[13px] font-medium text-slate-700/60">
            @{username}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-5 flex-wrap my-6">
          <StatsInfo label="Polls Created" value={totalPollsCreated || 0} />
          <StatsInfo label="Polls Voted" value={totalPollsVotes || 0} />
          <StatsInfo
            label="Polls Bookmarked"
            value={totalPollsBookmarked || 0}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
