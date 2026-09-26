// Shipping rules — shared by the website and the payment server.
// Amounts are in US cents. Adjust rates and delivery times to match your carrier.

export const FREE_US_SHIPPING_THRESHOLD = 5000; // $50

export const US = { code: 'US', name: 'United States' };

// Countries we ship to outside the US (ISO codes accepted by Stripe).
export const INTERNATIONAL_COUNTRIES = [
  ['CA', 'Canada'], ['MX', 'Mexico'], ['GB', 'United Kingdom'], ['IE', 'Ireland'],
  ['FR', 'France'], ['DE', 'Germany'], ['BE', 'Belgium'], ['NL', 'Netherlands'],
  ['LU', 'Luxembourg'], ['CH', 'Switzerland'], ['AT', 'Austria'], ['IT', 'Italy'],
  ['ES', 'Spain'], ['PT', 'Portugal'], ['DK', 'Denmark'], ['SE', 'Sweden'],
  ['NO', 'Norway'], ['FI', 'Finland'], ['PL', 'Poland'], ['AU', 'Australia'],
  ['NZ', 'New Zealand'], ['JP', 'Japan'], ['KR', 'South Korea'], ['SG', 'Singapore'],
  ['AE', 'United Arab Emirates'], ['JM', 'Jamaica'], ['TT', 'Trinidad and Tobago'],
  ['BS', 'Bahamas'], ['BB', 'Barbados'], ['BR', 'Brazil'], ['CM', 'Cameroon'],
  ['NG', 'Nigeria'], ['GH', 'Ghana'], ['CI', "Côte d'Ivoire"], ['SN', 'Senegal'],
  ['KE', 'Kenya'], ['ZA', 'South Africa'], ['GA', 'Gabon'],
].map(([code, name]) => ({ code, name }));

export const ALL_COUNTRIES = [US, ...INTERNATIONAL_COUNTRIES];

export function shippingOptions(countryCode, merchandiseSubtotal) {
  if (countryCode === 'US') {
    const free = merchandiseSubtotal >= FREE_US_SHIPPING_THRESHOLD;
    return [
      {
        id: 'us-standard',
        label: free ? 'Free Standard Shipping' : 'Standard Shipping',
        amount: free ? 0 : 595,
        days: [3, 6],
      },
      { id: 'us-express', label: 'Express Shipping', amount: 1495, days: [1, 3] },
    ];
  }
  if (countryCode === 'CA' || countryCode === 'MX') {
    return [{ id: 'na-intl', label: 'International Shipping', amount: 1695, days: [6, 12] }];
  }
  return [{ id: 'intl', label: 'International Shipping', amount: 2495, days: [8, 20] }];
}

export function findShippingOption(countryCode, merchandiseSubtotal, optionId) {
  const options = shippingOptions(countryCode, merchandiseSubtotal);
  return options.find((o) => o.id === optionId) || options[0];
}
