// import type { Rating, RatingResponse } from '../../../core/interface/rating.interface';

// const ENTITY_NAMES = [
//   'Duisberg Lindskog Family',
//   'Canesdre Holdings LLC',
//   'Arizona Lakeside Partners',
//   'Calis Rockview Estates',
//   'Maple Grove Residences',
//   'Northgate Apartment Group',
//   'Summit Creek Properties',
//   'Harborview Living Trust',
//   'Oakwood Family Ventures',
//   'Riverside Commons LLC',
//   'Pinecrest Manor Group',
//   'Westfield Habitational',
//   'Birchwood Terrace Owners',
//   'Cedar Point Apartments',
//   'Lakeview Shores LP',
//   'Highland Park Residences',
//   'Stonebridge Family Trust',
//   'Meadowbrook Holdings',
//   'Clearwater Estates',
//   'Brookhaven Village LLC',
//   'Silver Oak Properties',
//   'Greenfield Commons',
//   'Sunridge Apartment Co',
//   'Valley View Residences',
//   'Timberline Family Group',
//   'Crossroads Living LLC',
//   'Fairview Manor Trust',
//   'Elm Street Properties',
//   'Parkside Habitational',
//   'Willow Creek Estates',
//   'Grandview Apartment LP',
//   'Southgate Family Holdings',
//   'Eastbrook Residences',
//   'Northstar Living Group',
//   'Blue Ridge Properties',
//   'Heritage Oaks LLC',
//   'Crown Point Estates',
//   'Mill Creek Apartments',
//   'Redwood Terrace Group',
//   'Aspen Grove Residences',
// ];

