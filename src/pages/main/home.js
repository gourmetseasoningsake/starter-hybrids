import { store, html } from 'hybrids';
import Session from '~/session';
import Settings from '~/settings';


import QRBill from '@bbitgmbh/bbit.swiss-qr-bill';


const { BbitQRBillGenerator, BbitQRBillLanguage, BbitQRBillAddressType } = QRBill;


const defaultData = {
  account: 'CH2830000011623852950',
  amount: 1234.55,
  currency: 'CHF',
  creditor: {
    type: BbitQRBillAddressType.UNSTRUCTURED,
    name: 'bbit gmbh',
    address: 'Rainweg 10',
    postalCode: '3612',
    locality: 'Steffisburg',
    country: 'CH',
  },
  reference: '000000000000000012312312316',
  debtor: {
    type: BbitQRBillAddressType.UNSTRUCTURED,
    name: 'Test AG',
    address: 'Musterstrasse 1',
    postalCode: '3600',
    locality: 'Thun',
    country: 'CH',
  },
  unstructuredMessage: 'Test message',
  billInformation: 'Test billing information',
  language: BbitQRBillLanguage.DE,
};


const createBill = async () => {
  const qr = new BbitQRBillGenerator();
  const bufferOrBlob = await qr.generate(defaultData);

  const url = URL.createObjectURL(bufferOrBlob);
  window.open(url);
}


// Elements

import ChartBarBasic from '~/elements/charts/bar-basic';



const PageHome = {
  session: store(Session),
  settings: store(Settings),

  content: ({ session, settings }) => html`

    <main>
      <h1 class="h1">Startseite</h1>
      <button onclick=${createBill}>create a bill</button>
      <chart-bar-basic></chart-bar-basic>
    </main>

  `.define({ ChartBarBasic })
};



export default host => html`

  <page-home></page-home>

`.define({ PageHome });
