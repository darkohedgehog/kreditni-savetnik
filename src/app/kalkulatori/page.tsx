import Link from 'next/link';

const KalkulatoriPage = () => {
  return (
    <div>
      <h1>Kalkulatori</h1>
      <ul>
        <li><Link href="/kalkulatori/kes-kredit">Keš Kredit</Link></li>
        <li><Link href="/kalkulatori/auto-kredit">Auto Kredit</Link></li>
        <li><Link href="/kalkulatori/kredit-za-refinansiranje">Kredit za Refinansiranje</Link></li>
        <li><Link href="/kalkulatori/stambeni-kredit">Stambeni Kredit</Link></li>
      </ul>
    </div>
  );
};

export default KalkulatoriPage;
