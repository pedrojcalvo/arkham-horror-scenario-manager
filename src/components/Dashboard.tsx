import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-arkham-dark via-arkham-purple to-arkham-blue p-4">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-horror text-arkham-gold mb-2">
              Arkham Horror
            </h1>
            <p className="text-arkham-light/70 font-body text-lg">
              Scenario Manager
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-arkham-light font-medium">
                Welcome, {user?.user_metadata?.name || user?.email}
              </p>
              <p className="text-arkham-light/60 text-sm">Investigator</p>
            </div>

            <button
              onClick={handleSignOut}
              className="bg-arkham-gold/20 hover:bg-arkham-gold/30 border border-arkham-gold/50 
                       text-arkham-light px-4 py-2 rounded-lg transition-all duration-200
                       hover:scale-105 focus:outline-none focus:ring-2 focus:ring-arkham-gold/50"
            >
              Sign Out
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-arkham-purple/30 backdrop-blur-lg border border-arkham-gold/20 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-arkham-gold mb-4">
              My Campaigns
            </h3>
            <p className="text-arkham-light/70">
              Track your ongoing investigations and completed scenarios.
            </p>
            <button className="mt-4 bg-arkham-gold hover:bg-arkham-gold/90 text-white px-4 py-2 rounded-lg transition-all">
              View Campaigns
            </button>
          </div>

          <div className="bg-arkham-purple/30 backdrop-blur-lg border border-arkham-gold/20 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-arkham-gold mb-4">
              Scenario Library
            </h3>
            <p className="text-arkham-light/70">
              Browse and discover new scenarios to challenge your investigators.
            </p>
            <button className="mt-4 bg-arkham-gold hover:bg-arkham-gold/90 text-white px-4 py-2 rounded-lg transition-all">
              Browse Scenarios
            </button>
          </div>

          <div className="bg-arkham-purple/30 backdrop-blur-lg border border-arkham-gold/20 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-arkham-gold mb-4">
              Quick Start
            </h3>
            <p className="text-arkham-light/70">
              Create a new campaign or join an existing investigation.
            </p>
            <button className="mt-4 bg-arkham-gold hover:bg-arkham-gold/90 text-white px-4 py-2 rounded-lg transition-all">
              Start Investigation
            </button>
          </div>
        </div>

        <div className="mt-8 bg-arkham-purple/30 backdrop-blur-lg border border-arkham-gold/20 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-arkham-gold mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-arkham-dark/30 rounded-lg">
              <div>
                <p className="text-arkham-light font-medium">
                  Welcome to Arkham Horror!
                </p>
                <p className="text-arkham-light/60 text-sm">
                  Your investigation begins now...
                </p>
              </div>
              <span className="text-arkham-light/60 text-sm">Just now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