// const LOCATIONS = [
//   { address: '79 Woodland Ave', city: 'Maple Grove', state: 'MN', zip: '55311', county: 'Hennepin', iso_territory: '502' },
//   { address: '1420 Lakeview Dr', city: 'Minneapolis', state: 'MN', zip: '55408', county: 'Hennepin', iso_territory: '502' },
//   { address: '2200 N Central Ave', city: 'Phoenix', state: 'AZ', zip: '85004', county: 'Maricopa', iso_territory: '601' },
//   { address: '4751 W Oak St', city: 'Phoenix', state: 'AZ', zip: '85009', county: 'Maricopa', iso_territory: '601' },
//   { address: '101 N 1st Ave', city: 'Phoenix', state: 'AZ', zip: '85003', county: 'Maricopa', iso_territory: '601' },
//   { address: '3300 N Scottsdale Rd', city: 'Scottsdale', state: 'AZ', zip: '85251', county: 'Maricopa', iso_territory: '601' },
//   { address: '890 Riverside Pkwy', city: 'Austin', state: 'TX', zip: '78741', county: 'Travis', iso_territory: '704' },
//   { address: '1560 Congress Ave', city: 'Austin', state: 'TX', zip: '78701', county: 'Travis', iso_territory: '704' },
//   { address: '4100 Biscayne Blvd', city: 'Miami', state: 'FL', zip: '33137', county: 'Miami-Dade', iso_territory: '801' },
//   { address: '2750 NW 5th St', city: 'Miami', state: 'FL', zip: '33125', county: 'Miami-Dade', iso_territory: '801' },
//   { address: '1200 Peachtree St NE', city: 'Atlanta', state: 'GA', zip: '30309', county: 'Fulton', iso_territory: '712' },
//   { address: '4550 Roswell Rd', city: 'Atlanta', state: 'GA', zip: '30342', county: 'Fulton', iso_territory: '712' },
//   { address: '7800 W Colfax Ave', city: 'Lakewood', state: 'CO', zip: '80214', county: 'Jefferson', iso_territory: '508' },
//   { address: '1901 Wazee St', city: 'Denver', state: 'CO', zip: '80202', county: 'Denver', iso_territory: '508' },
//   { address: '500 S Main St', city: 'Salt Lake City', state: 'UT', zip: '84101', county: 'Salt Lake', iso_territory: '510' },
//   { address: '2100 S State St', city: 'Salt Lake City', state: 'UT', zip: '84115', county: 'Salt Lake', iso_territory: '510' },
//   { address: '1600 Market St', city: 'Philadelphia', state: 'PA', zip: '19103', county: 'Philadelphia', iso_territory: '403' },
//   { address: '4500 City Ave', city: 'Philadelphia', state: 'PA', zip: '19131', county: 'Philadelphia', iso_territory: '403' },
//   { address: '300 N Michigan Ave', city: 'Chicago', state: 'IL', zip: '60601', county: 'Cook', iso_territory: '501' },
//   { address: '5400 N Sheridan Rd', city: 'Chicago', state: 'IL', zip: '60640', county: 'Cook', iso_territory: '501' },
//   { address: '800 Boylston St', city: 'Boston', state: 'MA', zip: '02199', county: 'Suffolk', iso_territory: '404' },
//   { address: '1250 Beacon St', city: 'Brookline', state: 'MA', zip: '02446', county: 'Norfolk', iso_territory: '404' },
//   { address: '901 E Pike St', city: 'Seattle', state: 'WA', zip: '98122', county: 'King', iso_territory: '509' },
//   { address: '400 Broad St', city: 'Seattle', state: 'WA', zip: '98109', county: 'King', iso_territory: '509' },
//   { address: '1500 SW Morrison St', city: 'Portland', state: 'OR', zip: '97205', county: 'Multnomah', iso_territory: '507' },
//   { address: '3200 NE Sandy Blvd', city: 'Portland', state: 'OR', zip: '97232', county: 'Multnomah', iso_territory: '507' },
//   { address: '600 Travis St', city: 'Houston', state: 'TX', zip: '77002', county: 'Harris', iso_territory: '704' },
//   { address: '9800 Richmond Ave', city: 'Houston', state: 'TX', zip: '77042', county: 'Harris', iso_territory: '704' },
//   { address: '200 S Tryon St', city: 'Charlotte', state: 'NC', zip: '28202', county: 'Mecklenburg', iso_territory: '715' },
//   { address: '5100 South Blvd', city: 'Charlotte', state: 'NC', zip: '28217', county: 'Mecklenburg', iso_territory: '715' },
//   { address: '1000 Broadway', city: 'Nashville', state: 'TN', zip: '37203', county: 'Davidson', iso_territory: '713' },
//   { address: '4500 Harding Pike', city: 'Nashville', state: 'TN', zip: '37205', county: 'Davidson', iso_territory: '713' },
//   { address: '2500 Woodward Ave', city: 'Detroit', state: 'MI', zip: '48201', county: 'Wayne', iso_territory: '503' },
//   { address: '8800 E Jefferson Ave', city: 'Detroit', state: 'MI', zip: '48214', county: 'Wayne', iso_territory: '503' },
//   { address: '700 Louisiana St', city: 'Houston', state: 'TX', zip: '77002', county: 'Harris', iso_territory: '704' },
//   { address: '1801 California St', city: 'Denver', state: 'CO', zip: '80202', county: 'Denver', iso_territory: '508' },
//   { address: '50 Fremont St', city: 'San Francisco', state: 'CA', zip: '94105', county: 'San Francisco', iso_territory: '606' },
//   { address: '1999 Harrison St', city: 'Oakland', state: 'CA', zip: '94612', county: 'Alameda', iso_territory: '606' },
//   { address: '3500 Las Vegas Blvd S', city: 'Las Vegas', state: 'NV', zip: '89109', county: 'Clark', iso_territory: '602' },
//   { address: '6400 W Charleston Blvd', city: 'Las Vegas', state: 'NV', zip: '89146', county: 'Clark', iso_territory: '602' },
// ];

// const GL_STATUSES = ['Bound', 'Bound', 'Bound', 'Quote', 'Review', 'Indication', 'Submit'];

// function formatQuoteId(index: number): string {
//   return `QGL${String(index).padStart(6, '0')}-25`;
// }

// function formatPolicyId(index: number): string {
//   return `ARM${String(index).padStart(6, '0')}-25`;
// }

// function formatCurrency(value: number): string {
//   return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
// }

// function formatCurrencySpaced(value: number): string {
//   return `$ ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
// }

