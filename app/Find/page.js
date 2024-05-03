import AutomaticRent from "@/components/AutomaticRent";
import BillingDashboard from "@/components/BillingDashboard";
import BusinessDashboard from "@/components/BusinessDashboard";
import ExpenseRecord from "@/components/ExpenseRecord";
import MultipleUser from "@/components/MultipleUser";
import SeatMgmt from "@/components/Seat-mgmt";
import Services from "@/components/Services";
import TenantLeads from "@/components/TenantLeads";
import React from "react";
import multipleBusiness from "@/components/MultipleBusiness";
import RegistrationBoard from "@/components/RegistrationBoard";

const servicePage = () => {
	return (
		<div className="lg:mt-20">
			<AutomaticRent />
			<Services />

			<MultipleUser />
			<BusinessDashboard />
			<ExpenseRecord />
			<TenantLeads />
			<SeatMgmt />
			<multipleBusiness />
			<RegistrationBoard />
			<BillingDashboard />
		</div>
	);
};

export default servicePage;
