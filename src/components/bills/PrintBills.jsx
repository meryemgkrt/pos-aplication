import React from "react";
import { Button, Modal } from "antd";

const PrintBills = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      footer={false}
      title="Fatura Yazdır"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      className="w-full sm:w-3/4 md:w-1/2 lg:w-2/12 xl:w-1/3"
    >
      <section className="py-20 bg-black">
        <div className="px-6 mx-auto bg-white max-w-7xl">
          <article className="overflow-hidden">
            <div className="logo">
              <h1 className="my-6 text-4xl font-bold">LOGO</h1>
            </div>
            <div className="bill-details">
              <div className="grid grid-cols-3 gap-12 sm:grid-cols-4">
                <div className="">
                  <p className="">Fatura Detayı:</p>
                  <p>Unwrapped</p>
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
                    <p>2022.11.21</p>
                  </div>
                </div>
                <div className="hidden text-md text-slate-500 sm:block">
                  <div className="">
                    <p className="font-bold text-slate-700">Şartlar:</p>
                    <p>10 gün</p>
                  </div>
                  <div>
                    <p className="mt-2 font-bold text-slate-700">Vade:</p>
                    <p>2023.11.21</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bill-table-area">
            <table className="min-w-full overflow-hidden divide-slate-500">
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

                <tbody className="">
                  <tr className="border-b border-slate-200 ">
                    <td className="py-4 pr-3">
                      <img
                        className="object-cover w-12 h-12"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </td>
                    <td className="py-4 pr-3">
                      <p className="font-medium text-center">Elma</p>
                    </td>
                    <td className="py-4 pr-3">
                      <p className="text-center">5₺</p>
                    </td>
                    <td className="py-4 pr-3">
                      <p className="text-center ">1</p>
                    </td>
                    <td className="py-4 pr-3">
                      <p className=" text-end">1000₺</p>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 ">
                    <td className="py-4 pr-3">
                      <img
                        className="object-cover w-12 h-12"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </td>
                    <td className="py-4 pr-3">
                      <p className="font-medium text-center">Elma</p>
                    </td>
                    <td className="py-4 pr-3">
                      <p className="text-center">5₺</p>
                    </td>
                    <td className="py-4 pr-3">
                      <p className="text-center ">1</p>
                    </td>
                    <td className="py-4 pr-3">
                      <p className=" text-end">1000₺</p>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      className="hidden pt-4 text-right sm:table-cell"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">
                        Ara Toplam
                      </span>
                    </th>
                    <th
                      className="pt-4 text-left sm:hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <p className="font-normal text-slate-700">Ara Toplam</p>
                    </th>
                    <th className="pt-4 text-right" scope="row">
                      <span className="font-normal text-slate-700">61₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="pt-4 text-right" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">KDV</span>
                    </th>
                    <th className="pt-4 text-right" scope="row">
                      <span className="font-normal text-red-600">+4.88₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="pt-4 text-right" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Total</span>
                    </th>
                    <th className="pt-4 text-right" scope="row">
                      <span className="font-normal text-slate-700">65.88₺</span>
                    </th>
                  </tr>
                </tfoot>
              </table> bu kodlarda ekran küçüldüğünde başlık ve toplam kodları konumunu korusun diğirleri görünmesin
              <div className="py-9">
                <div className="border-t border-slate-300 pt-9">
                  <p>
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
        <Button
          className="text-white bg-green-600 border-none"
          size="large"
          type=""
        >
          Yazdır
        </Button>
      </div>
    </Modal>
  );
};

export default PrintBills;