// function buildRating(index: number): Rating {
//   const location = LOCATIONS[index - 1];
//   const isTemplateRow = index === 1;
//   const scale = 1 + (index % 10) * 0.02;
//   const proRateFactor = isTemplateRow ? 0.858 : 0.82 + (index % 14) * 0.01;

//   const subTotalGlBase = isTemplateRow ? 6431.32 : 6000 * scale;
//   const beachPremium = isTemplateRow ? 195 : 150 + (index % 5) * 15;
//   const parksPremium = isTemplateRow ? 244 : 200 + (index % 6) * 20;
//   const poolPremium = isTemplateRow ? 159 : 120 + (index % 4) * 25;
//   const parkingPremium = isTemplateRow ? 2165 : 2000 * scale;
//   const subTotalPolicy = subTotalGlBase + beachPremium + parksPremium + poolPremium + parkingPremium;
//   const abPremium = subTotalPolicy * 0.075;
//   const habPremium = abPremium;
//   const wosPremium = 125;
//   const pncPremium = 125;
//   const baiPremium = 125;
//   const hnoaPremium = 250;
//   const totalGlAnnual = subTotalPolicy + abPremium + habPremium + wosPremium + pncPremium + baiPremium + hnoaPremium;
//   const finalGlAnnual = Math.max(totalGlAnnual, 2500);
//   const prorate = proRateFactor;

