import React, { useState, useRef } from "react";
import { Button, Modal } from "antd";
import { useReactToPrint } from "react-to-print";

const PrintBills = ({ isModalOpen, setIsModalOpen, customer }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Modal
      footer={false}
      title="Fatura Yazdır"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2"
    >
      <section className="py-20 bg-black" ref={componentRef}>
        <div className="max-w-5xl px-6 mx-auto bg-white">
          <article className="overflow-hidden">
            <div className="my-6 logo">
              <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid grid-cols-4 gap-12">
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Fatura Detayı:</p>
                  <p>{customer?.customerName}</p>
                  <p> Fake Street 123</p>
                  <p> San Javier </p>
                  <p> CA 1234</p>
                </div>
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Fatura:</p>
                  The Boring Company
                  <p> Tesla Street 007</p>
                  <p> Frisco </p>
                  <p> CA 0000</p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Fatura numarası:</p>
                    <p>00041</p>
                  </div>
                  <div>
                    <p className="mt-2 font-bold text-slate-700">
                      Veriliş Tarihi:
                    </p>
                    <p>{customer?.createdAt.substring(0, 10)}</p>
                  </div>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Şartlar:</p>
                    <p>10 gün</p>
                  </div>
                  <div>
                    <p className="mt-2 font-bold text-slate-700">Vade:</p>
                    <p>2023-11-21</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bill-table-area">
              <table className="min-w-full overflow-hidden divide-y divide-slate-500">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Görsel
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      {" "}
                      Başlık
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Fiyat
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Adet
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Toplam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customer?.cartItems.map((item, index) => (
                    <tr
                      key={item.id || index}
                      className="border-b border-slate-200"
                    >
                      <td className="hidden py-4 sm:table-cell">
                        <img
                          src={item.img}
                          alt=""
                          className="object-cover w-12 h-12"
                        />
                      </td>
                      <td className="hidden py-4 sm:table-cell">
                        <div className="flex flex-col">
                          <span className="font-medium">{item.title}</span>
                          <span className="inline-block text-xs sm:hidden">
                            Birim Fiyatı {item.price}₺
                          </span>
                        </div>
                      </td>
                      <td className="py-4 sm:hidden" colSpan={4}>
                        <div className="flex flex-col">
                          <span className="font-medium">{item.title}</span>
                          <span className="inline-block text-xs sm:hidden">
                            Birim Fiyatı {item.price}₺
                          </span>
                        </div>
                      </td>
                      <td className="hidden py-4 text-center sm:table-cell">
                        <span>{item.price.toFixed(2)}₺</span>
                      </td>
                      <td className="hidden py-4 text-right sm:text-center sm:table-cell">
                        <span>{item.quantity}</span>
                      </td>
                      <td className="py-4 text-end">
                        <span>{(item.price * item.quantity).toFixed(2)}₺</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th className="pt-6 text-right" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">
                        Ara Toplam
                      </span>
                    </th>
                    <th className="pt-4 text-right" scope="row">
                      <span className="font-normal text-slate-700">
                        {" "}
                        {customer?.subTotal}₺
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th className="pt-4 text-right" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">KDV</span>
                    </th>
                    <th className="pt-4 text-right" scope="row">
                      <span className="font-normal text-red-600">
                        {customer?.tax}₺
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th className="pt-4 text-right" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Toplam</span>
                    </th>
                    <th className="pt-4 text-right" scope="row">
                      <span className="font-normal text-slate-700"> {customer?.totalAmount}₺</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                    Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                    sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                    talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                    ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                    Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                    geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                    England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                    Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
        <Button onClick={handlePrint} type="primary" size="large" className="text-white bg-green-600 border-none" >
          Yazdır
        </Button>
      </div>
    </Modal>
  );
};
export default PrintBills;
