export const formatPrice = (priceInCents: number, currency: string): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
  }).format(priceInCents / 100);
};