//   return {
//     quote_id: formatQuoteId(index),
//     policy_id: formatPolicyId(index),
//     account_loc_id: index,
//     submission_loc_id: `${index}.1`,
//     gl_status: isTemplateRow ? 'Bound' : GL_STATUSES[index % GL_STATUSES.length],
//     effective_date: '7/21/2025',
//     expiration_date: '5/30/2026',
//     cancellation_date: '',
//     pro_rate_factor: proRateFactor.toFixed(3),
//     entity: ENTITY_NAMES[index - 1],
//     address: location.address,
//     city: location.city,
//     state: location.state,
//     zip: location.zip,
//     county: location.county,
//     iso_territory: location.iso_territory,
//     primary_class_code: '60010',
//     primary_exposure_basis: 'Each Unit',
//     primary_exposure: isTemplateRow ? 50 : 40 + (index % 11) * 5,
//     secondary_class_code: '61226',
//     secondary_exposure_basis: isTemplateRow ? 'Each Unit' : 'Area - each 1,000 square feet of area',
//     secondary_exposure: isTemplateRow ? 20 : 15 + (index % 8),
//     tertiary_class_code: '60013',
//     tertiary_exposure_basis: 'Each Unit',
//     tertiary_exposure: isTemplateRow ? 20 : 15 + (index % 6),
//     occ_agg_limit: '1M/3M',
//     deductible: 5000,
//     num_beaches: isTemplateRow ? 1 : index % 3 === 0 ? 0 : 1,
//     num_acres_parks: isTemplateRow ? 1 : index % 2 === 0 ? 2 : 1,
//     num_pools: isTemplateRow ? 1 : index % 4 === 0 ? 2 : 1,
//     wos: 'Yes',
//     pnc: 'Yes',
//     bai: 'Yes',
//     hnoa: 'Yes',
//     ab_sub_limit: '$500,000',
//     hab_sub_limit: '$500,000',
//     primary_parking_class_code: '46603',
//     primary_parking_exposure_basis: 'Gross Sales – per $1,000 gross sales',
//     primary_parking_exposure: isTemplateRow ? 200 : 150 + (index % 6) * 25,
//     secondary_parking_class_code: '46607',
//     secondary_parking_exposure_basis: 'Area – each 1,000 square feet of area',
//     secondary_parking_exposure: isTemplateRow ? 100 : 80 + (index % 5) * 10,
//     tertiary_parking_class_code: '46604',
//     tertiary_parking_exposure_basis: 'Gross Sales – per $1,000 gross sales',
//     tertiary_parking_exposure: isTemplateRow ? 150 : 100 + (index % 4) * 20,
//     primary_parking_prem_ops_base_rate: isTemplateRow ? '$2.72' : `$${(2.5 + (index % 5) * 0.1).toFixed(2)}`,
//     secondary_parking_prem_ops_base_rate: isTemplateRow ? '$11.50' : `$${(10 + (index % 4) * 0.5).toFixed(2)}`,
//     tertiary_parking_prem_ops_base_rate: isTemplateRow ? '$3.14' : `$${(3 + (index % 3) * 0.15).toFixed(2)}`,
//     lcm: '2.5',
//     ilf: '1.90',
//     primary_premium_ops_base_rate: isTemplateRow ? '21.700' : (20 + (index % 5)).toFixed(3),
//     secondary_premium_ops_base_rate: isTemplateRow ? '7.500' : (7 + (index % 4) * 0.2).toFixed(3),
//     tertiary_premium_ops_base_rate: isTemplateRow ? '35.100' : (32 + (index % 6) * 0.5).toFixed(3),
//     deductible_factor: isTemplateRow ? '0.932' : (0.9 + (index % 5) * 0.01).toFixed(3),
//     irpm_debit_credit: isTemplateRow ? '0.75' : (0.7 + (index % 6) * 0.02).toFixed(2),
//     tier_factor: 1,
//     sub_total_gl_base_annual_premium: formatCurrency(isTemplateRow ? 6431.32 : subTotalGlBase),
//     beach_annual_premium: formatCurrency(beachPremium),
//     parks_annual_premium: formatCurrency(parksPremium),
//     swimming_pool_annual_premium: formatCurrency(poolPremium),
//     parking_annual_premium: formatCurrency(parkingPremium),
//     sub_total_policy_annual: formatCurrency(isTemplateRow ? 9194.32 : subTotalPolicy),
//     ab_annual_premium: formatCurrency(isTemplateRow ? 689.57 : abPremium),
//     hab_annual_premium: formatCurrency(isTemplateRow ? 689.57 : habPremium),
//     wos_annual_premium: formatCurrency(wosPremium),
//     pnc_annual_premium: formatCurrency(pncPremium),
//     blanket_ai_annual_premium: formatCurrency(baiPremium),
//     hnoa_annual_premium: formatCurrency(hnoaPremium),
//     total_gl_annual_premium: formatCurrency(isTemplateRow ? 11198.47 : totalGlAnnual),
//     min_annual_premium: '$2,500.00',
//     final_gl_annual_premium: formatCurrency(isTemplateRow ? 11198.47 : finalGlAnnual),
//     sub_total_policy_prorated_premium: formatCurrency(isTemplateRow ? 7888.73 : subTotalPolicy * prorate),
//     ab_prorated_premium: formatCurrency(isTemplateRow ? 591.65 : abPremium * prorate),
//     hab_prorated_premium: formatCurrency(isTemplateRow ? 591.65 : habPremium * prorate),
//     wos_prorated_premium: formatCurrency(isTemplateRow ? 107.25 : wosPremium * prorate),
//     pnc_prorated_premium: formatCurrency(isTemplateRow ? 107.25 : pncPremium * prorate),
//     blanket_ai_prorated_premium: formatCurrency(isTemplateRow ? 107.25 : baiPremium * prorate),
//     hnoa_prorated_premium: formatCurrency(isTemplateRow ? 214.5 : hnoaPremium * prorate),
//     prorated_arm_fee: formatCurrencySpaced(isTemplateRow ? 231.91 : 200 * prorate),
//     prorated_policy_total: formatCurrencySpaced(isTemplateRow ? 4216.56 : 4000 * prorate),
//     prorated_sl_stamping_fee: formatCurrencySpaced(isTemplateRow ? 8.01 : 7.5 * prorate),
//     prorated_sl_tax: formatCurrencySpaced(isTemplateRow ? 133.45 : 120 * prorate),
//     prorated_sl_other_fee: '$ 0.00',
//     prorated_arm_inspection_fee: '$ 0.00',
//     final_policy_total: formatCurrencySpaced(isTemplateRow ? 4589.93 : 4500 * prorate),
//   };
// }

// /** Dummy API-style payload for the GL Rating table (40 records). */
// export const RATING_RESPONSE: RatingResponse = {
//   rating_list: Array.from({ length: 40 }, (_, i) => buildRating(i + 1)),
// };
