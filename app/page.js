import AutomaticRent from "@/components/AutomaticRent";
import Getapp from "@/components/Getapp";
import Homepage from "@/components/Homepage";
import Subscription from "@/components/Subscription";
import Tenant from "@/components/Tenant";
import Carousel from "@/components/Carousel";
import SeatMgmt from "@/components/Seat-mgmt";
import MultipleBusiness from "@/components/MultipleBusiness";
import RegestrationBoard from "@/components/RegistrationBoard";
import ExpenseRecord from "@/components/ExpenseRecord";
import TenantLeads from "@/components/TenantLeads";
import BusinessDashboard from "@/components/BusinessDashboard";
import MultipleUser from "@/components/MultipleUser";
import BillingDashboard from "@/components/BillingDashboard";
import Services from "@/components/Services";
import AllInOneApp from "@/components/AllInOneApp";

const page = () => {
	return (
		<div>
			<Carousel />
			<Homepage />
			<AutomaticRent />
			{/* <Getapp /> */}

			{/* <AllInOneApp /> */}
			<Services />

			<MultipleUser />
			<BusinessDashboard />
			<ExpenseRecord />
			<TenantLeads />
			<SeatMgmt />
			<MultipleBusiness />
			<RegestrationBoard />
			<BillingDashboard />

			<Tenant />
			<Subscription />
		</div>
	);
};

export default page;
